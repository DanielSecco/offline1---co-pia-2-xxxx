<template>
  <div  class="tagnumber">
    <h3>{{ msg }}</h3>
      <p>
    Informe o número da tag ou utilize o Leitor
    </p>
    <h5>{{ counter}}</h5>
    <p>{{scanned}}</p>
   <input type="number" id="tagNum" v-on:change="sendop"  placeholder="#"  v-model.number="num"/>
      <br/>
        <vue-qr-reader v-if="show"  v-on:code-scanned="codeScanned" :stop-on-scanned="true" :draw-on-found="true" :responsive="true" @test1="test2()"/>
 
    <button @click="imgOpen">Toggle Video</button>
    <!--<modal v-show="isModalVisible" @close="closeModal()"/> 
    <button type="button" class="btn" @click="showModal">QR CODE</button>-->
      <br/>
    <button class="btavancar" @click="avancar">AVANÇAR</button>
     <button class="btavancar" @click="test">testar</button>
  </div>
</template>

<script>
    var $ = require('jquery');
    import Swiper from 'swiper'
    // import Modal from '@/components/comps/Modal.vue'
    import VueQrReader from '@/components/VueQrReader.vue'
    export default {
        name: 'tagnumber',
        components: {
            // Modal,
            VueQrReader
        },
        data() {
            return {
                isModalVisible: false,
                msg: 'TAG #',
                num: '',
                paused: false,
                scanned: "",
                show: false
                

            }
        },
        methods: {
            
            test() {
                
                 console.log('foiiii');
                this.$emit('test1');
            },
            
            imgOpen() {
    this.show = !this.show;
     // this.$emit("run")  ;        
    
},           
            close() {
                this.$emit('close');
            },
            codeScanned(code) {
                this.scanned = code;
                this.onDecode(code);
            },

            onDecode(content) {
                console.log(content);


                // navigator.mediaDevices.getUserMedia({ audio: false, video: false });
                var str = content;
                this.paused = true;
                var matchUrl = str.substr(0, 21);
                var urlToMach = 'https://sid.anubz.io/'
                var res = str.substr(21, 7);
                console.log(matchUrl, '<>', urlToMach);
                if (matchUrl === urlToMach) {

                    console.log('tagCarro....2> ', res);

                    this.$store.dispatch('setTagN', res)

                    //TagN = res;
                    //this.$store.state.Tag_Number = TagN;
                    // return this.close();
                    return this.num = res, this.show=false;

                    // $('.qrcode-reader').remove();
                } else {
                    console.log('woooops');
                }
            }, ////////
            showModal() {
                this.$emit('paused', this.paused = false)
                this.isModalVisible = true;
            },
            closeModal() {
                this.num = this.$store.getters.getterTagN;
                this.isModalVisible = false;
            },
            sendop: function(event) {

                console.log('thisnum--> ', this.num);
                if (this.num !== undefined) {
                    // TagN = this.num;
                    this.$store.dispatch('setTagN', this.num);
                    return
                }
            },
            avancar() {
                this.show = false;

                console.log('tagnFinal ', this.num);
                var mySwiper = new Swiper('.swiper-container', {

                });
                mySwiper.slideTo(2);

            }


        },
        computed: {
            counter() {
                return this.$store.getters.getterTagN;
            },
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
        color: black;
    }

    #tagNum {
        width: 200px;
        background-color: azure;
    }

    button {
        color: aliceblue;
        background-color: #000;
        font-size: .5em;
        width: 100px;
        padding: 1em 2em;
        margin: 1em;
        border: none !important;
        border-radius: 3px;
        box-shadow: none;
    }

</style>
