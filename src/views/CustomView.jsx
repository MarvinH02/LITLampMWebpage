import '../style.css';
function CustomView(props) {
    function clickedDisplayTimeCB() {
        props.customTimeCustomEvent();
    }
    function clickedDisplayDateCB() {
        props.customDateCustomEvent();
    }
    return (
        <div class="centerCustom">
            <v-btn variant="tonal" class="customButton" onClick={clickedDisplayTimeCB}
            width="200"
            height="100"
            >
                        <h2>Display Time</h2>
            </v-btn>
            <v-btn variant="tonal" class="customButton" onClick={clickedDisplayDateCB}
            width="200"
            height="100"
            >
                        <h2>Display Date</h2>
            </v-btn>
        </div>
    );
}

export { CustomView };