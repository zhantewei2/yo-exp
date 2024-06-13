import { VNode } from "vue";
import { Validator, SubjectOrder, Subject } from "@ztwx/form";
export declare type ControllerVal = string | number | boolean | undefined | null | any;
export declare type ControllerValueChangeFn<T extends ControllerVal> = (val: T | undefined, controller: YoFormController<T>) => void;
export declare type ValueChange<T extends ControllerVal> = ControllerValueChangeFn<T> | {
    immediate?: boolean;
    handle: ControllerValueChangeFn<T>;
};
export interface YoFormControllerParam<T extends ControllerVal> {
    valueChangeOrder?: SubjectOrder<any>;
    error?: string;
    id: string;
    value?: T;
    validators?: Validator[];
    label?: string;
    span?: number;
    star?: boolean;
    props?: {
        [key: string]: any;
    };
    required?: boolean;
    notBlank?: boolean;
    maxLength?: number;
    minLength?: number;
    maxNum?: number;
    minNum?: number;
    notEmptyList?: boolean;
    disableGlobalControllerHandle?: boolean;
    valueChange?: ValueChange<T>;
    disabled?: boolean;
    shadow?: boolean;
}
export declare type YoFormControllerTag<T extends ControllerVal> = {
    tag: string;
    render?: never;
} & YoFormControllerParam<T>;
export declare type YoFormControllerRender<T extends ControllerVal> = {
    tag?: never;
    render: (controller: YoFormControllerPerfect<T>, dictController: DictController) => VNode;
} & YoFormControllerParam<T>;
export declare type YoFormController<T extends ControllerVal> = YoFormControllerTag<T> | YoFormControllerRender<T>;
export declare type YoFormControllerPerfect<T extends ControllerVal> = {
    _originVal?: T;
    _setOrigin(val: T, skipModifyCurrentVal: boolean): void;
    _valueChangeSubject: Subject<T>;
    _checkValid: (val?: T) => Promise<string | true>;
    _clean: () => void;
    _reset: () => void;
    _clearErr: () => void;
} & YoFormController<T>;
export declare type YoControllers = YoFormControllerPerfect<ControllerVal>[];
export declare type FormResult = {
    [k: string]: ControllerVal;
};
export declare type DictController = Record<string, YoFormControllerPerfect<ControllerVal>>;
export interface YoForm<T extends FormResult, S extends YoFormControllerPerfect<ControllerVal>> {
    controllers: S[];
    dict: DictController;
    getValue(): T;
    setOriginValue(dict: Partial<T>, skipModifyCurrentValue?: boolean): void;
    getOriginValue(): Partial<T>;
    getUpdateValue(): Partial<T>;
    validForm(): Promise<string[] | true>;
    clean(): void;
    reset(): void;
}
