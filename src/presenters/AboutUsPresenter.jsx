import {AboutUsView} from '../views/AboutUsView.jsx';

export default function AboutUsPresenter(props) {

  function changeBurgerState(){
    props.model.setShowHamburger();
  }

  return (
    <div>
      <AboutUsView 
      />
    </div>
  );

  
}