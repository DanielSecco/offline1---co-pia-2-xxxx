<template>
  <div class="home">
   <Notfier v-show="isModalVisible" @close="closeModal()"/> 

	  
    <button type="button" class="btn pp" @click="showModal">D</button>
    
    <carrosell/>
  </div>
 
</template>

<script>
	
// @ is an alias to /src
import Carrosell from '@/components/Carrosell.vue'
import Notfier from '@/components/comps/Notfier.vue'

export default {
  name: 'home',
  components: {
    Carrosell,
      Notfier
  },
    data () {
    return {
      isModalVisible: false,
        
		
    }
  },
    methods:{  
    showModal() {
               
                this.isModalVisible = true;
            },
            closeModal() {
         
                this.isModalVisible = false;
            },},
            computed: {
      counter1() {
                //return this.$store.getters.notistate ;
            },
    }
}
</script>
<style scoped="true">
    div.home{
        height: inherit;
        background-color: white;
    }
button.btn.pp {
    
    position: relative;
    top: -50px;
   left: 20vw;
        color: aliceblue;
        background-color: red;
        font-size: .8em;
        padding: 1em 1.6em;
        margin-right: 0;
        border: none !important;
        border-radius: 20em;
        box-shadow: none;
    }
</style>