<template>
  <div class="banner-bg py-5">
    <div class="flex flex-wrap">
      <div class="w-full text-center mb-5">
        <h1 class="text-5xl text-dark-text">Deine Job <br class="sm:hidden block"> website</h1>
      </div>
      <div class="w-full banner-two-bg"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Banner extends Vue {}
</script>

<style scoped>
.banner-bg {
  background: linear-gradient(141deg, #ebf4ff 0%, #e6fffa 100%);
}

.banner-two-bg {
  background: url('/img/banner.svg') center / cover no-repeat;
  height: 404.841px;
}
</style>