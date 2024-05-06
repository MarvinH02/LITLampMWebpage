import axios from 'axios';
import { PowerOnView } from '../views/PowerOnView.jsx';

export default function PowerOnPresenter(props) {
    function togglePowerCustomEventHandlerACB() {
        //{console.log(props.model.activeDevice.ip)}
        props.model.calculateTime();    //for stat tracking time on, needs to use current state of lamp before click
        props.model.togglePower();
        props.model.logOnOffStat();
        const apiUrl = props.model.poweredOn ? 
            `http://${props.model.activeDevice.ip}:3000/start-demo?brightness=${props.model.brightness}` : 
            `http://${props.model.activeDevice.ip}:3000/stop-demo`;

        axios.get(apiUrl)
            .then(response => {
                console.log('Server response:', response.data);
            })
            .catch(error => {
                console.error('Error calling the server:', error);
            });
    }

    function brightnessInputCustomEventHandlerACB(number) {
        props.model.setBrightness(number);
        if (props.model.poweredOn) { // Update brightness only if the matrix is powered on
            const apiUrl = `http://172.20.10.8:3000/start-demo?brightness=${number}`;
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
