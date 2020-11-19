var  database;

var gameState=0
var playerCount
var form
var game
var player
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game=new Game()
game.getState()
 game.Start()
 


 
}

function draw(){
  background("white");
  
   
}



