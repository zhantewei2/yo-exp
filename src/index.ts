import { registryVoyoCore } from "@voyo/core/dest/index";
registryVoyoCore();

import { Input } from "./components/input";
import { Button, ButtonIcon } from "./components/button";
import { Plugin, App } from "vue";
import { RippleDirective } from "./directives/ripple.directive";
import RippleRadio from "./components/ripple-radio/ripple-radio.vue";
import CheckBox from "./components/checkbox/checkbox.vue";
import Cell from "./components/cell/cell.vue";
import { Card } from "./components/card";
import { Menu } from "./components/menu";
import { Group, Cell as YoCell } from "./components/group";
import { Form } from "./components/form/form";
import { Upload } from "./components/upload/upload";

export * from "./setting";
export * from "./components/form";
export * from "./utils/media";
export * from "./utils/date";

export const installerAll: Plugin = {
  install(app: App) {
    app.component("voyo-input", Input);
    app.component("voyo-btn", Button);
    app.component("voyo-btn-icon", ButtonIcon);
    app.directive("voyo-ripple", RippleDirective);
    app.component("voyo-ripple-radio", RippleRadio);
    app.component("voyo-checkbox", CheckBox);
    app.component("voyo-cell", Cell);
    app.component("voyo-menu", Menu);
    app.component("voyo-upload", Upload);
    //pc组件
    app.component("yo-card", Card);
    app.component("yo-group", Group);
    app.component("yo-cell", YoCell);
    app.component("yo-form", Form);
  },
};
