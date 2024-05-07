import '../style.css';

function StatsView (props) {

  function resetStatsHandler(){
    props.resetStats()
  }

      return (
        <div style='font-size : x-large; font-weight:bold'>
          <div className='center'>
            <h1>Statistics</h1>
          </div>
          <div className='center'>
            TIMES TURNED ON/OFF: {props.onOffStat}
          </div>
          <div className='center'>
            TOTAL TIME ON: {props.totalTimeOn} seconds
          </div>
          <div className='center'>
            AVERAGE TIME ON PER USE: {Math.round(props.totalTimeOn/(props.onOffStat/2))} seconds
          </div>
          <div style='color: red;' className='center'>
            Times played Tic Tac Toe: {props.ticTacToeGamesPlayed} times
          </div>
          <div style='color: green;' className='center'>
            Times played Snake: {props.snakeGamesPlayed} times
          </div>
          <div style='color: #CFF0F5;' className='center'>
            Times played Memory: {props.memoryGamesPlayed} times
          </div>
          <div className='center'>
            <v-card 
              text="" 
              variant="elevated"
              width= '50px'
              min-width='250px'
              height='20vh'
              image={props.favouriteGame === 'None yet' ? '' : props.favouriteGameIcon}
              >
              <v-card-text style="margin-top:45%; text-align: center; font-size:x-large; font-family:fantasy">
                <h3>Favourite game: {props.favouriteGame}</h3>
              </v-card-text>
            </v-card>
          </div>
          <div className='center'>
            <v-btn size='x-large' onClick={resetStatsHandler}>
              RESET STATS
            </v-btn>
          </div>
        </div>
      )
}
  
  export { StatsView }