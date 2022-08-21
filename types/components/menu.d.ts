import { RelativeFixed } from "@voyo/core/dest/utils/RelativeFixed";
import { VNode } from "vue";
import { Vue } from "vue-class-component";
export declare type PositionType = "top" | "left" | "bottom" | "right";
export declare class Menu extends Vue {
    modelValue: boolean;
    position: PositionType;
    contentSpace: number;
    updateModelValue(val: boolean): void;
    watchModelValue(val: boolean): void;
    show: boolean;
    btnEl: HTMLElement;
    wrapperEl: HTMLElement;
    relativeFixed: RelativeFixed;
    created(): void;
    click(): void;
    bgClick(): void;
    captureBtn(el: HTMLElement): void;
    wrapperMounted(vNode: VNode): void;
    contentMounted(vNode: VNode): void;
    insertWrapperEl(): void;
    removeWrapperEl(): void;
    activated(): void;
    deactivated(): void;
    unmounted(): void;
}
