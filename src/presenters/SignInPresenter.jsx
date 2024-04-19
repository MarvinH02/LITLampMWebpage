import {SignInView} from '../SignInView.jsx';
import { auth, provider, signOut, signInWithPopup } from "../firebaseModel.js";
export default function SignInPresenter(props) {

  function signInCustomEventHandlerACB(){
    console.log("Sign In Custom Event Handler");
    if (!auth.currentUser){
      signInWithPopup(auth, provider);
    }
  }
  function testCounterPlusCustomEventHandlerACB(){
    props.model.testCounterPlus();
  }
  return (
    <div>
      <SignInView signInCustomEventCB={signInCustomEventHandlerACB} testCounterPlusCustomEventCB={testCounterPlusCustomEventHandlerACB}/>
    </div>
  );
}