import '../style.css';

function HomeView (props) {
    function goToSignInPageACB() {window.location.hash = "#/"; }

    function changeBurgerStateHandler(){
      props.hideOrShowBurger();
    }
    
    return (
      <div className='testing123'>
        <h1>Home page</h1>
        <v-btn onClick={goToSignInPageACB}>
          Sign In To Get Started!
        </v-btn>
        
      </div>
    )
  }
  
  export {HomeView}