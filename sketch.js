var wizard;
var wizardImg;
var sword, swordImg;
var orc1, orcsImg, orcsGroup;
var fire1, fireImg, fireGroup;
var backgroundImg;

function preload()
{
   wizardImg=loadImage("wizard.png");
   swordImg=loadImage("sword.png");
   orcsImg=loadAnimation("orc1.png" , "orc3.png" , "orc5.png" , "orc7.png");
   fireImg=loadAnimation("fire1.png");
   backgroundImg=loadImage("plateau.jpg");
}
function setup() {
  createCanvas(1500,750);
  wizard = createSprite(300, 600, 50, 50);
  wizard.addImage(wizardImg);
  wizard.scale=0.5;

  sword = createSprite(100, 400, 50, 50);
  sword.addImage(swordImg);
  sword.scale=0.5;

  orcsGroup = createGroup();
  fireGroup = createGroup();

}

function draw() {
  background(backgroundImg);

  createOrcs();
  wizard.y=mouseY;

  if(keyDown("space"))
  {
     createFlames();
  }

  drawSprites();
}
function createOrcs()
{
  if(frameCount%150===0)
  {
    orc1 = createSprite(1400, 400, 50, 50);
    orc1.addAnimation("running",orcsImg);
    orc1.velocityX=-3;
    orc1.scale=2.5;
    orc1.y=Math.round(random(50,700));
    orc1.lifetime=500;
    orcsGroup.add(orc1);
  }
}

function createFlames()
{
  fire1 = createSprite(400, mouseY-90, 50, 50);
  fire1.addAnimation("running",fireImg);
  fire1.velocityX=3;
  fire1.scale=0.2;
  fire1.lifetime=500;
  fireGroup.add(fire1);
}