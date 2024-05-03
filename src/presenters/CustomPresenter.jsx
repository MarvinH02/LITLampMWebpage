import { CustomView } from "../views/CustomView";
import axios from 'axios'


export default function CustomPresenter(props) {
    function customCurrentTimeHandlerACB() {
        const currentTime = new Date().toLocaleTimeString(); //spara tiden
        console.log('Current Time:', currentTime); //console logga tiden.
    }

    return (
        <div>
            <CustomView
                customTimeCustomEvent={customCurrentTimeHandlerACB}
            />
        </div>
    );
}