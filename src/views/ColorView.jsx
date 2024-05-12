import '../style.css';
function ColorView (props){
    var color = '#000000';
    function colorChangedCB(newColor){
        color = newColor;
    }
    function updateColorCB(){
        //console.log("Color Updated:");
        //console.log(color);
        props.updateColorCustonEventCB(color);
    }
    function stopColorCB(){
        props.stopColorCustomEventCB();
    }
    return(
        <div class="colorView">
            <h2>Current Color: {props.currentColor}</h2>
            <v-avatar color={props.currentColor} size="80"></v-avatar>
            <div class="colorPicker">
                <v-color-picker onUpdate:modelValue={colorChangedCB}></v-color-picker>
            </div>
            <div class="colorButton">
                <v-btn size="x-large" variant="tonal" onClick={updateColorCB}>Update color</v-btn>
                <v-btn size="x-large" variant="tonal" onClick={stopColorCB}>Stop displaying color</v-btn>

            </div>
        </div>
    ); 

}
    


export {ColorView}