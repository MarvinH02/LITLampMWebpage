import { MemoryGameView } from "../views/MemoryGameView";

export default function MemoryGamePresenter (props) {
    function submitGuessCustomEventHandlerACB(guess){
        props.model.setMemoryGameGuess(guess);
    }
    function playingMemoryGameACB(){
        props.model.setGameStatus();
        props.model.logGamePlayed('memory');
    }
    return (
        <div>
            <MemoryGameView
            submitGuessCustomEvent={submitGuessCustomEventHandlerACB}
            playingGame={playingMemoryGameACB}
            gameStatus={props.model.gameStatus}
            />

        </div>
    );
}