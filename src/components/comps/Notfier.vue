
<template>
  <div class="modal-backdrop">
    <div id="modalmenu" class="modal">
          
          <!--<button type="button" class="btn-close" @click="close" > x </button>-->
        <notifications :notification-data="notificationData"></notifications>
       <button type="button" class="btn-green" @click="close" >Close me!</button>
    </div>
  </div>
</template>

<script>

    import {dataData} from '@/assets/js/config.js'
    import Notifications from '@/components/comps/Notifications.vue'    
var $ = require('jquery')
    export default {
        name: 'modal',
        components: {
          'notifications': Notifications
            
        },
        data(){
            return{
             notificationData: dataData
                
            }
        },
        methods: {
            close() {
                console.log('clickme');
                this.$emit('close');
            },
           
        },
    };
</script>
<style scoped>
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal {
        background: #fff;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        width: inherit;
        height: inherit;
        flex-direction: column;
    }
    .modal-header,
    .modal-footer {
        padding: 15px;
        display: flex;
    }
    .modal-header {
        border-bottom: 1px solid #eeeeee;
        color: #4AAE9B;
        justify-content: space-between;
    }
    .modal-footer {
        border-top: 1px solid #eeeeee;
        justify-content: flex-end;
    }
    .modal-body {
        position: relative;
        padding: 20px 10px;
    }
    .btn-close {
        border: none;
        width: 50px;
        height: 50px;
        font-size: 20px;
        padding: 20px;
        cursor: pointer;
        font-weight: bold;
        color: #4AAE9B;
        background: transparent;
    }
    .btn-green {
        position: relative;
     color: aliceblue;
background-color: #ECC041;
	font-size: 1em;
	padding: 1em 2em;
    margin: 1em;
	border: none !important;
	border-radius: 5em;
	box-shadow: none;
    }
</style>