<template lang="pug">
#page1
  h1 Page 1
  ul
    li
      router-link( to="/") Home
  RichTextEditor(value="<p>Hello World</p>")
</template>
<script lang="coffee">
import RichTextEditor from '../components/RichTextEditor'
export default
  name: 'Page1'
  inject: ['gas']
  components: {
    RichTextEditor
  data: ->
    posts: Array
  mounted: ->
    console.log('The page 1 mounted')
    console.dir(@$gas)
    @gas.getPosts().then((response) =>
        @posts = response
    ).catch((error) => 
      console.error(error)
    )
  }
</script>
