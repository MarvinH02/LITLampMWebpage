import '../style.css';

function HomeView (props) {

    function goToSignInPageACB() {window.location.hash = "#/"; }
    
    if(props.user){   //2 views for home, this one for when signed in, shows same stuff as when not signed in but also shows global leaderboard of scores and your own scores in games
      return (
        <div>
          <div className='center'>
            <h1>Home page</h1>
          </div>
        </div>
      )
    }
    else{   //this one for when not signed in, shows info about product and features
      return (
        <div>
          <div className='center'>
            <h1>Home page</h1>
          </div>
          <div className='center'>
            <v-btn onClick={goToSignInPageACB}>
              Sign In To Get Started!
            </v-btn>
          </div>
        </div>
      )
    }
    
  }
  
  export {HomeView}