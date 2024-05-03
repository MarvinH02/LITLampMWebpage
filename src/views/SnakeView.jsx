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

    function startSnakeHandler(){
        props.playingGame()
    }

    if(!props.gameStatus){
        return(
            <div className='snakeMenu'>
                <v-btn onClick={startSnakeHandler} style="margin-top:30%; width:25%; height:10%; ">
                    START
                </v-btn>
                <v-btn style="margin-top:30%; width:25%; height:10%;">
                    Scoreboard
                </v-btn>
            </div>
        )
    }
    else{
        return(     //controls
            <div class="snakeView">
                <v-btn onClick={startSnakeHandler} size='x-large'>
                STOP
                </v-btn>
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
                        style="margin-top:50%;"
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
                            style="margin-top:50%;"
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
                            style="margin-top:50%;"
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
                            style="margin-top:50%;"
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
}
    


export {SnakeView}