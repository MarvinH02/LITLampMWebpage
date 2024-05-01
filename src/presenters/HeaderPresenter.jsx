import {HeaderView} from '../views/HeaderView.jsx';

export default function HeaderPresenter(props) {
  function updateLocationACB(page){
    props.model.setCurrentPage(page)
  }
  
    return (
      <div>
        <HeaderView 
          user={props.model.user}
          activeDevice={props.model.activeDevice}
          updateLocation={updateLocationACB}
          currentLocation={props.model.currentPage}
          />
      </div>
    );
  }