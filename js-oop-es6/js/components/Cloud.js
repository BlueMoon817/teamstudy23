import App from "../App.js";
import { randomNumBetween } from "../components/util.js";

export default class Cloud {
  /*
  - 배경 요소1 : 구름 - 5가지의 x 간격과 5가지의 y간격이 믹스되어 출현
  - 새와 겹칠 수 있고 겹치면 새가 구름 위에 그려져야함.
  */  
  constructor() {
    this.img = document.querySelector('#img_cloud');
    this.width=92;
    this.height=27;
    this.x=300;
    this.y= 150;
    this.generatedNext = false;
    this.speed=-4;
  }
  update() {
    this.x+=-1;
    if(this.x+this.width<0){
      this.x = 300;
      return "out"
    }
  }
  draw() {
    App.context.drawImage(
      this.img,
      0, this.y, this.width, this.height
    )
  }

  // get isOutside(){
  //   return this.x+this.width<0;
  // }
  // get canGenerateNext(){
  //   return(
  //     !this.generateNext && this.x + this.width < this.gapNextX
  //   )
  // }
}