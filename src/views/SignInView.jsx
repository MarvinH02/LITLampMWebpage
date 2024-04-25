import '../style.css';

function SignInView (props) {
  function signInWithGoogleButtonPressedCB() {
  
  props.signInOrOutCustomEventCB();
  
  }
  function testCounterPlusCB() {
    props.testCounterPlusCustomEventCB();
  }
  if (props.user) {
    console.log("User signed in");
    console.log(props.user)
    return (
      <div className='testing123'>
        <h1>Account</h1>
        <img src={props.user.photoURL} alt="User Photo"/>
        <p>{props.user.displayName}</p>
        <p>{props.user.email}</p>
        <v-btn onClick={signInWithGoogleButtonPressedCB}>
          {props.user ? <p>Sign Out</p> : <p>Sign In</p>}
        </v-btn>
      </div>
    )
  }
  else{
    console.log("User not signed in");
    return (
      <div className='testing123'>
        <h1>Sign In</h1>
        <v-btn onClick={signInWithGoogleButtonPressedCB}>
          {props.user ? <p>Sign Out</p> : <p>Sign In</p>}
        </v-btn>
      </div>
    )
  }

}

export {SignInView}