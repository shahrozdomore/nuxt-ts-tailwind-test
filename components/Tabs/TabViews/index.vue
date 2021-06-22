<template>
  <div class="container mx-auto">
    <Tabs-TabView v-if="tabToView === 1">
      <template #heading>
        <p class="text-21 text-darker-text text-center">
          Drei einfache Schritte zu
          <br class="sm:hidden block" />deinem neuen Job
        </p>
      </template>
      <template #sectionOne>
        <div class="flex items-end -mt-16">
          <h1 class="text-large-text text-130 -mb-10">1.</h1>
          <p class="text-large-text text-base mb-1 ml-4">Erstellen dein Lebenslauf</p>
        </div>
      </template>
      <template #sectionTwo>
        <div class="flex items-end mb-5">
          <h1 class="text-large-text text-130 -mb-10">2.</h1>
          <p class="text-large-text text-base mb-1 ml-4">Erstellen dein Lebenslauf</p>
        </div>
        <div class="flex justify-center w-full">
          <img src="/img/tab-views/tab-view-one/second.svg" alt />
        </div>
      </template>
      <template #sectionThree>
        <div class="flex items-end mb-5 relative z-10">
          <h1 class="text-large-text text-130 -mb-10">3.</h1>
          <p class="text-large-text text-base mb-1 ml-4">Mit nur einem Klick bewerben</p>
        </div>
        <div class="flex justify-center w-full relative z-10">
          <img src="/img/tab-views/tab-view-one/third.svg" alt />
        </div>
      </template>
    </Tabs-TabView>
    <Tabs-TabView v-if="tabToView === 2">
      <template #heading>
        <p class="text-21 text-darker-text text-center">
          Drei einfache Schritte
          <br class="sm:hidden block" />zu deinem neuen Mitarbeiter
        </p>
      </template>
      <template #sectionOne>
        <div class="flex items-end -mt-16">
          <h1 class="text-large-text text-130 -mb-10">1.</h1>
          <p class="text-large-text text-base mb-1 ml-4">Erstellen dein Lebenslauf</p>
        </div>
      </template>
      <template #sectionTwo>
        <div class="flex items-end mb-5 relative z-10">
          <h1 class="text-large-text text-130 -mb-10">2.</h1>
          <p class="text-large-text text-base mb-1 ml-4">Erstellen ein Jobinserat</p>
        </div>
        <div class="w-full ml-6 -mt-14">
          <img src="/img/tab-views/tab-view-two/second.svg" alt />
        </div>
      </template>
      <template #sectionThree>
        <div class="flex items-end mb-5 relative z-10">
          <h1 class="text-large-text text-130 -mb-10">3.</h1>
          <p class="text-large-text text-base mb-1 ml-4">Wähle deinen neuen Mitarbeiter aus</p>
        </div>
        <div class="w-full relative z-10">
          <img src="/img/tab-views/tab-view-two/third.svg" alt />
        </div>
      </template>
    </Tabs-TabView>
    <Tabs-TabView v-if="tabToView >= 3">
      <template #heading>
        <p class="text-21 text-darker-text text-center">
          Drei einfache Schritte zur
          <br class="sm:hidden block" />Vermittlung neuer Mitarbeiter
        </p>
      </template>
      <template #sectionOne>
        <div class="flex items-end -mt-16">
          <h1 class="text-large-text text-130 -mb-10">1.</h1>
          <p class="text-large-text text-base mb-1 ml-4">Erstellen dein Lebenslauf</p>
        </div>
      </template>
      <template #sectionTwo>
        <div class="flex items-end mb-5 relative z-10">
          <h1 class="text-large-text text-130 -mb-10">2.</h1>
          <p
            class="text-large-text text-base mb-1 ml-4"
          >Erhalte Vermittlungs- angebot von Arbeitgeber</p>
        </div>
        <div class="w-full flex justify-center">
          <img src="/img/tab-views/tab-view-three/second.svg" alt />
        </div>
      </template>
      <template #sectionThree>
        <div class="flex items-end mb-5 relative z-10">
          <h1 class="text-large-text text-130 -mb-10">3.</h1>
          <p class="text-large-text text-base mb-1 ml-4">Vermittlung nach Provision oder Stundenlohn</p>
        </div>
        <div class="w-full relative z-10">
          <img src="/img/tab-views/tab-view-three/third.svg" alt />
        </div>
      </template>
    </Tabs-TabView>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({})
export default class TabViews extends Vue {
  @Prop({ default: 1 }) readonly tabToView!: number;
}
</script>

<style>
</style>