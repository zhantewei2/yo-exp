import { CompressOpts } from "@ztwx/utils";
export interface UploadProps {
    compressOpts: CompressOpts;
    accept: string;
    defaultImg: {
        src: string;
    };
    modelValue: string;
    type: string;
}
export declare const Upload: any;
