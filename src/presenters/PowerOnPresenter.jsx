import {PowerOnView} from '../views/PowerOnView.jsx';

export default function PowerOnPresenter(props) {
    function togglePowerCustomEventHandlerACB(){
      props.model.togglePower();
    }
    function brightnessInputCustomEventHandlerACB(number){
        props.model.setBrightness(number);
    }
    return (
      <div>
        <PowerOnView 
          user={props.model.user}
          power={props.model.poweredOn}
          togglePowerCustomEvent={togglePowerCustomEventHandlerACB}
          brightnessInputCustomEventCB={brightnessInputCustomEventHandlerACB}
          brightness={props.model.brightness}/>
      </div>
    );
  }