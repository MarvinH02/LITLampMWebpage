
function PowerOnView (props) {
    const buttonColor = {
        backgroundColor: props.power ? 'green' : 'red'
    };
    function clickedPowerButton(){
        props.togglePowerCustomEvent();
    }
    function brightnessInputCB (event){
        props.brightnessInputCustomEventCB(event.target.value);
    }
    return (
        <div class="powerView">
            <button class="powerButton" style={buttonColor} onClick={clickedPowerButton}>
                <span class="material-symbols-outlined">
                power_settings_new
                </span>
            </button>
            <div class="brightnessSliderBox">
                <label for="brightness">Brightness: {props.brightness}%</label>
                <input class="brightnessSlider" type="range" min="5" max="100" step="5" onChange={brightnessInputCB} value={props.brightness}></input>
            </div>
        </div>
    )
  }
  
  export {PowerOnView}