import { Vue } from "vue-class-component";
import { ControllerVal, FormResult, YoForm, YoFormControllerPerfect } from "./form.type";
import { SubjectOrder } from "@ztwx/form";
export declare class Form extends Vue {
    grid: number;
    dense: boolean;
    disabled: boolean;
    gap: number;
    errDynamicClear: boolean;
    errDynamicShow: boolean;
    form: YoForm<FormResult, YoFormControllerPerfect<ControllerVal>>;
    subOrders: SubjectOrder<any>[];
    watchForm(v: YoForm<FormResult, YoFormControllerPerfect<ControllerVal>>): void;
    clearSubOrders(): void;
    unmounted(): void;
}
