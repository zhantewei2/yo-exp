import { Options, Vue } from "vue-class-component";
import { h, resolveComponent, Transition } from "vue";

import { Prop, Watch } from "vue-property-decorator";
import { Group, Cell } from "../group";
import {
  ControllerVal,
  FormResult,
  YoForm,
  YoFormControllerPerfect,
} from "./form.type";
import { SubjectOrder } from "@ztwx/form";
import { setting } from "../../setting";

@Options({
  render(this: Form) {
    return h(
      Group,
      {
        grid: this.grid,
        dense: this.dense,
        gap: this.gap,
      },
      () =>
        !this.form
          ? null
          : this.form.controllers.map((i: YoFormControllerPerfect<any>) =>
              !i.shadow
                ? h(
                    Cell,
                    {
                      span:i.span,
                      key: i.id,
                      label: i.label,
                      important: i.required || i.star,
                    },
                    {
                      default: () => [
                        i.render ? i.render(i, this.form.dict) : null,
                        i.tag
                          ? h(resolveComponent(i.tag), {
                              modelValue: i.value,
                              "onUpdate:modelValue": (v: any) => {
                                return i.value = v
                              },
                              disabled: i.disabled || this.disabled,
                              ...(i.props || {}),
                            })
                          : null,
                      ],
                      decorator: () =>
                        h(Transition, { name: "yo-fade" }, () =>
                          i.error
                            ? h(
                                "div",
                                {
                                  class: "yo-group-cell-error",
                                },
                                i.error
                              )
                            : null
                        ),
                    }
                  )
                : null
            )
    );
  },
})
export class Form extends Vue {
  @Prop() grid: number;
  @Prop() dense: boolean;
  @Prop() disabled: boolean;
  @Prop() gap: number;
  //动态清除表单错误
  @Prop({ default: setting.form.errDynamicClear }) errDynamicClear: boolean;
  //动态展示表单错误
  @Prop({ default: setting.form.errDynamicShow }) errDynamicShow: boolean;
  @Prop() form: YoForm<FormResult, YoFormControllerPerfect<ControllerVal>>;
  subOrders: SubjectOrder<any>[];
  @Watch("form", { immediate: true }) watchForm(
    v: YoForm<FormResult, YoFormControllerPerfect<ControllerVal>>
  ) {
    if (!v) return;
    this.clearSubOrders();
    v.controllers.forEach((i) => {
      this.subOrders.push(
        i._valueChangeSubject.subscribe((val) => {
          // console.log("--", i);
          if (this.errDynamicShow) {
            i._checkValid(val);
          } else if (this.errDynamicClear) {
            i._clearErr();
          }
        })
      );
    });
  }

  clearSubOrders() {
    this.subOrders && this.subOrders.forEach((i) => i.unsubscribe);
    this.subOrders = [];
  }

  unmounted() {
    this.clearSubOrders();
  }
}
