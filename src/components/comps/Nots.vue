<template>

<div id="notifications">
  <notifications :notification-data="notificationData"></notifications>
  
</div>

</template>

<script>
import Vue from 'vue'
    var Notifications = {template: "<div class='controls'>" +
  "<h1>Vue Notifications</h1>" +
  "<p>Select a pre-made notification</p>" +
  "<button class='success' @click='makeNotification(testSuccess)'>Success</button>" +
  "<button class='error' @click='makeNotification(testError)'>Error</button>" +
  "<button class='warning' @click='makeNotification(testWarning)'>Warning</button>" + 
  "<p>-OR- <br> Make one here</p>" +
  "<div class='new-message-wrapper'>" +
  "<div class='select'><select id='newNotificationType' v-model='newNotification.type'>" +
  "<option selected='selected' disabled value='disabled'>Select a type</option>" +
  "<option v-for='option in notificationTypes' value='{{ option }}'>{{ option | capitalize }}</option>" +
  "</select></div>" +
  "<input v-model='newNotification.title' value='{{ newNotification.title }}' placeholder='Give it a title'/>" + 
  "<input v-model='newNotification.message' value='{{ newNotification.message }}' placeholder='Whats the message?'/>" +
  "<button @click='createNewNotification()'>Create New Message</button>" +
  "</div>" + 
  //"<pre>{{ newNotification | json }}</pre>" + 
  //"<pre>{{ notificationData | json }}</pre>" + 
  "</div>" + 
  "<div class='notification-wrapper'>" +
  "<div class='notification' v-for='notification in notificationData' track-by='$index' v-bind:class='notification.type'>" + 
  "<i @click='closeNotification($index)' class='fa fa-times close'></i>" +
  "<h2>{{ notification.title }}</h2>" +
  "<p>{{ notification.message }}</p>" +
  "</div>" +
  "</div>"
  ,};
var Comp1 = {
  ready: function() {
    this.makeNotification(this.testSuccess);
  },

  

  props: ["notificationData"],

  methods: {
    createNewNotification: function() {
      //soft validation
      //first check to see if the selected type is disabled
      if(this.newNotification.type === "disabled") {
        return;
        die;
      }

      //then check for any empty fields
      //doubt anything will be undefined, but just in case, yo.
      for (var i in this.newNotification) {
        if(this.newNotification[i] == "" || this.newNotification[i] == "undefined") {
          return;
          die;
        }
      }
      //else if it passed soft validation, go on

      //save current message
      var newMessage = JSON.parse(JSON.stringify(this.newNotification));

      //make 'er
      this.makeNotification(newMessage);

      //empty the object after we save the message
      for (var i in this.newNotification) {
        this.newNotification[i] = ""
      }

      //since we reset the values above, we have to wait until the next tick
      //to change the select value
      Vue.nextTick(function () {
        document.getElementById('newNotificationType').selectedIndex = "0";
      })
    },

    makeNotification: function(sentData) {
      this.notificationData.push(sentData);
    },

    closeNotification(sentNotificationIndex) {
      //idk why, but $remove "syntax sugar" method doesnt work
      //gotta schmack it out old school
      this.notificationData.splice(sentNotificationIndex, 1);
    }    
  },

  data() {
    return {
      template: Notifications.template,  
      notificationTypes: [
        "warning",
        "error",
        "success"
      ],

      selectedNotificationType: 'success',

      testSuccess: {
        type: "success",
        title: "Noice, bro!",
        message: "This is a success message. Must've done something right. Hooray!"
      },

      testError: {
        type: "error",
        title: "Aw, darn.",
        message: "This is an error message. Assumingly, something went wrong. Sadface."
      },

      testWarning: {
        type: "warning",
        title: "Hey, guess what?",
        message: "This is a warning message. Some info comin' at ya. Meh."
      },

      newNotification: {
        type: "",
        title: "",
        message: ""
      }
    }
  },
    render: function (createElement, context) {
        return createElement('div',{attrs: {
        id: 'Igor',
            
      }},[this.template])
 
        
    }
}

//----------
// Vue init
//----------
/*var vue = new Vue({
  el: "#vue",

  //putting the notification data in the parent Vue instance
  //this allows other components to access and see them
  //that means we can also push new notifications to it,
  //and our notifications component will pick them up
  data: {
    notificationData: []
  }
});*/
export default {
  name: 'Nots',
  /**
   * Props the parent can use to manipulate this component.
   * Note: Components themselves should not mutate their own props.
   */

  data () {
    return { notificationData: []
    }
  },
  components: {'notifications': Comp1,
               
               
  }
}
</script>

<style lang="scss" scoped="true">


@import url(https://fonts.googleapis.com/css?family=Open+Sans);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css);

$error: #ea0000;
$success: #7ad03a;
$warning: #ffba00;

* {
  box-sizing: border-box;
  font-family: "Open Sans";
}

p {
  margin-bottom: 0;
}

@keyframes openUp {
  0% {
    transform: translateY(-50%) scale(0);
    opacity: 0;
  }
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
}
.controls {
  margin: 0 auto;
  text-align: center;

  input, select {
    font-size: 16px;
    margin: 0.4em;
    padding: 0.6em 1em;
    appearance: none;
    border: 4px solid black;
    border-radius: 5px;
  }

  .select {
    position: relative;
    display: inline-block;

    select {
      padding-right: 2em;
      cursor: pointer;
    }

    &:after {
      $arrow-size: 0.4em;

      
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      top: 55%;
      right: 1em;
      border-left: $arrow-size solid transparent;
      border-right: $arrow-size solid transparent;
      border-bottom: $arrow-size solid transparent;
      border-top: $arrow-size solid black;
      transform: translateY(-50%);
      user-select: none;
      pointer-events: none;
    }
  }

  button {
    position: relative;
    display: inline-block;
    margin: 0.4em;
    padding: 0.6em 1em;
    background: #fefefe;
    cursor: pointer;
    user-select: none;
    appearance: none;
    overflow: hidden;
    z-index: 1;
    transition: all 0.1s;
    font-size: 16px;
    font-weight: bold;
    border: 4px solid black;
    border-radius: 0.4em;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.15);

    &:hover:after {
      background: black;
      color: white;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      transition: all 0.1s;
      z-index: -1;
    }

    &:hover {
      color: white;
      box-shadow: 0 1px 1px 0 rgba(0,0,0,.5);

      &:after {
        transform: translate(0%);
      }
    }

    &.error {
      border: 4px solid $error;

      &:after {
        background: $error;
      }
    }

    &.success {
      border: 4px solid $success;

      &:after {
        background: $success;
      }
    }

    &.warning {
      border: 4px solid $warning;

      &:after {
        background: $warning;
      }
    }
  }
}

.notification-wrapper {
  //if we want them fixed on the bottom and centered
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // left: 50%;
  // transform: translateX(-50%);
  
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 1em;

  .notification {
    position: relative;
    margin: 0.5em;
    padding: 0.5em 2em 0.5em 0.5em;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.25);
    border-left: 4px solid #fff;
    background: #fff;
    animation: openUp 0.1s;

    h2, p {
      margin: 0;
    }
    
    h2 {
      margin-bottom: 0.25em;
    }

    .close {
      position: absolute;
      top: 0.5em;
      right: 0.5em;
      cursor: pointer;
    }

    &.error {
      border-left: 4px solid $error;
    }

    &.success {
      border-left: 4px solid $success;
    }

    &.warning {
      border-left: 4px solid $warning;
    }
  }
}







</style>