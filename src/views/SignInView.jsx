
function SignInView (props) {
  function goToHomePageACB() {window.location.hash = "#/home"; }
  function signInWithGoogleButtonPressedCB() {props.signInCustomEventCB();}
  function testCounterPlusCB() {
    console.log("Test Counter: "+props.testCounterPlusCustomEventCB)
    props.testCounterPlusCustomEventCB();
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={signInWithGoogleButtonPressedCB}>Sign In</button>
      <button onClick={goToHomePageACB}>Go to Home Page</button>
      <button onClick={testCounterPlusCB}>Test Counter +1</button>
      <p>Counter: {props.model.testCounter}</p>
    </div>
  )
}

export default SignInView;