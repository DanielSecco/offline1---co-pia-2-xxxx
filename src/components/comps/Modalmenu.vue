
<template>
  <div class="modal-backdrop">
    <div id="modalmenu" class="modal">
        <main v-show='true'>
          <button type="button" class="btn-close" @click="close" > x </button>
    <p>Welcome to the push messaging codelab. The button below needs to be
    fixed to support subscribing to push.</p>
    <p>
      <button disabled class="js-push-btn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
        Enable Push Messaging
      </button>
    </p>
    <section class="subscription-details js-subscription-details is-invisible">
      <p>Once you've subscribed your user, you'd send their subscription to your
      server to store in a database so that when you want to send a message
      you can lookup the subscription and send a message to it.</p>
      <p>To simplify things for this code lab copy the following details
      into the <a href="https://web-push-codelab.glitch.me/">Push Companion
      Site</a> and it'll send a push message for you, using the application
      server keys on the site - so make sure they match.</p>
      <pre><code class="js-subscription-json"></code></pre>
    </section>
  </main>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
       <button type="button" class="btn-green" @click="close" >Close me!</button>
    </div>
  </div>
</template>

<script>
     
var $ = require('jquery')
    export default {
        name: 'modal',
        components: {
          
            
        },
        data(){
            return{
            
                
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