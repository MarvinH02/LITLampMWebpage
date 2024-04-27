import {HomeView} from '../views/HomeView.jsx';

export default function HomePresenter(props) {


  return (
    <div>
      <HomeView 
      user={props.model.user}
      />
    </div>
  );

  
}