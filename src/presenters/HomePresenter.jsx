import {HomeView} from '../views/HomeView.jsx';

export default function HomePresenter(props) {

  function changeBurgerState(){
    props.model.setShowHamburger();
  }

  return (
    <div>
      <HomeView 
      hideOrShowBurger = {changeBurgerState}
      />
    </div>
  );

  
}