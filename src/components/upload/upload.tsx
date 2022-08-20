import { h, ref, SetupContext, defineComponent, watch } from "vue";
import { CompressOpts, fileCompress } from "@ztwx/utils";
import { setting } from "../../setting";

export interface UploadProps {
  compressOpts: CompressOpts;
  accept: string;
  defaultImg: {
    src: string;
  };
  modelValue: string;
  type: string;
}

export const Upload = {
  props: {
    compressOpts: {
      type: Object,
    },
    accept: {
      type: String,
    },
    defaultImg: {
      type: String,
    },
    modelValue: {
      type: String,
    },
    type: {
      type: String,
      default: "normal",
    },
  },
  setup(props: UploadProps, { emit }: any) {
    const fileLoading = ref(false);
    const compressedImg = ref("");

    watch(
      () => props.defaultImg,
      (v: any) => {
        if (v) compressedImg.value = v;
      },
      { immediate: true }
    );
    watch(
      () => props.modelValue,
      (v: any) => {
        if (v) compressedImg.value = v;
      },
      { immediate: true }
    );
    const fileChange = async (e: InputEvent) => {
      const target = e.target as HTMLInputElement;

      const file = target.files![0];
      if (!file) return;
      fileLoading.value = true;

      try {
        const compressResult:any = await fileCompress.compress({
          ...(props.compressOpts || {}),
          file,
          resultType: "blob",
        });
        emit("fileCb", {
          ok: true,
          file: compressResult.result,
          md5: compressResult.fileMd5,
          postfix: compressResult.postfix,

          uploadEnd: (success: boolean) => {
            if (success)
              compressedImg.value = URL.createObjectURL(compressResult.result);
            fileLoading.value = false;
            target.value = "";
          },
        });
        await setting
          .uploadReq(file)
          .then(({ result }: any) => {
            compressedImg.value = URL.createObjectURL(compressResult.result);
            fileLoading.value = false;
            target.value = "";
            emit("update:modelValue", result);
          })
          .catch(() => {
            fileLoading.value = false;
            target.value = "";
          });
      } catch (e) {
        emit("file", { ok: false, file });
      }
    };

    const closeShow = () => {
      compressedImg.value = "";
      emit("clear");
      emit("update:modelValue", "");
    };

    return () =>
      props.type === "normal"
        ? h(
            "div",
            {
              class: [
                "yo-upload-block",
                "flex-center",
                fileLoading.value ? "__load" : "",
              ],
            },
            [
              <img src={setting.icons.upload} class="_upload-img" />,
              <img
                src={setting.icons.load}
                class={["_load-img", "voyo-an-loading"]}
              />,
              compressedImg.value ? (
                <img
                  src={compressedImg.value}
                  class={["_show-img", "abs-full"]}
                />
              ) : null,
              compressedImg.value ? (
                <img
                  onClick={closeShow}
                  src={setting.icons.close}
                  class="_close-img"
                />
              ) : null,
              compressedImg.value
                ? null
                : h("input", {
                    type: "file",
                    class: ["abs-full", "_input"],
                    accept: props.accept,
                    disabled: fileLoading.value,
                    onChange: fileChange,
                  }),
            ]
          )
        : h(
            "div",
            {
              class: [
                "yo-upload-block",
                "flex-center",
                fileLoading.value ? "__load" : "",
              ],
            },
            [
              // <img src={setting.icons.upload} class="_upload-img" />,
              // <img
              //   src={setting.icons.load}
              //   class={["_load-img", "voyo-an-loading"]}
              // />,
              // compressedImg.value ? (
              //   <img src={compressedImg.value} class={["_show-img", "abs-full"]} />
              // ) : null,
              // compressedImg.value ? (
              //   <img
              //     onClick={closeShow}
              //     src={setting.icons.close}
              //     class="_close-img"
              //   />
              // ) : null,
              h("input", {
                type: "file",
                class: ["abs-full", "_input"],
                accept: props.accept,
                disabled: fileLoading.value,
                onChange: fileChange,
              }),
            ]
          );
  },
} as any;
