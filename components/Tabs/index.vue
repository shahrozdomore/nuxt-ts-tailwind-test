<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <div class="w-full px-6 overflow-x-auto max-w-lg pb-5 tabs-scroll">
        <Tabs-TabLinks @change-tab-view="changeTabView" />
      </div>
      <div class="w-full">
        <Tabs-TabViews :tabToView="tabView" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Tabs extends Vue {
  tabView: number = 1;

  changeTabView(val: number) {
    this.tabView = val;
    console.log(val);
  }
}
</script>

<style scoped>
.tabs-scroll::-webkit-scrollbar {
  width: 0;
}
.tabs-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.tabs-scroll::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 0;
}
</style>