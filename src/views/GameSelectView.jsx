import '../style.css';

function GameSelectView (props) {
    function goToSnakeGameHandler(){
        {window.location.hash = "#/games/snake" }
    }
    function goToMemoryGameHandler(){
        {window.location.hash = "#/games/memory" }
    }

    return (
        <div className='border'>
            <div className='gamebox'>
                <div>
                    <v-card 
                    text="" 
                    variant="elevated"
                    hover
                    link
                    width= '50px'
                    min-width='250px'
                    height='50vh'
                    image='src/images/tic.png'
                    >
                    <v-card-text style="margin-top:170%; text-align: center; font-size:x-large; font-family:fantasy">
                        <h3>Tic-Tac-Toe</h3>
                    </v-card-text>
                    </v-card>
                    
                </div>
                <div>
                    <v-card 
                    text="" 
                    variant="elevated"
                    hover
                    link
                    width= '50px'
                    min-width='250px'
                    height='50vh'
                    image='src/images/snake.png'
                    onClick={goToSnakeGameHandler}
                    >
                    <v-card-text style="margin-top:170%; text-align: center; font-size:x-large; font-family:fantasy">
                        <h3>Snake</h3>
                    </v-card-text>
                    </v-card>
                    
                </div>
                <div>
                    <v-card 
                    text="" 
                    variant="elevated"
                    hover
                    link
                    width= '50px'
                    min-width='250px'
                    height='50vh'
                    image='src/images/brain.png'
                    onClick={goToMemoryGameHandler}
                    >
                    <v-card-text style="margin-top:170%; text-align: center; font-size:x-large; font-family:fantasy">
                        <h3>Memory</h3>
                    </v-card-text>
                    </v-card>
                    
                </div>
            </div>
        </div>
        
    )
    
  }
  
  export {GameSelectView}