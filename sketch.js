let r_p;
let l_p;
let ball;

let score1 = 0;
let score2 = 0;

function setup() {
  
  createCanvas(400, 400);
  rectMode(CENTER);
  l_p= new Peddle(10);
  r_p = new Peddle(390);
  ball = new Ball();
}

function keyPressed()
{
  if(keyCode ==UP_ARROW)
  {
    r_p.change_dir(-2);
  }
  
    if(keyCode ==DOWN_ARROW)
  {
    r_p.change_dir(2);
  }
  
   if(keyCode ==65)
  {
    l_p.change_dir(-2);
  }
  
    if(keyCode ==90)
  {
    l_p.change_dir(2);
  }
}
function draw() {
  background(30);
  textSize(20);
  text("Player 1",30,50)
  text(score1,45,25);
  
   text("Player 2",320,50)
  text(score2,340,25);
  
  l_p.show();
  r_p.show();
  l_p.move();
  r_p.move();
  r_p.update();
  l_p.update();
  ball.show();
  ball.move();
  ball.update();
  
  //if ball goes outside
  if (ball.x>=width)
  {
    score1++
    ball.reset();
  }
  
    if (ball.x<=0)
  {
    score2++;
    ball.reset();
    
  }
  //detect collision
  
  if(ball.x>=380 && ball.y<=(r_p.y+50) && ball.y>=(r_p.y-50))
  {
    ball.vx *=-1;
  }
  
    if(ball.x<=20 && ball.y<=(l_p.y+50) && ball.y>=(l_p.y-50))
  {
    ball.vx *=-1;
  }
  
}