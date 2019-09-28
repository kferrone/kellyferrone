<template lang="pug">
ul#posts
  p {{posts}}
  li(
    v-for="post in posts",
    v-html="post.title"
    :key='post.id')
</template>
<script lang="coffee">
export default 
  name: 'Posts'
  inject: ['gas']
  data: ->
    posts: []
  mounted: ->
    console.log('Posts Mounted')
    console.dir(@gas)
    @gas.getPosts().then((response) =>
        @posts = response
    ).catch((error) => 
      console.error(error)
    )
</script>
<style lang="sass">

</style>