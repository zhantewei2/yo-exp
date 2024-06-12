import cloudUploadSvg from "./assets/cloud-upload.svg";
import loadingSvg from "./assets/loading.svg";
import closeSvg from "./assets/close.svg";

export type Setting = {
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
    errDynamicClear: boolean; //数据变更时清除错误
    errDynamicShow: boolean; //用户输入立即校验表单
  };
  icons: {
    upload: string;
    load: string;
    close: string;
  };

  uploadReq: (file: File) => Promise<any>;
};

export const setting: Setting = {
  cell: {
    border: true,
    linkIcon: "za za-right",
  },
  card: {
    footerMainAlign: "right",
  },
  group: {
    count: 3, //If not support ResizeObserver.
    dynamicGrid(width: number) {
      if (width > 900) {
        return 4;
      } else if (width > 750) {
        return 3;
      } else if (width > 500) {
        return 2;
      } else {
        return 1;
      }
    },
  },
  form: {
    requireText: "不能为空",
    notBlankText: "不能为空",
    minLengthText: "长度不可少于%s",
    maxLengthText: "长度不可超过%s",
    minNumText: "不可大于%s",
    maxNumText: "不可小于%s",
    errDynamicClear: true,
    errDynamicShow: false,
  },

  icons: {
    upload: cloudUploadSvg,
    load: loadingSvg,
    close: closeSvg,
  },
  uploadReq: (file) => Promise.resolve(),
};
