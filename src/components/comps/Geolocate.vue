<template>
  <div  class="geolocate">
    <h4>{{ msg }}</h4>
   <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>Coords</span>
   
  </div>
  <div id="lat1" class="text item">
  
  </div>
    <div id="long1" class="text item">
   
  </div>
    <div id="alt1" class="text item">
   
  </div>
    <div id="prec" class="text item">
    
  </div>
   <div id="prea" class="text item">
    
  </div>
    <div id="head" class="text item">
    
  </div>
</el-card>
    <p id="demo">Lat</p>
     <span>{{a}}</span>
      <input id="latNum" v-on:change="sendop" type="number" v-model.number="numLT"/>
      <br/>
      <input id="logNum" v-on:change="sendop" type="number" v-model.number="numLG"/>
      <br/>
    <button class="btavancar" @click="getLocation">Get Location</button>
      <br/>
    <button class="btavancar" style="margin:1em" @click="avancar">AVANÇAR</button>
      
  </div>
</template>

<script>
    var latData = 0;
    var longData = 0;
    var precData = 0;
    var altData = 0;
    var preaData = 0;
    var headData = 0;
    var firebase = require('firebase');
    var $ = require('jquery');
    import Swiper from 'swiper';
    var geoOptions = {
        enableHighAccuracy: true,

    };
    var geoError = function(error) {
        console.log('Error occurred. Error code: ' + error.code);
        // error.code can be:
        //   0: unknown error
        //   1: permission denied
        //   2: position unavailable (error response from location provider)
        //   3: timed out
    };
    window.getLocationV = function getLocation() {

        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition, geoError, geoOptions);
        } else {
            $("#demo").append("Geolocation is not supported by this browser.");

        }

        function showPosition(position) {

         /*   $("#demo").text("Latitude: " + position.coords.latitude +
                " Longitude: " + position.coords.longitude + 'precisao:  ' + position.coords.accuracy + 'altitude:  ' + position.coords.altitude + 'altitude pcsn :  ' + position.coords.altitudeAccuracy + 'orientacao:  ' + position.coords.heading);*/
            /* $("#demo").append("Latitude: " + position.coords.latitude + 
            "<br>Longitude: " + position.coords.longitude );*/
            latData = position.coords.latitude;
            longData = position.coords.longitude;
            precData = position.coords.accuracy;
            altData = position.coords.altitude;
            preaData = position.coords.altitudeAccuracy;
            headData = position.coords.heading;
            // this.$store.dispath('setGeoL', {latitude: latData, longitude: longData})
            document.getElementById("latNum").value = latData;
            document.getElementById("lat1").innerHTML ="Latitude: " +  latData;
            document.getElementById("long1").innerHTML =" Longitude: " + longData;
            document.getElementById("alt1").innerHTML = 'Altitude:  ' +  altData;
            document.getElementById("prec").innerHTML ='Precisao c :  ' + precData;
            document.getElementById("prea").innerHTML ='altitude pcsn :  ' + preaData;
            document.getElementById("head").innerHTML ='orientacao:  ' + headData;
            document.getElementById("logNum").value = longData;

            function xx(position) {
                var coord4 = {
                    lat: position.coords.latitude,
                    log: this.longData
                };
                return this.$store.state.floadGeo = coord4;
            }
        }
        window.clearwatch = navigator.geolocation.watchPosition(showPosition, geoError, geoOptions);
    };
    // getLocationV();

    export default {



        name: 'geolocate',
        data() {
            return {
                msg: 'Geo Locate',

                GeoRef: {
                    latitude: latData, 
                    longitude:longData, 
                    precisao: precData, 
                    altutude: altData, 
                    presaltitude:  preaData, 
                    orientacao: headData, 
 },

                numLT: this.latdata,
                numLG: this.longdata,
                a: "",
                b:''
            }
        },
        computed:{
            list(){
                 var coord2 = {
                    latitude: latData, 
                    longitude:longData, 
                    precisao: this.precData, 
                    altutude: this.altData, 
                    presaltitude:  this.preaData, 
                    orientacao: this.headData,
                     msg: 'vai'
                };
                
                this.$store.dispatch('setTest', coord2 );
                this.GeoRef = this.coord2;
                this.$watch('GeoRef', function (newValue, oldValue) {
  // Esta função será executada quando `vm.a` mudar
              console.log('>>geo>>  xxx  ',this.GeoRef);       
                    
})
                return this.GeoRef;
            }
            
        },

        watch: {
            numLT: function(val) {
                console.log(val);
            return     this.b = val;
            },
            numLG: function(val) {
                this.a = val;
            }
        },
        methods: {
            sendop: function(event) {

               var coord2 = {
                    latitude: latData, 
                    longitude: longData, 
                    precisao: precData, 
                    altutude: altData, 
                    presaltitude:  preaData, 
                    orientacao: headData,
                };
                //this.$store.state.floadGeo= coord
               this.$store.dispatch('setTest', coord2);
                console.log('>>geo>>  xxx  ',coord2);

            },
            avancar() {
                var coord2 = {
                    latitude: latData, 
                    longitude: longData, 
                    precisao: precData, 
                    altutude: altData, 
                    presaltitude:  preaData, 
                    orientacao: headData,
                };
                this.$store.dispatch('setGeoL', coord2);
              console.log('>>geofinalll>>',coord2);
                navigator.geolocation.clearWatch(clearwatch);
                var mySwiper = new Swiper('.swiper-container', {

                });
                mySwiper.slideTo(4);

            },
            getLocation() {
                getLocationV();
                console.log('lat');
               
                document.getElementById("latNum").value = latData;
                document.getElementById("logNum").value = longData;
 //console.log('>>geo>>1',this.GeoRef);
                var coord2 = {
                    latitude: latData, 
                    longitude: longData, 
                    precisao: precData, 
                    altutude: altData, 
                    presaltitude:  preaData, 
                    orientacao: headData,
                };
                this.$store.dispatch('setGeoL', coord2);
                //   console.log('>>geo>>',GeoL)
            }


        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2,
    p {
        font-weight: normal;
        color: black;
    }

    input {
        background-color: azure;
        margin: 1em;
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
    .text {
        font-size: 8px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 60vw;
    }

</style>
