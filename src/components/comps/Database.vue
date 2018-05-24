<template>
  <div  class="database">
    <h1>{{ msg }}</h1>
   <div id="imgf" class="container"></div>
    
  </div>
</template>

<script>
	//var tata = furlf;

export default {
  name: 'database',
  data () {
    return {
      msg: 'Imagens on Firebase',
		
		
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
    color:black;
}
	.database {
		
		padding: 4em;
		margin: 1em;
	}
	#imgf {
		position: inherit;
		display: list-item;
		border: 2px solid #BBB;
 	width: 100%;
 	min-height: 200px;
 	max-height: 500px;
text-align: left;
 	overflow: auto;
		
	}
</style>
