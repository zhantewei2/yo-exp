import { Slot } from "vue";
export declare const Card: (props: {
    title?: string;
}, { slots }: {
    slots: {
        header?: Slot;
        default?: Slot;
        footer?: Slot;
    };
}) => JSX.Element;
