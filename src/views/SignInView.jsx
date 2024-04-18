
function SignInView (props) {
  function goToHomePageACB() {window.location.hash = "#/home"; }
  return (
    <div>
      <h1>Sign In</h1>
      <button >Sign In</button>
      <button onClick={goToHomePageACB}>Go to Home Page</button>
    </div>
  )
}

export default SignInView;