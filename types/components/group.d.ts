import { Slot, VNode } from "vue";
export declare type GroupProps = {
    grid?: number;
    dense?: boolean;
    gap?: number;
};
export declare type CellProps = {
    span?: number;
    important?: boolean;
    label?: string;
};
declare global {
    interface Window {
        ResizeObserver: any;
    }
}
export declare const Group: (props: GroupProps, { slots }: {
    slots: {
        default?: Slot;
    };
}) => VNode;
export declare const Cell: (props: CellProps, { slots }: {
    slots: {
        default?: Slot;
        decorator?: Slot;
        label?: Slot;
    };
}) => VNode;
