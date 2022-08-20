import { Directive, DirectiveBinding } from "vue";
import { handleRipple, RippleOpts } from "@voyo/core/dest/utils";

export const RippleDirective: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<RippleOpts>) {
    const opts = binding.value || {};
    opts.autoSize = opts.autoSize ?? true;
    handleRipple(el, opts);
  },
};
