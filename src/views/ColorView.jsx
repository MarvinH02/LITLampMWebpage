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
    return(
        <div class="colorView">
            <div class="colorPicker">
                <v-color-picker onUpdate:modelValue={colorChangedCB}></v-color-picker>
            </div>
            <div class="colorButton">
                <v-btn size="x-large" variant="tonal" onClick={updateColorCB}>Update color</v-btn>
            </div>
        </div>
    ); 

}
    


export {ColorView}