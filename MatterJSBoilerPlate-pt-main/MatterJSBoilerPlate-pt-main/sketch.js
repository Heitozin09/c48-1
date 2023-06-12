var buraco,BuracoImg
var Carro1,Carro1Img
var Carro2,Carro2Img
var Cavalo,CavaloImg
var barricada,barricadaImg
var Moto,MotoImg
var Road,RoadImg
var barriGP
var cavaloGP
var carro2GP
var buracoGP
var motoGP
var record = 0
var pontuacao = 0

function preload()
{
	barricadaImg = loadImage("barricada.png")
	BuracoImg= loadImage("Buraco.png")
	Carro1Img= loadImage("Carro1.png")
	Carro2Img= loadImage("Carro2.png")
	CavaloImg= loadImage("Cavalo.png")
	MotoImg= loadImage("Moto.png")
	RoadImg= loadImage("Road.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);//800,700

	Road = createSprite(width/2,0,width,height)
	Road.addImage(RoadImg)

	Carro1 = createSprite(width/2,height-100)
	Carro1.addImage(Carro1Img)
	Carro1.scale = 0.2
	//Carro1.debug= true

	motoGP=new Group()
	buracoGP=new Group()
	cavaloGP=new Group()
	carro2GP=new Group()
	barriGP=new Group()

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Road.velocityY = 25
  if (Road.y>1000) {
	Road.y = height/2
  }
  

  fill ("blue")
  textAlign(CENTER,TOP)
  textSize(18)
  text("pontuação: ",pontuacao,600,50)
  Road.depth = pontuacao.depth-1
  
  move()
  Barricada()
  Buraco()
  cavalo()
  moto()
  carro2()
  drawSprites();
 
	if (Carro1.isTouching(cavaloGP)) {
	Carro1.destroy()
	}

	if (Carro1.isTouching(carro2GP)) {
		Carro1.destroy()
		}

		if (Carro1.isTouching(motoGP)) {
			Carro1.destroy()
			}
			if (Carro1.isTouching(barriGP)) {
				Carro1.destroy()
				}
				if (Carro1.isTouching(buracoGP)) {
					Carro1.destroy()
					}

	}


function move(){
 if (keyIsDown(UP_ARROW)||keyDown("W")) {
	Carro1.y-=5
 }

 if (keyIsDown(DOWN_ARROW)||keyDown("S")) {
	Carro1.y+=5
 }

 if (keyIsDown(LEFT_ARROW)||keyDown("A")) {
	Carro1.x-=5
 }
 if (keyIsDown(RIGHT_ARROW)||keyDown("D")) {
	Carro1.x+=5
 }
}

function Barricada(){
	if (frameCount%250==0) {
		barricada=createSprite(50,-50)
		
		barricada.x= Math.round(random(50,1500))
		barricada.addImage(barricadaImg)
		barricada.scale = 0.4
		barricada.velocityY=5
		barricada.lifeTime = 800
		barriGP.add(barricada)
		//barricada.debug=true
		barricada.setCollider("rectangle",0,0,500,150)

	}
}

function Buraco(){
	if (frameCount%150==0) {
		buraco=createSprite(50,-50)
		
		buraco.x= Math.round(random(50,1500))
		buraco.addImage(BuracoImg)
		buraco.scale = 0.3
		buraco.velocityY=5
		buraco.lifeTime = 800
		buracoGP.add(buraco)
		//buraco.debug=true
		buraco.setCollider("circle",0,0,250)
		
	}
}

 function cavalo(){
	if (frameCount%200==0) {
		Cavalo=createSprite(50,-50)
		
		Cavalo.x= Math.round(random(50,1500))
		Cavalo.addImage(CavaloImg)
		Cavalo.scale = 0.2
		Cavalo.velocityY=5
		Cavalo.lifeTime = 800
		cavaloGP.add(Cavalo)
		//Cavalo.debug=true
		
	}
 }

 function moto(){
	if (frameCount%300==0) {
		Moto=createSprite(50,-50)
		
		Moto.x= Math.round(random(50,1500))
		Moto.addImage(MotoImg)
		Moto.scale = 0.2
		Moto.velocityY=9
		Moto.lifeTime = 800
		motoGP.add(Moto)
		//Moto.debug=true
	}
 }

 function carro2(){
	if (frameCount%350==0) {
		Carro2=createSprite(50,-50)
		
		Carro2.x= Math.round(random(50,1500))
		Carro2.addImage(Carro2Img)
		Carro2.scale = 0.9
		Carro2.velocityY=11
		Carro2.lifeTime = 800
		carro2GP.add(Carro2)
		//Carro2.debug=true
		Carro2.setCollider("rectangle",0,0,100,150)
	}
 }



