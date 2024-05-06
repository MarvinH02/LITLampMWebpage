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

    function playingSnakeGameACB(){
        props.model.setGameStatus();
        props.model.logGamePlayed('snake');
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
            />

        </div>
    );
}