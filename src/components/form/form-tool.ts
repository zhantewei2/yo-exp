import {
  YoFormControllerPerfect,
  YoForm,
  ControllerVal,
  YoFormController,
  ValueChange,
  YoControllers,
  FormResult,
  YoFormControllerParam,
} from "./form.type";
import { Watch } from "vue-property-decorator";
import {
  Subject,
  requiredValidator,
  fnValidator,
  Validator,
  notBlankValidator,
  minLengthValidator,
  maxLengthValidator
} from "@ztwx/form";
import { setting } from "../../setting";
import { customRef, reactive } from "vue";

export type PreSetValFn = (
  controller: YoFormControllerPerfect<ControllerVal>
) => ControllerVal;

export type PreCreateFn = (
  controller: YoFormControllerPerfect<ControllerVal>
) => ControllerVal;

export type AfterResultFn = (
  controllers: YoControllers,
  result: FormResult
) => FormResult;

export class GlobalHandle {
  preSetValFnList: PreSetValFn[] = [];
  preCreateFnList: PreCreateFn[] = [];
  afterResultFnList: AfterResultFn[] = [];

  handlePreCreate(controller: YoFormControllerPerfect<ControllerVal>): void {
    if (controller.disableGlobalControllerHandle) return;
    for (let i of this.preCreateFnList) {
      i(controller);
    }
  }

  handlePreSetVal(controller: YoFormControllerPerfect<ControllerVal>): void {
    if (controller.disableGlobalControllerHandle) return;
    for (let i of this.preSetValFnList) {
      controller.value = i(controller);
    }
  }

  handleAfterResult(
    controllers: YoControllers,
    result: FormResult
  ): FormResult {
    let result2: FormResult = result;
    for (let i of this.afterResultFnList) {
      result2 = i(controllers, result);
    }
    return result2;
  }
}
export const formGlobalHandle = new GlobalHandle();

export const handleValueChange = <T extends ControllerVal>(
  valueChange: ValueChange<T>,
  c: YoFormController<T>,
  init: boolean
) => {
  if (init) {
    if (typeof valueChange === "object" && valueChange != null) {
      valueChange.immediate &&
        valueChange.handle &&
        valueChange.handle(c.value, c);
    }
  } else {
    if (typeof valueChange === "function") {
      valueChange(c.value, c);
    } else if (typeof valueChange === "object" && valueChange != null) {
      valueChange.handle && valueChange.handle(c.value, c);
    }
  }
};

export const demonErrMessage = (
  valid: Validator,
  val: ControllerVal
): string => {
  if (typeof valid.errMessage == "string") {
    return valid.errMessage;
  }
  if (typeof valid.errMessage == "function") {
    return valid.errMessage(val);
  }
  return "";
};

const assemblyController = <T extends ControllerVal>(
  c: YoFormControllerPerfect<T>
) => {
  c._originVal = c.value;
  c.error ??= "";
  c._setOrigin = function (val: T, skipModifyCurrentValue = false) {
    this._originVal = val;
    if (!skipModifyCurrentValue) this.value = val;
  };

  c._checkValid = async function (val?: T) {
    this.error = "";
    if (!this.validators) return true;
    const value: any = val ?? this.value;
    for (let valid of this.validators) {
      const pass = valid.apply(value);
      if (typeof pass === "boolean" && !pass)
        return (this.error = demonErrMessage(valid, value));

      if (!(await pass)) return (this.error = demonErrMessage(valid, value));
    }
    return true;
  };

  c._clean = function () {
    this.value = undefined;
    this.error = "";
  };

  c._reset = function () {
    this.value = this._originVal;
    this.error = "";
  };
  c._clearErr = function () {
    this.error = "";
  };
};

export class YoFormImpl<
  T extends FormResult,
  S extends YoFormControllerPerfect<ControllerVal>
