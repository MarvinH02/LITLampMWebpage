import { CustomView } from "../views/CustomView";
import axios from 'axios'


export default function CustomPresenter(props) {
    function customCurrentTimeHandlerACB() {
        const currentTime = new Date().toLocaleTimeString(); //spara tiden
        console.log('Current Time:', currentTime); //console logga tiden.
        const apiUrl =
            `http://${props.model.activeDevice.ip}:3000/ //här ska det vara en endpoint som tar emot datumet`;

        axios.get(apiUrl)
            .then(response => {
                console.log('Server response:', response.data);
            })
            .catch(error => {
                console.error('Error calling the server:', error);
            });
    }
    function customCurrentDateHandlerACB() {
        const currentDate = new Date().toLocaleDateString(); //spara datum
        console.log('Current Date:', currentDate); //console logga datumet.
        const apiUrl =
            `http://${props.model.activeDevice.ip}:3000/ //här ska det vara en endpoint som tar emot datumet`;

        axios.get(apiUrl)
            .then(response => {
                console.log('Server response:', response.data);
            })
            .catch(error => {
                console.error('Error calling the server:', error);
            });
    }

    return (
        <div>
            <CustomView
                customTimeCustomEvent={customCurrentTimeHandlerACB}
                customDateCustomEvent={customCurrentDateHandlerACB}
            />
        </div>
    );
}