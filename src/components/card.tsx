import { Prop, Slot } from "vue";
import { setting } from "../setting";

export const Card = (
  props: { title?: string },
  { slots }: { slots: { header?: Slot; default?: Slot; footer?: Slot } }
) => {
  return (
    <div class="yo-card">
      {slots.header || props.title ? (
        <header class="yo-card-header flex-v-between">
          {props.title ? (
            <span class="_yo-card-header-title">{props.title}</span>
          ) : null}
          {slots.header && slots.header()}
        </header>
      ) : null}
      <article class="yo-card-content">
        {slots.default && slots.default()}
      </article>
      {slots.footer ? (
        <footer
          class="yo-card-footer"
          style={{ textAlign: setting.card.footerMainAlign }}
        >
          {slots.footer()}
        </footer>
      ) : null}
    </div>
  );
};