> implements YoForm<T, S>
{
  controllers: S[];
  dict: Record<string, S>;

  setControllers(controllers: S[]) {
    this.controllers = controllers;
    const dict: Record<string, S> = {};
    for (let i of this.controllers) {
      dict[i.id] = i;
    }
    this.dict = dict;
  }

  getValue(): T {
    const dict: FormResult = {};
    this.controllers.forEach((i) => {
      dict[i.id] = i.value;
    });
    return dict as T;
  }

  //手动校验表单
  async validForm(): Promise<string[] | true> {
    const errList: string[] = [];

    for (let i of this.controllers) {
      const controllerPass = await i._checkValid();
      if (typeof controllerPass === "string") {
        errList.push(controllerPass);
      }
    }
    return errList.length > 0 ? errList : true;
  }
  //设置初始值
  setOriginValue(dict: Partial<T>, skipModifyCurrentValue = false): void {
    Object.keys(dict).forEach((key) => {
      const controller = this.controllers.find((i) => i.id === key);
      controller && controller._setOrigin(dict[key], skipModifyCurrentValue);
    });
  }

  getOriginValue(): Partial<T> {
    const dict: FormResult = {};
    this.controllers.forEach((i) => {
      dict[i.id] = i._originVal;
    });
    return formGlobalHandle.handleAfterResult(
      this.controllers,
      dict
    ) as Partial<T>;
  }
  //获得更新值
  getUpdateValue(): Partial<T> {
    const formVal = this.getValue();
    const originVal = this.getOriginValue();
    let curVal: ControllerVal;
    let orgVal: ControllerVal;
    const updateVal: FormResult = {};
    Object.keys(formVal).forEach((key) => {
      curVal = formVal[key];
      orgVal = originVal[key];
      if (curVal !== orgVal) updateVal[key] = curVal;
    });
    return formGlobalHandle.handleAfterResult(
      this.controllers,
      updateVal
    ) as Partial<T>;
  }
  clean(): void {
    this.controllers.forEach((i) => i._clean());
  }
  reset(): void {
    this.controllers.forEach((i) => i._reset());
  }
}

const replaceErrText=(txt:string,v:number|string)=>
    txt.replace(/%s/g,v+"");

export const appendValidator=(c:YoFormControllerPerfect<ControllerVal>)=>{

  if (c.required) {
    c.validators?.push(
        new fnValidator(
            (val) => val === 0 || !!val,
            () => (c.label || "") + setting.form.requireText
        )
    );
  }

  if(c.notBlank) {
    c.validators?.push(
        new notBlankValidator((c.label || "") + setting.form.notBlankText)
    )
  }

  if(c.minLength) {
    c.validators?.push(
        new minLengthValidator(c.label ||"" + replaceErrText(setting.form.minLengthText,c.minLength),c.minLength)
    )
  }

  if(c.maxLength){
    c.validators?.push(
        new maxLengthValidator(c.label||'' + replaceErrText(setting.form.maxLengthText,c.maxLength),c.maxLength)
    )
  }

  if(c.minNum){
    c.validators?.push(
        new maxLengthValidator(c.label||''+ replaceErrText(setting.form.minNumText,c.minNum),c.minNum)
    )
  }


  if(c.maxNum){
    c.validators?.push(
        new maxLengthValidator(c.label||''+ replaceErrText(setting.form.maxNumText,c.maxNum),c.maxNum)
    )
  }

}

export const createForm = <
  T extends FormResult,
  S extends YoFormControllerPerfect<ControllerVal>
>(
  originControllers: YoFormController<ControllerVal>[]
): YoForm<T, S> => {
  const yoForm = new YoFormImpl<T, S>();

  const controllers = (originControllers as any).map(
    (c: YoFormControllerPerfect<ControllerVal>) => {
      c._valueChangeSubject = new Subject<ControllerVal>();

      c.validators = c.validators || [];
      appendValidator(c);
      formGlobalHandle.handlePreCreate(c);

      assemblyController(c);
      const proxyC = new Proxy(c, {
        set(c, key, val) {
          if (key === "value") {
            formGlobalHandle.handlePreSetVal(proxyC);
            Reflect.set(c, key, val);
            c.valueChange &&
              handleValueChange(c.valueChange, proxyC, false);
            c._valueChangeSubject.next(val);
          }else{
            Reflect.set(c, key, val);
          }

          return true;
        },
      });

      formGlobalHandle.handlePreSetVal(proxyC);
      // immediate valueChange.
      proxyC.valueChange &&
        handleValueChange(proxyC.valueChange, proxyC, true);

      return proxyC;
    }
  );
  yoForm.setControllers(controllers);

  return yoForm;
};
