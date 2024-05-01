import { DevicesView } from "../views/DevicesView";

export default function DevicesPresenter (props) {
    function addingDeviceCustomEventHandlerACB(){
        props.model.setAddingDevice();
    }
    function addDeviceCustomEventHandlerACB(device){
        props.model.addDevice(device);
    }
    function selectDeviceCustomEventHandlerACB(device){
        props.model.setCurrentDevice(device);
    }
    return (
        <div>
            <DevicesView
            addingDevice={props.model.addingDevice}
            devices={props.model.devices}
            activeDevice={props.model.activeDevice}
            addingDeviceCustomEvent={addingDeviceCustomEventHandlerACB}
            addDeviceCustomEvent={addDeviceCustomEventHandlerACB}
            selectDeviceCustomEvent={selectDeviceCustomEventHandlerACB}
            />

        </div>
    );
}