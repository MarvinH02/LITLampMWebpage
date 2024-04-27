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
      <div>
        <div className='center'>
          <img src={props.user.photoURL} alt="User Photo"/>
        </div>
        <div className='center'>
          <p>{props.user.displayName}</p>
        </div>
        <div className='center'>
          <p>{props.user.email}</p>
        </div>
        <div className='center'>
          <v-btn onClick={signInWithGoogleButtonPressedCB}>
            {props.user ? <p>Sign Out</p> : <p>Sign In</p>}
          </v-btn>
        </div>
      </div>
    )
  }
  else{
    console.log("User not signed in");
    return (
      <div>
        <div className='center'>
          <h1>Sign In</h1>
        </div>
        <div className='center'>
          <v-btn onClick={signInWithGoogleButtonPressedCB}>
            {props.user ? <p>Sign Out</p> : <p>Sign In</p>}
          </v-btn>
        </div>
      </div>
      
    )
  }

}

export {SignInView}