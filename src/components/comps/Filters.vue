<template>
  <div id="filters" class="container">
    <autocomplete :suggestions="suggestions"   v-model="selection"></autocomplete>
       <button class="btavancar" @click="avancar">AVANÇAR</button>
  </div>
</template>

<script>
     import Swiper from 'swiper'
import Autocomplete from '@/components/comps/Autocomplete'
 var postData = [];
    var opt1 = {};
    // console.log(conf.list);
     readAllData('trees')
                    .then(function(data) {
        // postData = data;
                        // window.ltt= data;
                        for (var key in data) {
                           postData.push(data[key]);
                            //postData[dt.name_public] = dt.name_scientific;
                        };
                        //var spcicieImg = list.filter( spc => spc.cod_tree === obj.cod_tree)[0];
                        //console.log(ltt);
                       window.opt1 =  postData ;
                       // console.log(dados1);
                        console.log(postData);
         return postData;
                    });
export default {
  name: 'filters',
  components: {
    Autocomplete
  },
  data () {
    return {
      selection: '',
      suggestions: postData
    }
      
  },

    methods: {
         avancar () {
            
              var mySwiper = new Swiper('.swiper-container', {

});
        mySwiper.slideTo(3);
            
        }
        
    }
    }
    
    /* [
        { city: 'Bangalore', state: 'Karnataka' },
        { city: 'Chennai', state: 'Tamil Nadu' },
        { city: 'Delhi', state: 'Delhi' },
        { city: 'Kolkata', state: 'West Bengal' },
        { city: 'Mumbai', state: 'Maharashtra' }
      ]*/
</script>

<style scoped lang="scss">
#filters {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
    
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
    button.btavancar {
    color: aliceblue;
background-color: #000;
	font-size: 1em;
	padding: 1em 2em;
        margin: 1em;
	border: none !important;
	border-radius: 5em;
	box-shadow: none;
}
</style>