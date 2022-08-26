import { h, Slot, VNode } from "vue";
import { setting } from "../setting";
import { ClassManage } from "@voyo/core/dest/utils";

export type GroupProps = {
  grid?: number;
  dense?: boolean;
  gap?: number;
};

export type CellProps = {
  span?: number;
  important?: boolean;
  label?: string;
};

declare global {
  interface Window {
    ResizeObserver: any;
  }
}
const GroupResizeCSSKey = "group-resize-css-key";

const resizeObserver = window.ResizeObserver
  ? new window.ResizeObserver((entries: any) => {
      for (const entry of entries) {
        const gridCount = setting.group.dynamicGrid(entry.contentRect.width);
        const gridCss=  `yo-group-${gridCount}`;

        if(gridCss!=entry.target.yoCssGrid){
          entry.target.yoCssManager.replaceClass(
            GroupResizeCSSKey,
            entry.target.yoCssGrid=gridCss
          );
        }
      }
    })
  : null;

export const Group = (
  props: GroupProps,
  { slots }: { slots: { default?: Slot } }
): VNode => {
  return h(
    "section",
    {
      onVnodeMounted(node: VNode) {
        const el: any = node.el;
        el.yoCssManager = new ClassManage(el);
        if (resizeObserver && !props.grid) {
          resizeObserver.observe(el);
        } else {
          el.yoCssManager.replaceClass(
            GroupResizeCSSKey,
            `yo-group-${props.grid || setting.group.count}`
          );
        }
      },
      onVnodeUnmounted(node: VNode) {
        if (resizeObserver) resizeObserver.unobserve(node.el);
      },
      class: ["yo-group",props.dense?'__dense':''],
    },
    slots.default && slots.default()
  );
};

export const Cell = (
  props: CellProps,
  { slots }: { slots: { default?: Slot; decorator?: Slot; label?: Slot } }
): VNode => {
  return h(
    "div",
    {
      class: [
        "yo-group-cell",
        props.span ? "yo-group-cell-span-" + props.span : null,
      ],
    },
    [
      h("dl", {}, [
        props.label
          ? h("dt", {}, [
              props.important
                ? h("span", { class: "_cell-important" }, "*")
                : null,
              props.label,
            ])
          : null,

        h("dd", {}, [slots.default && slots.default()]),
      ]),

      h(
        "aside",
        {
          class: "_cell-decorator",
        },
        slots.decorator && slots.decorator()
      ),
    ]
  );
};
