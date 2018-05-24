<template>
  <div class="ev-login col-sm-4 offset-sm-4">
   <!-- <spinner v-show="loggingIn" message="Logging in..."></spinner>-->
    <img id="imgSid" src="@/assets/sid.png" width="200px" height="auto"/> 
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group ">
      <input 
        type="text"
        data-id="login.username" 
        class="form-control js-login__username w33"
        placeholder="Enter your username"
        v-model="credentials.username"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control js-login__password w33 "
        placeholder="Enter your password"
        v-model="credentials.password"
      >
    </div>
    <button 
      data-id="login.submit"
      class="btn btn-primary solid black js-login__submit" 
      @click="submit()"
    >
       Entrar&nbsp; <i class="fa fa-arrow-circle-o-right"></i>
    </button>
    <br><br><br>
    <a href="#">Esqueci minhas credenciais</a><br>
    Don’t have an account? &nbsp;<a href="#">Sign up here.</a>
    <span><el-alert title="alert" type="success">{{dcounter}}
  </el-alert></span>
  </div>
</template>
<script>
import Spinner from '@/components/comps/Spinner'
  //import {mapGetters} from 'vuex'
import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    import Swiper from 'swiper'
export default {
  name: 'login',
  components: { Spinner, swiper, swiperSlide },
  data () {
    return {
        fullscreenLoading: false,
      credentials: {
        username: '',
        password: ''
      },
      loggingIn: false,
      error: ''
    }
  },
 computed: { 
            dcounter() {
                return this.$store.getters.getterUsrN;
            },
        },  
  methods: {
    submit () {
         const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        
        
        
      this.loggingIn = true
      const credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      console.log(credentials);
       this.$store.dispatch('setUsrN', this.credentials);
        //UsrN = this.credentials.username;
        //this.$store.state.UsrN = this.credentials.username;
       // console.log(UsrN);
     var mySwiper = new Swiper('.swiper-container', {
  // ...
  on: {
    init: function () {
      console.log('swiper initialized');
    },
  },
});
        
        setTimeout(() => {
          loading.close();
            mySwiper.slideTo(1);
        }, 2000);
        
      // Auth.login() returns a promise. A redirect will happen on success.
      // For errors, use .then() to capture the response to output
      // error_description (if exists) as shown below:
    /*  this.$auth.login(credentials, 'dashboard').then((response) => {
        this.loggingIn = false
        this.error = utils.getError(response)
      });*/
    },
      
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
  }
}
</script>
<style lang="scss" scoped>
    #imgSid{
        position: relative;
        top: -10vh;
        margin-left: 1.3em;
    }
    .form-group{
        position: relative;
     top: -50px;
        margin: 1em;
    }
.ev-login {
  //margin-top: 100px;
}
button {
    color: aliceblue;
    width: 200px;
background-color: #000;
	font-size: 1em;
	padding: 1em 2em;
	border: none !important;
	border-radius: 3px;
	box-shadow: none;
}
</style>
