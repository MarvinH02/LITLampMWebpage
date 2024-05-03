import { MemoryGameView } from "../views/MemoryGameView";

export default function MemoryGamePresenter (props) {
    function submitGuessCustomEventHandlerACB(guess){
        props.model.setMemoryGameGuess(guess);
    }
    function playingGameACB(){
        props.model.setGameStatus()
    }
    return (
        <div>
            <MemoryGameView
            submitGuessCustomEvent={submitGuessCustomEventHandlerACB}
            playingGame={playingGameACB}
            gameStatus={props.model.gameStatus}
            />

        </div>
    );
}