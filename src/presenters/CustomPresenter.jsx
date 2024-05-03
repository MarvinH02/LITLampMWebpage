import { CustomView } from "../views/CustomView";

export default function CustomPresenter(props){
    function customCurrentTimeHandlerACB(){
        props.model.displayTimeNow();
    }


    return (
        <div>
            <CustomView

            customTime={props.model.customTime}
            customTimeCustomEvent = {customCurrentTimeHandlerACB}
            
            />

        </div>
    );
}