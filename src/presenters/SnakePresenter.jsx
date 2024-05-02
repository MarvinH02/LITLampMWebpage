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
    return (
        <div>
            <SnakeView
            arrowUpCustomEvent={arrowUpCustomEventHandlerACB}
            arrowDownCustomEvent={arrowDownCustomEventHandlerACB}
            arrowLeftCustomEvent={arrowLeftCustomEventHandlerACB}
            arrowRightCustomEvent={arrowRightCustomEventHandlerACB}
            />

        </div>
    );
}