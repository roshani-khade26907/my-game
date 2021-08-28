class Game{
    constructor(){}
    
    start(){
        if(gameState===0){
            player=new Player();
            form=new Form()
            form.display();
        }
    }

    getState(){
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        });
    }

}