import { CustomView } from "../views/CustomView";
import axios from 'axios';

export default function CustomPresenter(props) {

    function handleCityNameSubmit(cityName) {
        axios.post(`http://${props.model.activeDevice.ip}:3000/run-python`, { cityName })
            .then(response => {
                console.log('City name submitted successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to submit city name:', error);
            });
    }

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
                console.log('Weather display command executed successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to display weather on the matrix:', error);
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
                console.log('Started measuring temperature:', response.data);
            })
            .catch(error => {
                console.error('Failed to start measuring temperature:', error);
            });
        setTimeout(() => {
            axios.get(`http://${props.model.activeDevice.ip}:3000/display-room-temperature`)
            .then(response => {
                console.log('Temperature display command executed successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to display room temperature on the matrix:', error);
            });
        }, 3000)
    };

    function stopTempeatureCustomEventHandlerACB () {
        props.model.setPowerState(false);
        props.model.turnOffTemperature();
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

    return (
        <div>
            <CustomView
                customTimeCustomEvent={customTimeCustomEventHandlerACB}
                stopTimeCustomEvent={stopTimeCustomEventHandlerACB}
                displayWeatherCustomEvent={displayWeatherCustomEventHandlerACB}
                stopWeatherCustomEvent={stopWeatherCustomEventHanderACB}
                displayTemperatureCustomEvent={displayTemperatureCustomEventHandlerACB}
                stopTemperatureCustomEvent={stopTempeatureCustomEventHandlerACB}
                startMeasuringTemperature={startMeasuringTemperatureACB}
                onCityNameSubmit={handleCityNameSubmit}
            />
        </div>
    );
}