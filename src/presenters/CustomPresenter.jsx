import { CustomView } from "../views/CustomView";
import axios from 'axios';

export default function CustomPresenter(props) {
    const customTimeCustomEventHandlerACB = () => {
        axios.get(`http://${props.model.activeDevice.ip}:3000/display-time`)
            .then(response => {
                console.log('Clock command executed successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to display time on the matrix:', error);
            });
    };

    function stopTimeCustomEventHandlerACB () {
        props.model.turnOffClock();
    };

    const displayWeatherCustomEventHandlerACB = () => {
        axios.get(`http://${props.model.activeDevice.ip}:3000/display-weather`)
            .then(response => {
                console.log('Clock display stopped successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to stop time display:', error);
            });
    };
    function stopWeatherCustomEventHanderACB (){
        props.model.turnOffWeather();
    };
    const displayTemperatureCustomEventHandlerACB = () => {
        axios.get(`http://${props.model.activeDevice.ip}:3000/display-room-temperature`)
            .then(response => {
                console.log('Clock display stopped successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to stop time display:', error);
            });
    };

    const startMeasuringTemperatureACB = () => {
        axios.get(`http://${props.model.activeDevice.ip}:3000/measure-room-temperature`)
            .then(response => {
                console.log('Started measuring temperature:', response.data);
            })
            .catch(error => {
                console.error('Failed to start measuring temperature:', error);
            });
    };



    function stopTempeatureCustomEventHandlerACB () {
        props.model.turnOffTemperature();
    };
    return (
        <div>
            <CustomView
                customTimeCustomEvent={customTimeCustomEventHandlerACB}
                stopTimeCustomEvent={stopTimeCustomEventHandlerACB}
                displayWeatherCustomEvent={displayWeatherCustomEventHandlerACB}
                stopWeatherCustomEvent={stopWeatherCustomEventHanderACB}
                displayTemperatureCustomEvent={displayTemperatureCustomEventHandlerACB}
                stopTemperatureCustomEvent={stopTempeatureCustomEventHandlerACB}
                startMeasuringTemperature = { startMeasuringTemperatureACB }
            />
        </div>
    );
}
