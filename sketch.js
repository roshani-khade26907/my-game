var game;
var gameState=0;
var form,player;
var database;
var bg;
var playerCount=0;


function preload(){
  bg=loadImage("assets/nature background.jpg");
}

function setup() {
  createCanvas(1400,600);
  game=new Game();
  game.start();

  database=firebase.database();
}

function draw() {
  background(bg);  
  drawSprites();
  
}