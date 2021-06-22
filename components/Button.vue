<template>
  <button
    class="outline-none focus:outline-none button-bg rounded-xl h-10 flex justify-center items-center text-sm text-light-text w-full"
  >{{ ButtonText }}</button>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({})
export default class Button extends Vue {
  @Prop({ default: 'something' }) readonly ButtonText!: string;
}
</script>

<style scoped>
.button-bg {
  background: linear-gradient(95deg, #319795 0%, #3182ce 100%);
}
</style>