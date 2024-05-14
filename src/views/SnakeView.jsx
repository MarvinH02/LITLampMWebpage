import '../style.css';
function SnakeView (props){

    var position = 0;

    function increasePosition(){
        position++
        if(position === 11)
            position = 0;
    }

    function keyPressedEventHandler(event){
        switch(event.keyCode){
            case 87: 
                props.arrowUpCustomEvent();
                break;
            case 83:
                props.arrowDownCustomEvent();
                break;
            case 65:
                props.arrowLeftCustomEvent();
                break;
            case 68:
                props.arrowRightCustomEvent();
                break;
            default:
                console.log("key pressed not valid")
                break;
        }
        console.log(event.keyCode)
    }

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

    function showScoreBoardHandler(){
        props.showScoreboardClicked();
    }

    function clickedHideScoreboardHandler() {
        props.hideScoreboard();
    }

    function showScoreboardItemsCB(score) {
        increasePosition();
        return(
            <div className='center'>
                {position + '. '+ score.name + '   -   ' + score.score + ' pts'}
            </div>
        )
        
    }

    if(props.showScoreboard){
        return(
            <div>
                <div className='center'><h3>SNAKE SCOREBOARD</h3></div>
                
                <v-btn style="margin-left: 25%;" onClick= { clickedHideScoreboardHandler } > GO BACK </v-btn>
                <div>
                    {props.scoreboard.map(showScoreboardItemsCB)}
                </div>
            </div>
        )
    }

    if(!props.gameStatus){
        return(
            <div className='snakeMenu'>
                <v-btn color='#678A35'onClick={startSnakeHandler} style="margin-top:30%; width:25%; height:10%; ">
                    START
                </v-btn>
                <v-btn onClick= {showScoreBoardHandler} color='#678A35'style="margin-top:30%; width:25%; height:10%;">
                    Scoreboard
                </v-btn>
            </div>
        )
    }
    else{
        return(     //controls
            <div onkeydown = { keyPressedEventHandler } class="snakeView">
                <v-btn color='#678A35'onClick={startSnakeHandler} size='x-large'>
                STOP
                </v-btn>
            <div class="snakeButtons">
                <div class="snakeButton">
                <v-btn
                        class="mx-auto"
                        color="#35471C"
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
                            color="#35471C"
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
                            color="#35471C"
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
                            color="#35471C"
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