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

    const stopTimeCustomEventHandlerACB = () => {
        axios.get(`http://${props.model.activeDevice.ip}:3000/stop-time`)
            .then(response => {
                console.log('Clock display stopped successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to stop time display:', error);
            });
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
    const stopWeatherCustomEventHanderACB = () => {
        axios.get(`http://${props.model.activeDevice.ip}:3000/stop-weather`)
            .then(response => {
                console.log('Clock display stopped successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to stop time display:', error);
            });
    };
    const displayTemperatureCustomEventHandlerACB = () => {
        axios.get(`http://${props.model.activeDevice.ip}:3000/display-temperature`)
            .then(response => {
                console.log('Clock display stopped successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to stop time display:', error);
            });
    };
    const stopTempeatureCustomEventHandlerACB = () => {
        axios.get(`http://${props.model.activeDevice.ip}:3000/stop-temperature`)
            .then(response => {
                console.log('Clock display stopped successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to stop time display:', error);
            });
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
