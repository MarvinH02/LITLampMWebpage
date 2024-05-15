import { ColorView } from "../views/ColorView";
import axios from 'axios';

export default function ColorPresenter (props) {
    function updateColorCustonEventHandlerACB(color){
        console.log("color before: "+props.model.color);
        props.model.setColor(color);
        console.log("color after: "+props.model.color);
        props.model.setPowerState(true);
        const apiUrl = 
            `http://${props.model.activeDevice.ip}:3000/display-color?color=${props.model.color.replace("#", "")}`;

        axios.get(apiUrl)
            .then(response => {
                console.log('Server response:', response.data);
            })
            .catch(error => {
                console.error('Error calling the server:', error);
            });
    }
    function stopColorCustomEventHandlerACB() {
        props.model.turnOffColor();
    };
    return (
        <div>
            <ColorView
            currentColor={props.model.color}
            updateColorCustonEventCB={updateColorCustonEventHandlerACB}
            stopColorCustomEventCB={stopColorCustomEventHandlerACB}
            />

        </div>
    );
}