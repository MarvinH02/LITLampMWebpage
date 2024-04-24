function PowerOnView (props) {
    const buttonColor = {
        backgroundColor: props.power ? 'green' : 'red'
    };
    function clickedPowerButton(){
        props.togglePowerCustomEvent();
    }
    return (
        <div class="powerView">
            <button class="powerButton" style={buttonColor} onClick={clickedPowerButton}>
                <span class="material-symbols-outlined">
                power_settings_new
                </span>
            </button>
        </div>
    )
  }
  
  export {PowerOnView}