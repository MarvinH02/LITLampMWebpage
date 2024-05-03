import { MemoryGameView } from "../views/MemoryGameView";

export default function MemoryGamePresenter (props) {
    function submitGuessCustomEventHandlerACB(guess){
        props.model.setMemoryGameGuess(guess);
    }
    return (
        <div>
            <MemoryGameView
            submitGuessCustomEvent={submitGuessCustomEventHandlerACB}
            />

        </div>
    );
}