var canvas=document.querySelector('#canvas');
var context = canvas.getContext('2d');

let canvasWidth=innerWidth;
let canvasHeight=innerHeight;

canvas.style.width= canvasWidth + 'px';
canvas.style.height= canvasHeight + 'px';
canvas.width =canvasWidth;
canvas.height = canvasHeight;
var player = new Image();
player.src='../images/dinosaur.png';
var dino = {
  x:10,
  y: 200,
  width: 50,
  height: 50,
  draw(){
    context.drawImage(player,this.x,this.y, this.width, this.height);
  }
}
dino.draw();

var obstacle = new Image();
obstacle.src='../images/cactus.png';


class Obstacle {
  constructor(){
    this.x= canvasWidth;
    this.y = 200;
    this.width = 50;
    this.height = 50;
    
  }
  draw(){
    context.drawImage(obstacle,this.x,this.y, this.width, this.height);
  }
}

var timer = 0, jumpTimer=0;
var obstacles = [];
var animation;

function 프레임마다실행(){
  animation=requestAnimationFrame(프레임마다실행);
  timer++;
  context.clearRect(0,0, canvas.width, canvas.height);
  
  if(timer%120===0){
    obstacles.push(new Obstacle())
  }
  obstacles.forEach((a, i, o)=>{
    // 화면밖으로 나간 장애물 제거
    if(a.x<0){
      o.splice(i,1);
    }
    a.x--;
    충돌(dino, a);
    a.draw();
  });
  
  if(점프 === true){
    dino.y -=2; 
    jumpTimer+=3;
  }
  if(점프 === false){
    if(dino.y<200){
      dino.y +=1.5 ;
    }
  }
  if(jumpTimer>80){
    점프 = false;
    jumpTimer=0;
  }
  dino.draw();  
}

프레임마다실행();

//충돌확인
function 충돌(dino, obstacle){
  var xGap = obstacle.x - (dino.x+dino.width);
  var yGap = obstacle.y - (dino.y + dino.height);
  if(xGap < 0 && yGap <0){
    context.clearRect(0,0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}


var 점프 = false;
document.addEventListener('keydown', function(e){
  if(e.code === 'Space'){
    점프 = true;
  }
});
