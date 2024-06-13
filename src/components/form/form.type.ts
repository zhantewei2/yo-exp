import { VNode } from "vue";
import { Validator, SubjectOrder, Subject } from "@ztwx/form";
export type ControllerVal = string | number | boolean | undefined | null | any;
export type ControllerValueChangeFn<T extends ControllerVal> = (
  val: T | undefined,
  controller: YoFormController<T>
) => void;

export type ValueChange<T extends ControllerVal> =
  | ControllerValueChangeFn<T>
  | {
      immediate?: boolean;
      handle: ControllerValueChangeFn<T>;
    }; // controller value改变

export interface YoFormControllerParam<T extends ControllerVal> {
  valueChangeOrder?: SubjectOrder<any>;
  error?: string;
  id: string;
  value?: T; //初始值
  validators?: Validator[];
  label?: string; //label
  span?: number; // cell占据column数，默认1
  star?: boolean; //star 红色*
  props?: { [key: string]: any };
  required?: boolean;
  //增加内置校验器
  notBlank? :boolean; // string trim后不为空
  maxLength?: number;
  minLength?: number;
  maxNum?:number;
  minNum?:number;
  notEmptyList?: boolean; //数组不可为空且必须存在元素
  disableGlobalControllerHandle?: boolean; //禁用全局处理 tag
  valueChange?: ValueChange<T>;
  disabled?: boolean; //disabled;
  shadow?: boolean; /// 不显示于ui;
}

export type YoFormControllerTag<T extends ControllerVal> = {
  tag: string;
  render?: never;
} & YoFormControllerParam<T>;

export type YoFormControllerRender<T extends ControllerVal> = {
  tag?: never;
  render: (
    controller: YoFormControllerPerfect<T>,
    dictController: DictController
  ) => VNode; //value  render渲染
} & YoFormControllerParam<T>;

export type YoFormController<T extends ControllerVal> =
  | YoFormControllerTag<T>
  | YoFormControllerRender<T>;

export type YoFormControllerPerfect<T extends ControllerVal> = {
  //private property
  _originVal?: T;
  _setOrigin(val: T, skipModifyCurrentVal: boolean): void;
  _valueChangeSubject: Subject<T>;
  _checkValid: (val?: T) => Promise<string | true>;
  _clean: () => void;
  _reset: () => void;
  _clearErr: () => void;
} & YoFormController<T>;

export type YoControllers = YoFormControllerPerfect<ControllerVal>[];

export type FormResult = {
  [k: string]: ControllerVal;
};
export type DictController = Record<
  string,
  YoFormControllerPerfect<ControllerVal>
>;
export interface YoForm<
  T extends FormResult,
  S extends YoFormControllerPerfect<ControllerVal>
> {
  controllers: S[];
  dict: DictController;
  getValue(): T;
  setOriginValue(dict: Partial<T>, skipModifyCurrentValue?: boolean): void;
  getOriginValue(): Partial<T>;
  getUpdateValue(): Partial<T>;
  validForm(): Promise<string[] | true>;

  //clean all to undefined;
  clean(): void;
  //reset all to value origin.
  reset(): void;
}
