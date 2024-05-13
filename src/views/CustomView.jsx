import '../style.css';

function CustomView(props) {
    function clickedDisplayDateAndTimeCB() {
        props.customTimeCustomEvent();
    }
    function clickedStopDateAndTimeCB() {
        props.stopTimeCustomEvent();
    }
    function clickedDisplayWeatherCB() {
        props.displayWeatherCustomEvent();
    }
    function clickedStopWeatherCB() {
        props.stopWeatherCustomEvent();
    }
    return (
        <div class="centerCustom">
            <v-btn variant="tonal" class="customButton" onClick={clickedDisplayDateAndTimeCB}
            width="250"
            height="100"
            >
                        <h2>Display Date & Time</h2>
            </v-btn>
            <v-btn variant="tonal" class="customButton" onClick={clickedStopDateAndTimeCB}
            width="250"
            height="100"
            >
                        <h2>Close Date & Time</h2>
            </v-btn>
            <v-btn variant="tonal" class="customButton" onClick={clickedDisplayWeatherCB}
            width="250"
            height="100"
            >
                        <h2>Display Weather</h2>
            </v-btn>
            <v-btn variant="tonal" class="customButton" onClick={clickedStopWeatherCB}
            width="250"
            height="100"
            >
                        <h2>Close Weather</h2>
            </v-btn>
        </div>
    );
}

export { CustomView };
