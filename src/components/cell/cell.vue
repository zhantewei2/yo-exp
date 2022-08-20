<template>
  <div
    class="voyo-cell flex-v-between yo-hover"
    :class="[border ? '__border' : '']"
  >
    <div class="_left flex-v-mid">
      <img :src="img" v-if="img" class="voyo-cell-img" />
      <span :class="[iconClass, 'voyo-cell-icon']" v-if="iconClass"></span>
      <slot name="title"></slot>
      <div v-if="label">
        <div v-if="title" class="voyo-cell-left-title">{{ title }}</div>
        <div v-if="label" class="voyo-cell-left-label">{{ label }}</div>
      </div>
      <div v-else class="voyo-cell-left-title">
        {{ title }}
      </div>
    </div>
    <div class="_right flex-1">
      <div
        :class="['_right-value', valueWidth ? 'ellipsis' : '']"
        :style="[valueWidth ? { width: valueWidth } : {}]"
      >
        {{ value }}
        <slot></slot>
      </div>
      <span v-if="rightIcon" :class="['_right-icon', rightIcon]"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Prop, Emit } from "vue-property-decorator";
import { setting } from "../../setting";
export type CellType = "select" | "link" | "input";

@Options({
  computed: {
    rightIcon(this: any) {
      switch (this.type) {
        case "select":
          return setting.cell.selectIcon;
        case "link":
          return setting.cell.linkIcon;
      }
      return "";
    },
  },
})
export default class Cell extends Vue {
  rightIcon: string;
  @Prop({}) type: CellType;
  @Prop({}) to: string;
  @Prop({ default: "" }) title: string;
  @Prop({ default: "" }) label: string;
  @Prop({ default: "" }) value: string;
  @Prop({ default: true }) ripple: boolean;
  @Prop({ default: setting.cell.border }) border: boolean;
  @Prop({ default: "" }) valueWidth: string; //100px or 50vw
  @Prop({}) img: string;
  @Prop({}) iconClass: string;
}
</script>
