class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.score=0;

    }

    getCount(){
        var getCountRef=database.ref("playerCount");
        getCountRef.on("value",function(data){
            playerCount=data.val()
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })

    }

    update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            score:this.score
        })
    }
}