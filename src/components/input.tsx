import { registryInput } from "@voyo/core/dest/components/registry";
import { h } from "vue";
import { filterObject } from "../utils";

registryInput();

export const Input: any = {
  render() {
    const prefix = this.$slots.prefix && this.$slots.prefix();
    const suffix = this.$slots.suffix && this.$slots.suffix();
    return h(
      "voyoc-input",
      {
        value: this.$attrs.modelValue,
        onValuechange: (e:any) => {
          this.$emit("update:modelValue", e.detail);
        },
        ...filterObject(this.$attrs, ["modelValue", "onUpdate:modelValue"]),
      },
      [
        prefix ? h("div", { slot: "prefix" }, prefix) : null,
        suffix ? h("div", { slot: "suffix" }, suffix) : null,
      ]
    );
  },
  created() {},
};
