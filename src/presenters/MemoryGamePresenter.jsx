import { MemoryGameView } from "../views/MemoryGameView";

export default function MemoryGamePresenter (props) {
    function submitGuessCustomEventHandlerACB(guess){
        props.model.setMemoryGameGuess(guess);
    }
    function playingMemoryGameACB(){
        props.model.setGameStatus();
        props.model.logGamePlayed('memory');
    }
    function showScoreboardACB(){
        props.model.setShowScoreboard();
    }
    function hideScoreboardACB() {
        props.model.setHideScoreboard();
    }

    function addScoreACB(score) {
        props.model.addMemoryScore(score);
    }

    return (
        <div>
            <MemoryGameView
            submitGuessCustomEvent={submitGuessCustomEventHandlerACB}
            playingGame={playingMemoryGameACB}
            gameStatus={props.model.gameStatus}
            showScoreboard = { props.model.showScoreboard }
            showScoreboardClicked = { showScoreboardACB }
            hideScoreboard = { hideScoreboardACB }
            scoreboard = { props.model.memoryScoreboard }
            addScore = { addScoreACB }
            />

        </div>
    );
}