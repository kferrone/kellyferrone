<template>
<div>
	<h1>Home</h1>
	<ul>
		<li><router-link to="/page1"> Page 1</router-link></li>
	</ul>
	
</div>
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