
function SignInView (props) {
  function goToHomePageACB() {window.location.hash = "#/home"; }
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
        <h1>Account</h1>
        <img src={props.user.photoURL} alt="User Photo"/>
        <p>{props.user.displayName}</p>
        <p>{props.user.email}</p>
        <button onClick={signInWithGoogleButtonPressedCB}>{props.user ? <p>Sign Out</p> : <p>Sign In</p>}</button>
        <button onClick={goToHomePageACB}>Go to Home Page</button>
        <button onClick={testCounterPlusCB}>Test Counter +1</button>
        <p>Counter: {props.testCounter}</p>
      </div>
    )
  }
  else{
    console.log("User not signed in");
    return (
      <div>
        <h1>Sign In</h1>
        <button onClick={signInWithGoogleButtonPressedCB}>{props.user ? <p>Sign Out</p> : <p>Sign In</p>}</button>
        <button onClick={goToHomePageACB}>Go to Home Page</button>
        <button onClick={testCounterPlusCB}>Test Counter +1</button>
        <p>Counter: {props.testCounter}</p>
      </div>
    )
  }

}

export {SignInView}