
function HomeView (props) {
    function goToSignInPageACB() {window.location.hash = "#/"; }

    function changeBurgerStateHandler(){
      props.hideOrShowBurger();
    }
    
    return (
      <div>
        <button onClick={changeBurgerStateHandler}>
          <span class="material-symbols-outlined">
          menu
          </span>
        </button>
        <h1>Home page</h1>
        <v-btn onClick={goToSignInPageACB}>
          Go to Sign In Page
        </v-btn>
        
      </div>
    )
  }
  
  export {HomeView}