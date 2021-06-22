<template>
  <header
    class="container mx-auto h-16 bg-white shadow-header-shadow rounded-b-xl flex justify-end items-center px-6 relative"
  >
    ِ
    <div class="absolute w-full left-0 top-0 header-line"></div>
    <div>
      <nuxt-link to="/">
        <p class="text-green-text text-sm">Login</p>
      </nuxt-link>
    </div>
  </header>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'nuxt-property-decorator';

@Component({})
export default class Header extends Vue {
  // Local state
  count: number = 0;

  @Watch('count')
  onCounterChange(val: number, oldVal: number) {
    console.log(val, oldVal);
  }

  // Methods
  increment(): void {
    this.count++;
  }
  decrement(): void {
    this.count--;
  }
}
</script>

<style scoped>
.header-line {
  position: absolute;
  background: linear-gradient(91deg, #319795 0%, #3182ce 100%);
  height: 5px;
}
</style>