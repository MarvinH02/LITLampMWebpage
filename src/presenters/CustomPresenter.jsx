import { CustomView } from "../views/CustomView";
import axios from 'axios';

export default function CustomPresenter(props) {
    const customCurrentTimeHandlerACB = () => {
        axios.get('http://172.20.10.11:3000/display-time')
            .then(response => {
                console.log('Clock command executed successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to display time on the matrix:', error);
            });
    };

    const stopTimeDisplay = () => {
        axios.get('http://172.20.10.11:3000/stop-time')
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
                customTimeCustomEvent={customCurrentTimeHandlerACB}
                stopTimeEvent={stopTimeDisplay}
            />
        </div>
    );
}
