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
  components: {
    RichTextEditor
  }
</script>
