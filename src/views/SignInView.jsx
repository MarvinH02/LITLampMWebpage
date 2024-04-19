
function SignInView (props) {
  function goToHomePageACB() {window.location.hash = "#/home"; }
  function signInWithGoogleButtonPressedCB() {
  
  props.signInOrOutCustomEventCB();
  
  }
  function testCounterPlusCB() {
    props.testCounterPlusCustomEventCB();
  }

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

export {SignInView}