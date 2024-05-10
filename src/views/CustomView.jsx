import '../style.css';

function CustomView(props) {
    function clickedDisplayDateAndTimeCB() {
        props.customTimeCustomEvent();
    }
    function clickedStopDateAndTimeCB() {
        props.stopTimeCustomEvent();
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
        </div>
    );
}

export { CustomView };
