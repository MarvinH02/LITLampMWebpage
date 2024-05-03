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

    function playingGameACB(){
        props.model.setGameStatus()
    }

    return (
        <div>
            <SnakeView
            arrowUpCustomEvent={arrowUpCustomEventHandlerACB}
            arrowDownCustomEvent={arrowDownCustomEventHandlerACB}
            arrowLeftCustomEvent={arrowLeftCustomEventHandlerACB}
            arrowRightCustomEvent={arrowRightCustomEventHandlerACB}
            playingGame={playingGameACB}
            gameStatus={props.model.gameStatus}
            />

        </div>
    );
}