<template lang="pug">
#home
  h1#title Home
  ul
    li
      router-link(to='page1') Page 1
  a.pure-button(href="#") A Pure Button
</template>
<script lang="coffee">
import BackEndWrapper from '../services/BackEndWrapper'
export default 
  name: 'Home'
  data: ->
    bw: new BackEndWrapper()
    numbers: []
  mounted: ->
    console.log('Its mounted')
</script>
<style lang="sass">
h1
  color: #008000
</style>