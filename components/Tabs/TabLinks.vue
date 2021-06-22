<template>
  <div class="inline-flex">
    <button
      class="outline-none focus:outline-none h-10 rounded-l-xl text-sm flex justify-center items-center font-semibold w-40"
      :class="[activeTab === 1 ? 'bg-tab-btn text-light-text' : 'text-green-text bg-white border border-app-border']"
      @click="changeTabView(1)"
    >Arbeitnehmer</button>
    <button
      class="h-10 bg-white outline-none focus:outline-none font-semibold w-40 text-sm"
      :class="[activeTab === 2 ? 'bg-tab-btn text-light-text' : 'text-green-text border border-app-border']"
      @click="changeTabView(2)"
    >Arbeitgeber</button>
    <button
      class="h-10 bg-white outline-none focus:outline-none font-semibold rounded-r-xl w-40 text-sm"
      :class="[activeTab === 3 ? 'bg-tab-btn text-light-text' : 'text-green-text border border-app-border']"
      @click="changeTabView(3)"
    >Temporärbüro</button>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Emit } from 'nuxt-property-decorator';

@Component({})
export default class TabLinks extends Vue {
  activeTab: number = 1;

  @Emit()
  changeTabView(tab: number) {
    this.activeTab = tab;
  }
}
</script>

<style>
</style>