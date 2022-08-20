import {
  registryButton,
  registryButtonIcon,
} from "@voyo/core/dest/components/registry";
import { h } from "vue";
import { filterObject } from "../utils";

registryButtonIcon();
registryButton();

export const Button: any = {
  props: {
    loading: {},
  },
  render() {
    return h(
      "voyoc-btn",
      {
        disabled: this.$props.loading ? 1 : 0,
        ...filterObject(this.$attrs, ["on:voyotap"]),
        onVoyotap: (e: any) => {
          this.$emit("tap", e);
        },
      },
      [
        this.$slots.default && this.$slots.default(),
        this.$props.loading ? (
          <i class="za za-loading voyo-an-loading ml-2"></i>
        ) : null,
      ]
    );
  },
};

export const ButtonIcon: any = {
  render() {
    return h(
      "voyoc-btn-icon",
      {
        ...filterObject(this.$attrs, ["on:voyotap"]),
        onVoyotap: (e: any) => this.$emit("tap", e),
      },
      this.$slots.default && this.$slots.default()
    );
  },
};
