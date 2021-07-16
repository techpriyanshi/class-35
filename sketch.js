//Create variables here
var dog, happyDog, foodS, foodStock;
var database;
var dogImage, happyDogImage;

function preload()
{
	//load images here
dogImage = loadImage("images/dogimg.png");
happyDogImage = loadImage("images/dogimg1.png");

}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImage);
  
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }


  drawSprites();
  //add styles here
 text("Note: press UP_ARROW key to feed the Drago Milk",208,16);
 textSize(28);
 stroke("white");
 fill("white");


}

function readStock(data){
 foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
})
}

