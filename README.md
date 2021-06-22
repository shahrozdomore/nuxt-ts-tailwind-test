# Nuxt, Typescript and Tailwind 2

## With the features included

1. [nuxt-property-decorator](https://github.com/nuxt-community/nuxt-property-decorator)
2. [vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators)
3. [vuex-class](https://github.com/ktsn/vuex-class/)

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Resources

[Nuxt.js apps fully in TypeScript](https://blog.logrocket.com/how-to-set-up-and-code-nuxt-js-apps-fully-in-typescript/)

[Nuxt.js docs](https://nuxtjs.org).

## Class based components
<table style="width:100%">
<tr>
<tr><td colspan=2>

## Initializing a class

</td></tr>
<tr>
<th> Class API based </th>
<th> Options API based (vanilla) </th>
</tr>
<tr>
<td>

```javascript
//Typescript code
<script lang="ts">
  import {(Component, Vue)} from 'nuxt-property-decorator'  

  @Component  
  export default class MyStore extends Vue {}
</script>
```

</td>
<td>

```javascript
<script>
export default {
name: 'MyStore'
}
</script>
```

</td>
</tr><td colspan=2>

## Importing a component

</td></tr>
<tr>
<th> Class API based </th>
<th> Options API based (vanilla) </th>
</tr>
<tr>
<td>

```javascript
//Typescript code
<script lang="ts">
import Tile from '@/components/Tile.vue'
import { Vue, Component } from 'nuxt-property-decorator'  

@Component({
  components: {
    Tile
  }
})
export default class MyStore extends Vue {}
</script>
```

</td>
<td>

```javascript
<script>
import Tile from '@/components/Tile.vue'
export default {
  name: 'MyStore',
  components: {
    Tile
  }
}
</script>
```

</td>
</tr>
</table>
