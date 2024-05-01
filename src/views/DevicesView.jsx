import '../style.css';
function DevicesView (props){
    const newDevice = {
        name: "",
        ip: "",
    };

    return(
        <div class="DevicesView">
            {showDevicesList()}
            {addDeviceBox()}
        </div>
    ); 

    function addingDeviceCB(){
        //console.log("Enter details to add device");
        props.addingDeviceCustomEvent();
    }
    function addDeviceCB(){
        //console.log("Adding Device");
        //console.log(newDevice);
        props.addDeviceCustomEvent(newDevice);
        newDevice.name = "";
        newDevice.ip = "";
        props.addingDeviceCustomEvent();
    }
    function updateNewDeviceNameCB(name){
        newDevice.name = name;
        //console.log("Updating device name: " + name);
    }
    function updateNewDeviceIPCB(ip){
        newDevice.ip = ip;
        //console.log("Updating device ip: " + ip);
    }
    function addDeviceBox(){
        if (props.addingDevice){
            return(
                <div class="addDeviceBox">
                    <v-text-field onUpdate:modelValue={updateNewDeviceNameCB} placeholder="Lamp x" label="Device Name"></v-text-field>
                    <v-text-field onUpdate:modelValue={updateNewDeviceIPCB} placeholder="192.168.0.x" label="Device LAN IP"></v-text-field>
                    <div>
                        <v-btn onClick={addDeviceCB}>Add Device</v-btn>
                        <v-btn onClick={addingDeviceCB}>Cancel</v-btn>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div>
                    <v-btn height="100" min-width="200" min-height="110" onClick={addingDeviceCB}>
                        Add Device
                    </v-btn>   
                </div>
            );
        }
    }
    function showDevicesList(){
        if (props.devices.length > 0){
            return(
                <div>
                    {props.devices.map(showDevicesCB)}
                </div>
            );
        }
    }
    function selectDeviceCB(device){
        //console.log(device);
        props.selectDeviceCustomEvent(device);
    }
    function showDevicesCB(device){
        return(
            <div class="device">
                <v-card
                    class="mx-auto"
                    color="surface-variant"
                    min-height="110"
                    max-width="300"
                    min-width="200"
                    outlined
                    subtitle= {device.ip}
                    title= {device.name}
                >
                {showSelectDeviceButton(device)} 
                </v-card>
            </div>

        )
    }
    function showSelectDeviceButton(device){
        if (props.activeDevice && props.activeDevice.ip === device.ip){
            return(
                <div>
                    <v-btn variant="tonal" disabled>Already selected</v-btn>
                </div>
            );
        }
        else{
            return(
                <div>
                    <v-btn variant="tonal" onClick={() => selectDeviceCB(device)}>Select Device</v-btn>
                </div>
            );
        }
    }


}
    


export {DevicesView}