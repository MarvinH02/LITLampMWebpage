import { CustomView } from "../views/CustomView";
import axios from 'axios';

export default function CustomPresenter(props) {
    const customTimeCustomEventHandlerACB = () => {
        props.model.setPowerState(true);
        axios.get(`http://${props.model.activeDevice.ip}:3000/display-time`)
            .then(response => {
                console.log('Clock command executed successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to display time on the matrix:', error);
            });
    };

    function stopTimeCustomEventHandlerACB () {
        props.model.setPowerState(false);
        props.model.turnOffClock();
    };

    const displayWeatherCustomEventHandlerACB = () => {
        props.model.setPowerState(true);
        axios.get(`http://${props.model.activeDevice.ip}:3000/display-weather`)
            .then(response => {
                console.log('Clock display stopped successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to stop time display:', error);
            });
    };
    function stopWeatherCustomEventHanderACB (){
        props.model.setPowerState(false);
        props.model.turnOffWeather();
    };
    function displayTemperatureCustomEventHandlerACB() {
        props.model.setPowerState(true);
        axios.get(`http://${props.model.activeDevice.ip}:3000/measure-room-temperature`)
            .then(response => {
                console.log('Clock display stopped successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to stop time display:', error);
            });
        setTimeout(() => {
            axios.get(`http://${props.model.activeDevice.ip}:3000/display-room-temperature`)
                .then(response => {
                    console.log('Started measuring temperature:', response.data);
                })
                .catch(error => {
                    console.error('Failed to start measuring temperature:', error);
                });
        }, 2000)
        
    };


    function stopTempeatureCustomEventHandlerACB () {
        props.model.setPowerState(false);
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
            />
        </div>
    );
}
