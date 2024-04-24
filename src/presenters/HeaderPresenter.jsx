import {HeaderView} from '../views/HeaderView.jsx';

export default function HeaderPresenter(props) {
    return (
      <div>
        <HeaderView 
          user={props.model.user}
          />
      </div>
    );
  }