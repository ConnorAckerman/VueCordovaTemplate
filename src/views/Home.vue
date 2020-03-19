<template>
  <div class="main-wrapper">
    <div v-touch:tap="() => popdown()" class="grey-out" :class="{'hidden': hide}"></div>
      <div class="popup" :class="{'hidden': hide}">
        <div class="alert-txt">This function is only available for premium members</div>
        <input v-bind="card" type="number" placeholder="credit card number">
        <div class="btn-container">
          <button v-touch:tap="() => popdown()" v-touch-class="'active'" class="cancel">Cancel</button>
          <button v-touch:tap="() => popdown()" v-touch-class="'active'" class="enter">Enter</button>
        </div>
      </div>
    
      <div class="calculation">
        <div class="number-wrapper">
          <!-- <span v-for="pastItem in past" :key="pastItem" class="total">{{pastItem}}</span> -->
          <span>{{equation}}</span>
          
        </div>
        
        <span v-bind="equation" :class="{'hidden': show == false}" class="total">{{getResult}}</span>
        <button v-touch:tap="() => backspace()" v-touch-class="'active'" class="delete fade-to-red">DEL</button>
        <!--<div @click.prevent="playAudio()" class="backspace btn">back</div>-->
      </div>
      <div class="numpad">
        <!--5 rows of 4,4,4,4,3 -->
        <div class="row">
          <button v-touch:tap="() => input('C')" v-touch-class="'active'" class="btn sec-function fade-to-red clear">C</button>
          <button v-touch:tap="() => input('!')" v-touch-class="'active'" class="btn sec-function fade-in">+/-</button>
          <button v-touch:tap="() => input('%')" v-touch-class="'active'" class="btn sec-function fade-in">%</button>
          <button v-touch:tap="() => input('/')" v-touch-class="'active'" class="btn function fade-in">÷</button>
        </div>
        <div class="row">
          <button v-touch:tap="() => input('7')" v-touch-class="'active'" class="btn decimal fade-in2">7</button>
          <button v-touch:tap="() => input('8')" v-touch-class="'active'" class="btn decimal fade-in2">8</button>
          <button v-touch:tap="() => input('9')" v-touch-class="'active'" class="btn decimal fade-in2">9</button>
          <button v-touch:tap="() => input('*')" v-touch-class="'active'" class="btn function fade-in2">x</button>
        </div>
        <div class="row">
          <button v-touch:tap="() => input('4')" v-touch-class="'active'" class="btn decimal fade-in3">4</button>
          <button v-touch:tap="() => input('5')" v-touch-class="'active'" class="btn decimal fade-in3">5</button>
          <button v-touch:tap="() => input('6')" v-touch-class="'active'" class="btn decimal fade-in3">6</button>
          <button v-touch:tap="() => input('-')" v-touch-class="'active'" class="btn function fade-in3">-</button>
        </div>
        <div class="row">
          <button v-touch:tap="() => input('1')" v-touch-class="'active'" class="btn decimal fade-in4">1</button>
          <button v-touch:tap="() => input('2')" v-touch-class="'active'" class="btn decimal fade-in4">2</button>
          <button v-touch:tap="() => input('3')" v-touch-class="'active'" class="btn decimal fade-in4">3</button>
          <button v-touch:tap="() => input('+')" v-touch-class="'active'" class="btn function fade-in4">+</button>
        </div>
        <div class="row">
          <button v-touch:tap="() => input('0')" v-touch-class="'active'" class="btn btn-double function fade-in5">0</button>
          <button v-touch:tap="() => input('.')" v-touch-class="'active'" class="btn decimal fade-in5">.</button>
          <button v-touch:tap="() => equal()" v-touch-class="'active'" class="btn function fade-in5">=</button>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      display: 0,
      equation: '',
      result: '',
      ar: 0,
      operatorPressed: true,
      hide: true,
      card: '',
      show: false,
    };
  },
  computed: {
    history() {
      let str = String(this.previous.value);
      str += this.previous.operator == "+" ? " +" : "";
      str += this.previous.operator == "-" ? " -" : "";
      str += this.previous.operator == "x" ? " x" : "";
      str += this.previous.operator == "÷" ? " ÷" : "";
      return str || "";
    },
    getResult: function () {
      let x = eval(this.equation)
      console.log("equation as int: " + x)
      
      this.result = x
      return x
    }
  },
  mounted() {
    this.soundOpen()
    console.log("sound-opened")
  },
  methods: {
    popup() {
      //play popup sound
      
      this.hide = false
    },
    popdown() {
      // on cancel or click outside popup
      this.hide = true
      this.card = ''
      this.soundClose()
    },
    cleanDisplay() {
      this.display = this.display.replace(/^-?0*$/, "0"); // multiple zeros are one zero
      this.display = this.display.replace(/^(-?)0+([1-9]\w*)$/, "$1$2"); // remove zeros before a digit
      this.display = this.display.replace(/^(-?\d+\.\d*)\.(\d*)$/, "$1$2"); // remove extra dot
    },
    addKey(key) {
      this.equation += String(key)
      this.lastOpStatus = false
    },
    backspace() {
      this.soundClose()
      this.equation = this.equation.slice(0, -1);
    },
    opposite() {
      this.display =
        this.display[0] === "-" ? this.display.slice(1) : "-" + this.display;
      this.cleanDisplay();
    },
    clear() {
      this.equation = "";
      this.result = 0;
    },
    addOperator(operator) {
      
      this.operatorPressed = true;
      if (this.lastOpStatus == true){
        //the last was an operator, go ahead and override it
        //splice string and remove last, then add current operator to it
        this.equation = this.equation.slice(0, -1)
        this.equation += String(operator)
      } else { //otherwise, just add it on
        this.equation += String(operator)
      }
      this.lastOpStatus = this.operatorPressed
      // if(this.lastOpStatus == true) {
      //   this.operatorPressed = false
      //   this.lastOpStatus = this.operatorPressed
      // }
    },
    equal() {
      // if (this.lastOpStatus == true){
      //   //the last was an operator
      //   this.equation = this.equation.slice(0, -1)
      //   this.lastOpStatus = false
      // }
      // this.displayResult();
      
      this.equation = this.result
      this.showResult()
    },
    hideResult() {
      this.show = false;
    },
    showResult() {
      this.show = true;
    },

    
    input(i) {
      this.hideResult()
      this.sound()
      switch(i) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
          this.addKey(i)
          break;
        case 'C':
          this.clear()
          break
        case '!':
        case '%':
          this.soundPopup()
          this.popup()
          break
        case '/':
        case '*':
        case '-':
        case '+':
          this.addOperator(i);
          break
        default:
      }
    },
    sound() {
      var media = new Media('/android_asset/www/audio/tap.wav');
      console.log("media: " + media)
      media.play();
    },
    soundOpen() {
      var media = new Media('/android_asset/www/audio/splashscreen.wav');
      console.log("media: " + media)
      media.play();
    },
    soundPopup() {
      var media = new Media('/android_asset/www/audio/alert.wav');
      console.log("media: " + media)
      media.play();
    },
    soundClose() {
      var media = new Media('/android_asset/www/audio/plink.wav');
      console.log("media: " + media)
      media.play();
    },
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.delete {
  width: 4em;
  height: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  border-left: 2px solid rgb(241, 29, 14);
  color:rgb(241, 29, 14);
  border-radius: 100px/40%;
  letter-spacing: 1.2;
  font-weight: 500;
  text-transform: uppercase;
}
.delete.active {
  background-color:rgb(241, 29, 14);
  color: #757575;
}
.grey-out {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: #9e9e9ead;
}
.popup {
  position: absolute;
  
  width: 80%;
  height: 90vw;
  z-index: 3;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafa;
  color: #757575;
  border-radius: 4px;
  box-shadow: 4px 4px 5px #757575;
}
.popup .alert-txt {
  width: 90%;
  margin-top: 10%;
  font-size: 1.5em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
}
.popup input {
  width: 80%;
  height: 1.7em;
  font-size: 1.5em;
  border: none;
  border-bottom: 2px solid #757575;
  text-align: center;
  color: #757575;
  font-weight: 400;
  border-radius: 8%;
  outline: none;
}
.btn-container {
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
  margin-bottom: 5%;
}
.enter, .cancel {
  height: 2em;
  font-size: 1.5em;
  width: 45%;
  border-radius: 10px;
  color: #fafafa;
}
.enter {background-color: #73ce76;}
.cancel {background-color: rgb(241, 29, 14);}
.hidden {
  display: none !important;
}
:root {
  --btn-width: 20%;
}
.number-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-items: center;
  width: 94%;
  height: 40%;
  font-size: 2em;
  letter-spacing: 1.2px; 
}
.main-wrapper {
  background-color: #fafafa;
  color: #757575;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 20%;
}
.numpad {
  width: 90%;
  height: 68%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn {
  font-size: 2em;
  border-radius: 20%;
  width: 2.3em;
  height: 2.3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #757575;
}
.clear{color: rgb(241, 29, 14)}
.clear.active{
  color: #757575;

}

/* .sec-function {
  border: 1px solid rgb(168, 168, 168);
  color: black;
}
.function {
  border-bottom: 2px solid #757575;
  text-shadow: 1px 1px 2px #757575;
} */
.btn-double {
  width: 40vw;
  /* border-radius: 20vw; */
  align-items: flex-start;
  padding-left: 7vw;
}
.calculation {
  height: 30%;
  width: 88%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}

button.active {
  /* border: 2px solid #757575 !important; */
  background-color:rgb(100, 240, 87);
}
.cancel.active, .enter.active {
  background-color: transparent;
}

/* fade everything in 
animation-iteration-count: 2;
*/

.fade-in {
  animation: fadeIn ease-in .7s;
}
.fade-in2 {
  animation: fadeIn ease-in 1s;
}
.fade-in3 {
  animation: fadeIn ease-in 1.3s;
}
.fade-in4 {
  animation: fadeIn ease-in 1.5s;
}
.fade-in5 {
  animation: fadeIn ease-in 1.65s;
}
@keyframes fadeIn {
  0% {
    opacity:0;
    transform: scale(.8);
  }
  60% {
    transform: scale(1.02);
  }
  100% {
    opacity:1;
    transform: scale(1);
  }
}
.fade-to-red {
  animation: fadeToRed ease-in 2s;
}
@keyframes fadeToRed {
  0% {
    opacity:0;
    transform: scale(.8);
    color: #757575;
  }
  21% {
    transform: scale(1.02);
  }
  35% {
    opacity:1;
    transform: scale(1);
    color: #757575;
  }
  100% {
    color: rgb(241, 29, 14);
  }
  /* .7s is  35%*/
}
</style>