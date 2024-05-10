import { SnakeView } from "../views/SnakeView";

export default function SnakePresenter (props) {
    function arrowUpCustomEventHandlerACB(){
        
    }
    function arrowDownCustomEventHandlerACB(){
        
    }
    function arrowLeftCustomEventHandlerACB(){
        
    }
    function arrowRightCustomEventHandlerACB(){
        
    }

    function showScoreboardACB(){
        props.model.setShowScoreboard();
    }

    function playingSnakeGameACB() {
        props.model.setGameStatus();
        props.model.logGamePlayed('snake');
        props.model.StartPlayingSnake();
    }

    function hideScoreboardACB() {
        props.model.setHideScoreboard();
    }

    function addScoreACB(score) {
        props.model.addSnakeScore(score);
    }

    return (
        <div>
            <SnakeView
            arrowUpCustomEvent={arrowUpCustomEventHandlerACB}
            arrowDownCustomEvent={arrowDownCustomEventHandlerACB}
            arrowLeftCustomEvent={arrowLeftCustomEventHandlerACB}
            arrowRightCustomEvent={arrowRightCustomEventHandlerACB}
            playingGame={playingSnakeGameACB}
            gameStatus={props.model.gameStatus}
            showScoreboard = { props.model.showScoreboard }
            showScoreboardClicked = { showScoreboardACB }
            hideScoreboard = { hideScoreboardACB }
            scoreboard = { props.model.snakeScoreboard }
            addScore = { addScoreACB }
            />

        </div>
    );
}