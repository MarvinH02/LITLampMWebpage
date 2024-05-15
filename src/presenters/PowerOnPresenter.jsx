import axios from 'axios';
import { PowerOnView } from '../views/PowerOnView.jsx';

export default function PowerOnPresenter(props) {
    function togglePowerCustomEventHandlerACB() {
        props.model.calculateTime();
        props.model.logOnOffStat();
        if (props.model.poweredOn){
            props.model.setPowerState(false);
            props.model.turnOffAll(); //pkill everything
        }
        else{
            props.model.setPowerState(true);
            const apiUrl = 
            `http://${props.model.activeDevice.ip}:3000/start-demo?brightness=${props.model.brightness}`;

            axios.get(apiUrl)
                .then(response => {
                    console.log('Server response:', response.data);
                })
                .catch(error => {
                    console.error('Error calling the server:', error);
                });
        }
    }

    function brightnessInputCustomEventHandlerACB(number) {
        props.model.setBrightness(number);
        if (props.model.poweredOn) { // Update brightness only if the matrix is powered on
            const apiUrl = `http://${props.model.activeDevice.ip}:3000/start-demo?brightness=${number}`;
            axios.get(apiUrl)
                .then(response => {
                    console.log('Server response:', response.data);
                })
                .catch(error => {
                    console.error('Error calling the server:', error);
                });
        }
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