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
    function clickedDisplayTemperatureCB(){
        props.displayTemperatureCustomEvent();
    }
    function clickedStopTemperatureCB(){
        props.stopTemperatureCustomEvent();
    }
    function clickedMeasureTemperatureHandler(){
        props.startMeasuringTemperature();
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
            <v-btn variant="tonal" class="customButton" onClick={clickedMeasureTemperatureHandler}
            width="250"
            height="100"
            >
                        <h2>Measure Room temp</h2>
            </v-btn>
            <v-btn variant="tonal" class="customButton" onClick={clickedDisplayTemperatureCB}
            width="250"
            height="100"
            >
                        <h2>Display Room temp</h2>
            </v-btn>
            <v-btn variant="tonal" class="customButton" onClick={clickedStopTemperatureCB}
            width="250"
            height="100"
            >
                        <h2>Close Room temp</h2>
            </v-btn>
        </div>
    );
}

export { CustomView };
