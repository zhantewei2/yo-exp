import { registryMenu } from "@voyo/core/dest/components/registry";
import { RelativeFixed } from "@voyo/core/dest/utils/RelativeFixed";
import { h, VNode, Transition } from "vue";
import { Options, Vue } from "vue-class-component";
import { Emit, Prop, Watch } from "vue-property-decorator";

registryMenu();

export type PositionType = "top" | "left" | "bottom" | "right";

@Options({
  render(this: Menu) {
    return
       [h(
          "div",
          {
            ...this.$attrs,
            onClick: this.click,
            ref: this.captureBtn as any,
          },
          this.$slots.default && (this.$slots as any).default()
        ),

        h(
          Transition,
          {
            "enter-active-class": "__show",
            "leave-active-class": "__hide",
          },
          () =>
            this.show
              ? h(
                  "div",
                  {
                    class: "voyo-menu-wrapper __type-menu",
                    onVnodeBeforeMount: this.wrapperMounted,
                  },
                  [
                    h("div", { class: "_layout-bg", onClick: this.bgClick }),
                    h(
                      "div",
                      {
                        class: ["voyo-menu-content"],
                        onVnodeMounted: this.contentMounted,
                      },
                      [this.$slots.content && this.$slots.content()]
                    ),
                  ]
                )
              : null
        )
       ]

  },
})
export class Menu extends Vue {
  @Prop({}) modelValue: boolean;
  @Prop({ default: "bottom" }) position: PositionType;
  @Prop({ default: 5 }) contentSpace: number;

  @Emit("update:modelValue") updateModelValue(val: boolean) {}
  @Watch("modelValue", { immediate: true }) watchModelValue(val: boolean) {
    this.show = val;
  }
  show = false;
  btnEl: HTMLElement;
  wrapperEl: HTMLElement;
  relativeFixed: RelativeFixed;
  created() {
    this.relativeFixed = new RelativeFixed(this.contentSpace, 5);
  }

  click() {
    this.updateModelValue((this.show = !this.show));
  }
  bgClick() {
    this.updateModelValue((this.show = false));
  }
  captureBtn(el: HTMLElement) {
    this.btnEl = el;
  }
  wrapperMounted(vNode: VNode) {
    this.wrapperEl = vNode.el as HTMLElement;
  }
  contentMounted(vNode: VNode) {
    const { top, left } = this.relativeFixed.relativePosition(
      vNode.el as HTMLElement,
      this.btnEl,
      this.position
    );
    const el = vNode.el as HTMLElement;
    el.style.top = top + "px";
    el.style.left = left + "px";
    this.insertWrapperEl();
  }
  insertWrapperEl() {
    if (this.show && this.wrapperEl)
      document.documentElement.appendChild(this.wrapperEl);
  }
  removeWrapperEl() {
    if (this.show && this.wrapperEl) {
      const parent = this.wrapperEl.parentElement;
      parent && parent.removeChild(this.wrapperEl);
    }
  }
  activated() {
    this.insertWrapperEl();
  }
  deactivated() {
    this.removeWrapperEl();
  }
  unmounted() {
    this.removeWrapperEl();
  }
}
