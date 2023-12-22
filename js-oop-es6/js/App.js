import Ground from "./components/Ground.js";
import Player from "./components/player.js";
import Cactus from "./components/Cactus.js";
import Cloud from "./components/Cloud.js";
import Bird from "./components/Bird.js";
import Score from "./components/Score.js";
import GameHandler from "./components/GameHandler.js";
import { randomNumBetween } from "./components/util.js";



export default class App {
  static canvas = document.querySelector('#canvas');
  static context = App.canvas.getContext('2d');
  static dpr = devicePixelRatio >1? 2:1;
  static interval = 1000/ 60; 
  static width = 1024;
  static height = 768;

  constructor(){
    this.grounds = [new Ground({ img: document.querySelector('#img_ground1'), speed: -4, start:0 }),
      new Ground({ img: document.querySelector('#img_ground2'), speed: -4, start: 1200})],
    // this.gameHandler = new GameHandler(this);
    this.reset();
  }
  
  reset(){
    // this.player = new Player();
    // this.coins = [];
    this.clouds = [new Cloud()];
    // this.birds = [];
    // this.cactuses = [];
    // this.score = new Score();
  }


  init(){
    
    App.canvas.width = App.width * App.dpr;
    App.canvas.height = App.height * App.dpr;
    App.context.scale(App.dpr, App.dpr);

    this.grounds.forEach(ground => {
      ground.update();
      ground.draw();
    });    
  }

  render(){
    let now, delta;
    let then = Date.now();
    const frame=()=>{
      requestAnimationFrame(frame);
      now = Date.now();
      delta = now - then;

      if(delta < App.interval) return;

      // if(this.gameHandler.status !== 'PLAYING') return

      App.context.clearRect(0,0,App.width, App.height);

      this.grounds.forEach(ground => {
        ground.update();
        ground.draw();
      }); 
      // 구름 업데이트

      for(let i = this.clouds.length-1; i>=0; i-=1){
        
        this.clouds.push(new Cloud());

        this.clouds[i].update();
        this.clouds[i].draw();
        //구름제거
        // if(this.clouds[i].isOutside){
        //   this.clouds.splice(i,1);
        //   continue;
        // }

        //구름 생성
        // if(this.clouds[i].canGenerateNext){
        //   this.clouds[i].generateNest = true;

        // }
      }


      then = now - (delta % App.interval);
    }
    requestAnimationFrame(frame);
  }
}

