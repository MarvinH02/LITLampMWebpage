import '../style.css';
function MemoryGameView (props){
    let guess = "";
    var position = 0;

    function increasePosition(){
        position++
        if(position === 11)
            position = 0;
    }

    function updateGuessCB(newGuess){
        guess = newGuess;
        //console.log("Guess Updated: " + guess);
    }

    function submitGuessCB(){
        console.log("Guess Submitted: " + guess);
        props.submitGuessCustomEvent(guess);
        //props.addScore(1000)
    }

    function startMemoryHandler(){
        props.playingGame()
    }

    function showScoreBoardHandler(){
        props.showScoreboardClicked();
    }

    function clickedHideScoreboardHandler() {
        props.hideScoreboard();
    }

    function showScoreboardItemsCB(score) {
        increasePosition();
        return(
            <div className='center'>
                {position + '. '+ score.name + '   -   ' + score.score + ' pts'}
            </div>
        )
        
    }

    if(props.showScoreboard){
        return(
            <div>
                <div className='center'><h3>MEMORY GAME SCOREBOARD</h3></div>
                
                <v-btn style="margin-left: 25%;" onClick= { clickedHideScoreboardHandler } > GO BACK </v-btn>
                <div>
                    {props.scoreboard.map(showScoreboardItemsCB)}
                </div>
            </div>
        )
    }

    if(!props.gameStatus){
        return(
            <div className='memoryMenu'>
                <v-btn color='#999792'onClick={startMemoryHandler} style="margin-top:30%; width:25%; height:10%; ">
                    START
                </v-btn>
                <v-btn onClick= { showScoreBoardHandler } color='#999792'style="margin-top:30%; width:25%; height:10%;">
                    Scoreboard
                </v-btn>
            </div>
        )
    }

    else{
        return(
        <div class="memoryGameView">
            <h1>Memory Game</h1>
            <div class="memorySubmitBox">
                <v-text-field 
                style="width: 100%;"
                onUpdate:modelValue={updateGuessCB} 
                label="Enter number the is displayed on the matrix">
                    
                </v-text-field>
                <v-btn color='#999792'onClick={submitGuessCB}>Submit answer</v-btn>
                <v-btn color='#999792'onClick={startMemoryHandler} size='x-large'>STOP</v-btn>
            </div>
            
        </div>
    ); 
    }
    
    


}

export {MemoryGameView}