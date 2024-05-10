import { CustomView } from "../views/CustomView";
import axios from 'axios'


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
        axios.get(`http://${props.model.activeDevice.ip}:3000/display-time`)
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
            />
        </div>
    );
}