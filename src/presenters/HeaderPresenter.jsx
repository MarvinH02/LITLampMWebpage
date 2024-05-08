import {HeaderView} from '../views/HeaderView.jsx';

export default function HeaderPresenter(props) {

  function updateLocationACB(page){
    props.model.setCurrentPage(page)
  }

  function clickedHeaderACB() {
    props.model.setHideScoreboard();
    props.model.setHideCreatingSchedule();
    props.model.resetTime();
  }
  
    return (
      <div>
        <HeaderView 
          user={props.model.user}
          activeDevice={props.model.activeDevice}
          updateLocation={updateLocationACB}
          currentLocation={props.model.currentPage}
          playingGame={props.model.gameStatus}
          headerClicked = { clickedHeaderACB }
          />
      </div>
    );
  }