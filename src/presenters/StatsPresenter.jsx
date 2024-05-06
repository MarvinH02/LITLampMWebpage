import {StatsView} from '../views/StatsView.jsx';

export default function StatsPresenter(props) {

  function resetStatsACB(){
    props.model.resetStats();
  }

  return (
    <div>
      <StatsView 
      onOffStat = { props.model.onOffStat }
      totalTimeOn = { props.model.totalTimeOn }
      brightnessArray4Stats = { props.model.brightnessArray4Stats }
      ticTacToeGamesPlayed = { props.model.ticTacToeGamesPlayed }
      snakeGamesPlayed = { props.model.snakeGamesPlayed }
      memoryGamesPlayed = { props.model.memoryGamesPlayed }
      favouriteGame = { props.model.favouriteGame }
      resetStats = { resetStatsACB }
      />
    </div>
  );

  
}