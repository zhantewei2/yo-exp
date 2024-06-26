export declare type Setting = {
    cell: {
        selectIcon?: string;
        linkIcon?: string;
        border: boolean;
    };
    card: {
        footerMainAlign: any;
    };
    group: {
        count: number;
        dynamicGrid: (width: number) => number;
    };
    form: {
        requireText: string;
        notBlankText: string;
        minLengthText: string;
        maxLengthText: string;
        minNumText: string;
        maxNumText: string;
        notEmptyListText: string;
        errDynamicClear: boolean;
        errDynamicShow: boolean;
    };
    icons: {
        upload: string;
        load: string;
        close: string;
    };
    uploadReq: (file: File) => Promise<any>;
};
export declare const setting: Setting;
