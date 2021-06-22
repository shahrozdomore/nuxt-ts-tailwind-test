<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <slot name="heading"></slot>
    </div>
    <div class="w-full my-10 px-3">
      <div class="first-image"></div>
      <slot name="sectionOne"></slot>
    </div>
    <div class="w-full view-two pl-8 py-6">
      <slot name="sectionTwo"></slot>
    </div>
    <div class="w-full pl-14 relative z-10 overflow-hidden">
      <div class="h-304px w-304px rounded-full bg-circle-color absolute z-0 -left-12 -top-10"></div>
      <slot name="sectionThree"></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class TabView extends Vue {}
</script>

<style scoped>
.first-image {
  background: url('/img/tab-views/tab-view-one/first.svg') center no-repeat;
  height: 145px;
}

.view-two {
  background: url('/img/tab-views/divider-one.png') center / cover no-repeat;
}
</style>

