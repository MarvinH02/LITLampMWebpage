import { SnakeView } from "../views/SnakeView";

export default function SnakePresenter (props) {

    function arrowUpACB(){
        //console.log('triggered arrow up custom event')
        props.model.sendControlCommand('w');
    }
    function arrowDownACB(){
        //console.log('triggered arrow down custom event')
        props.model.sendControlCommand('s')
    }
    function arrowLeftACB(){
        //console.log('triggered arrow left custom event')
        props.model.sendControlCommand('a')
    }
    function arrowRightACB(){
        //console.log('triggered arrow right custom event')
        props.model.sendControlCommand('d')
    }

    function showScoreboardACB(){
        props.model.setShowScoreboard();
    }

    function playingSnakeGameACB() {
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
            arrowUpCustomEvent={arrowUpACB}
            arrowDownCustomEvent={arrowDownACB}
            arrowLeftCustomEvent={arrowLeftACB}
            arrowRightCustomEvent={arrowRightACB}
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