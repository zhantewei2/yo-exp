import {Options, Vue} from "vue-class-component";
// import {} from "vue-property-decorator";

@Options({
  render(this:Modal){
      return (
        <div class="yo-modal">
          <main></main>
        </div>
      )
  }
})
export class Modal extends Vue{

}