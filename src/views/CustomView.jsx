import '../style.css';

function CustomView(props) {

    function handleCityNameSubmit() {
        const cityNameInput = document.getElementById('cityNameInput');
        const cityName = cityNameInput.value;
        props.onCityNameSubmit(cityName);
    }

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

    return (
        <div class="centerCustom">
            <input
                type="text"
                id="cityNameInput"
                placeholder="Enter city name"
            />
            <button onClick={handleCityNameSubmit}>Submit City Name for weather information</button>
            <v-btn variant="tonal" class="customButton" onClick={clickedDisplayWeatherCB}
                width="250"
                height="100"
            >
                <h2>Display Weather</h2>
            </v-btn>
            <v-btn variant="tonal" class="customButton" onClick={clickedDisplayDateAndTimeCB}
                width="250"
                height="100"
            >
                <h2>Display Date & Time</h2>
            </v-btn>
            <v-btn variant="tonal" class="customButton" onClick={clickedDisplayTemperatureCB}
                width="250"
                height="100"
            >
                <h2>Display Room temp</h2>
            </v-btn>
        </div>
    );
}

export { CustomView };