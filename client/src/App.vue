<template lang="pug">
	#app.wrapper
		#content
			router-view
</template>
<script lang="coffee">
import BackEndWrapper from './services/BackEndWrapper'
export default
	name: 'App'
	provide: ->
		gas: new BackEndWrapper();
</script>