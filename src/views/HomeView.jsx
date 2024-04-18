
function HomeView (props) {
    function goToSignInPageACB() {window.location.hash = "#/"; }
    return (
      <div>
        <h1>Home page</h1>
        <button onClick={goToSignInPageACB}>Go to Sign In Page</button>
      </div>
    )
  }
  
  export default HomeView;