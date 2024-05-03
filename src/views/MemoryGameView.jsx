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
    return(
        <div class="memoryGameView">
            <h1>Memory Game</h1>
            <div class="memorySubmitBox">
                <v-text-field 
                style="width: 100%;"
                onUpdate:modelValue={updateGuessCB} 
                label="Enter number the is displayed on the matrix">
                    
                </v-text-field>
                <v-btn onClick={submitGuessCB}>Submit answer</v-btn>
            </div>
            
        </div>
    ); 

    
    


}

export {MemoryGameView}