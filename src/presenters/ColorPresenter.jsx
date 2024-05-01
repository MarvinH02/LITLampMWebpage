import { ColorView } from "../views/ColorView";

export default function ColorPresenter (props) {
    function updateColorCustonEventHandlerACB(color){
        props.model.setColor(color);
    }
    return (
        <div>
            <ColorView
            currentColor={props.model.color}
            updateColorCustonEventCB={updateColorCustonEventHandlerACB}
            />

        </div>
    );
}