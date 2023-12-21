import Background from "./components/Background.js";
import Player from "./components/player.js";
import Cactus from "./components/Cactus";
import Bird from "./components/Bird.js";
import Score from "./components/Score.js";
import GameHandler from "./components/GameHandler.js";



export default class App {
  static canvas = document.querySelector('#canvas');
  static context = App.canvas.getContext('2d');
  static dpr = devicePixelRatio >1? 2:1;
  static interval = 1000/ 60; 
  static width = 1024;
  static height = 768;

  constructor(){

  }
  init(){
    App.canvas.width = App.width * App.dpr;
    App.canvas.height = App.height * App.dpr;
    App.context.scale(App.dpr, App.dpr);
  }
  render(){
    let now, delta;
    let then = Date.now();
    const frame=()=>{
      requestAnimationFrame(frame);
      now = Date.now();
      delta = now - then;

      if(delta < App.interval) return;





      then = now - (delta % App.interval);
    }
    requestAnimationFrame(frame);
  }
}

