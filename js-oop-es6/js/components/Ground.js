import App from "../App.js";

export default class Ground {
  /*
  - 배경 요소: 땅 - 이미지 2장이 연달아서 왼쪽으로 천천히 이동.
  */
  constructor(ground) {
    this.img=ground.img
    console.log(ground)
    this.height = this.img.height;
    this.width = this.img.width;
    this.leftPos={x: ground.start, y: App.height * 0.8};
    this.rightPos = { x: this.width, y: App.height * 0.8 };
    this.speed = ground.speed;
  }
  update() {
    if(this.leftPos.x + this.width <= 0){
      this.leftPos.x = this.width;
    }
    if(this.rightPos.x + this.width <=0){
      this.rightPos.x = this.width;
    }
    this.leftPos.x += this.speed;
    this.rightPos.x += this.speed;
  }
  draw() {
    App.context.drawImage(
      this.img,
      this.leftPos.x, this.leftPos.y , this. width, this.height
    )
  }
}