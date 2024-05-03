import '../style.css';
function MemoryGameView (props){
    let guess = "";
    function updateGuessCB(newGuess){
        guess = newGuess;
        //console.log("Guess Updated: " + guess);
    }
    function submitGuessCB(){
        console.log("Guess Submitted: " + guess);
        props.submitGuessCustomEvent(guess);
    }

    function startMemoryHandler(){
        props.playingGame()
    }

    if(!props.gameStatus){
        return(
            <div className='memoryMenu'>
                <v-btn color='#999792'onClick={startMemoryHandler} style="margin-top:30%; width:25%; height:10%; ">
                    START
                </v-btn>
                <v-btn color='#999792'style="margin-top:30%; width:25%; height:10%;">
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