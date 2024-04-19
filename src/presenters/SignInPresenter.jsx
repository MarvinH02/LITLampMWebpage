import {SignInView} from '../views/SignInView.jsx';
import { auth, provider, signOut, signInWithPopup } from "../firebaseModel.js";
export default function SignInPresenter(props) {

  function signInOrOutCustomEventHandlerACB(){
    console.log("Sign In Custom Event Handler");
    if (!auth.currentUser){
      signInWithPopup(auth, provider);
    }
    else{
      signOut(auth);
    }
  }
  function testCounterPlusCustomEventHandlerACB(){
    props.model.testCounterPlus();
  }
  return (
    <div>
      {console.log("SignInPresenter")}
      <SignInView 
        user={props.model.user}
        signInOrOutCustomEventCB={signInOrOutCustomEventHandlerACB} 
        testCounterPlusCustomEventCB={testCounterPlusCustomEventHandlerACB} 
        testCounter={props.model.testCounter}/>
    </div>
  );
}