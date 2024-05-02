import '../style.css';
function SnakeView (props){
    function clickedUpButton(){
        props.arrowUpCustomEvent();
    }
    function clickedDownButton(){
        props.arrowDownCustomEvent();
    }
    function clickedLeftButton(){
        props.arrowLeftCustomEvent();
    }
    function clickedRightButton(){
        props.arrowRightCustomEvent();
    }
    return(
        <div class="snakeView">
            <div class="snakeButtons">
                <div class="snakeButton">
                <v-btn
                        class="mx-auto"
                        color="surface-variant"
                        outlined
                        subtitle= ""
                        title=""
                        width="100%"
                        height='15vh'
                        onClick={clickedUpButton}
                    >
                       <span class="material-symbols-outlined">
                        north
                        </span> 
                        
                </v-btn>
                </div>
            </div>
            <div class="snakeButtonsMiddle">
                <div class="snakeButton">
                    <v-btn
                            class="mx-auto"
                            color="surface-variant"
                            outlined
                            subtitle= ""
                            title=""
                            width="100%"
                            height='15vh'
                            onClick={clickedLeftButton}
                        >
                        <span class="material-symbols-outlined">
                            west
                            </span> 
                            
                    </v-btn>
                </div>
                <div class="snakeButton">
                    <v-btn
                            class="mx-auto"
                            color="surface-variant"
                            outlined
                            subtitle= ""
                            title=""
                            width="100%"
                            height='15vh'
                            onClick={clickedRightButton}
                        >
                        <span class="material-symbols-outlined">
                            east
                            </span> 
                            
                    </v-btn>
                </div>
            </div>
            <div class="snakeButtons">
                <div class="snakeButton">
                    <v-btn
                            class="mx-auto"
                            color="surface-variant"
                            outlined
                            subtitle= ""
                            title=""
                            width="100%"
                            height='15vh'
                            onClick={clickedDownButton}
                        >
                        <span class="material-symbols-outlined">
                            south
                            </span> 
                            
                    </v-btn>
                </div>
            </div>
        </div>
    ); 

}
    


export {SnakeView}