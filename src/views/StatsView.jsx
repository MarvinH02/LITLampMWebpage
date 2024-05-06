import '../style.css';

function StatsView (props) {

  function resetStatsHandler(){
    props.resetStats()
  }

      return (
        <div style='font-size : x-large; '>
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
            AVERAGE TIME ON PER USE: {props.totalTimeOn/(props.onOffStat/2)} seconds
          </div>
          <div style='color: red;' className='center'>
            Times played Tic Tac Toe: {props.ticTacToeGamesPlayed} times
          </div>
          <div style='color: green;' className='center'>
            Times played Snake: {props.snakeGamesPlayed} times
          </div>
          <div style='color: #999792;' className='center'>
            Times played Memory: {props.memoryGamesPlayed} times
          </div>
          <div className='center'>
            Favourite game: {props.favouriteGame}
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