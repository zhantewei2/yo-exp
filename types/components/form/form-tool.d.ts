import { YoFormControllerPerfect, YoForm, ControllerVal, YoFormController, ValueChange, YoControllers, FormResult } from "./form.type";
import { Validator } from "@ztwx/form";
export declare type PreSetValFn = (controller: YoFormControllerPerfect<ControllerVal>) => ControllerVal;
export declare type PreCreateFn = (controller: YoFormControllerPerfect<ControllerVal>) => ControllerVal;
export declare type AfterResultFn = (controllers: YoControllers, result: FormResult) => FormResult;
export declare class GlobalHandle {
    preSetValFnList: PreSetValFn[];
    preCreateFnList: PreCreateFn[];
    afterResultFnList: AfterResultFn[];
    handlePreCreate(controller: YoFormControllerPerfect<ControllerVal>): void;
    handlePreSetVal(controller: YoFormControllerPerfect<ControllerVal>): void;
    handleAfterResult(controllers: YoControllers, result: FormResult): FormResult;
}
export declare const formGlobalHandle: GlobalHandle;
export declare const handleValueChange: <T extends unknown>(valueChange: ValueChange<T>, c: YoFormController<T>, init: boolean) => void;
export declare const demonErrMessage: (valid: Validator, val: ControllerVal) => string;
export declare class YoFormImpl<T extends FormResult, S extends YoFormControllerPerfect<ControllerVal>> implements YoForm<T, S> {
    controllers: S[];
    dict: Record<string, S>;
    setControllers(controllers: S[]): void;
    getValue(): T;
    validForm(): Promise<string[] | true>;
    setOriginValue(dict: Partial<T>, skipModifyCurrentValue?: boolean): void;
    getOriginValue(): Partial<T>;
    getUpdateValue(): Partial<T>;
    clean(): void;
    reset(): void;
}
export declare const appendValidator: (c: YoFormControllerPerfect<ControllerVal>) => void;
export declare const createForm: <T extends FormResult, S extends YoFormControllerPerfect<any>>(originControllers: YoFormController<ControllerVal>[]) => YoForm<T, S>;
