<template lang="pug">
#home
  h1#title Home
  ul
    li
      router-link(to='page1') Page 1
    li
      router-link(to='posts') Posts
  a.pure-button(href="#") A Pure Button
</template>
<script lang="coffee">
export default 
  name: 'Home'
  data: ->
    numbers: []
  mounted: ->
    console.log('Its mounted')
</script>
<style lang="sass">

</style>