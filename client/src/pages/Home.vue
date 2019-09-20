<template>
<div>
	<h1>Home</h1>
	<ul>
		<li><router-link to="/page1"> Page 1</router-link></li>
	</ul>
	
</div>
</template>
<script>
import BackEndWrapper from '../services/BackEndWrapper';
export default 
{
  name: 'Home',
  data(){
  	return ({
  		bw:new BackEndWrapper(),
  		numbers:[]
  	});
  },
  mounted()
  {
      console.log('Its mounted');
  },
  methods:
  {
  	
  }
  
}
</script>