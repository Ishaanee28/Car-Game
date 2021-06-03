class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide()
    Text("gameStart",120,125)
    Player.getPlayerInfo()
    if(allPlayers!=undefined){
var displayPosition=150;
displayPosition=displayPosition+30;
if(plr=="player"+player.index)
fill("red")
Text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
    }
  }
}
