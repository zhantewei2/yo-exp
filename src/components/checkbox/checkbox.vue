<template>
  <div class="flex-v-mid"
        @mousedown="touchstart"
        @mouseup="touchend"
        @touchstart="touchstart"
        @touchend="touchend"
        @click="tap"
  >
    <div class="voyo-checkbox" :class="[
       value0?'__active':'',
   ]">
      <div class="voyo-checkbox-frame abs-full" :class="[
       value0?'voyo-bg-'+color:'',
       value0?'voyo-color-'+color:''
     ]">
        <div class="voyo-checkbox-selected abs-full" v-if="value0"></div>
      </div>
      <voyo-ripple-radio :color="color" ref="ripple" :disable-trigger="true" :disabled="disabled"/>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Options,Vue} from "vue-class-component";
import {Prop, Watch,Emit} from "vue-property-decorator";

@Options({})
export default class extends Vue {
  @Prop({})disabled:boolean;
  @Prop({default:false})modelValue:boolean;
  @Prop({default:'primary'})color:string;
  @Watch("modelValue",{immediate:true})watchValue(v:boolean){
    if(v!==this.value0)v?this.show():this.close();
  }
  @Emit("update:modelValue")input(v:boolean){}

  value0:boolean=false;
  toggle(){
    this.value0?this.close():this.show();
  }
  show(){
    this.input(this.value0=true);
  }
  close(){
    this.input(this.value0=false);
  }
  touchstart(e:any,control?:boolean){
    (this.$refs as any).ripple.touchstart(e,true);
  }
  touchend(e:any,control?:boolean){
    (this.$refs as any).ripple.touchend(e,true);
  }
  tap(e:any,control?:boolean){
    (this.$refs as any).ripple.tap(e,true);
    this.toggle();
  }
}
</script>

<style lang="scss">
.voyo-checkbox-selected{
  background-image: svg-load("./select.svg",fill=white);
}
</style>
