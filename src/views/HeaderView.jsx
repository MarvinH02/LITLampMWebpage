import '../style.css';

function HeaderView (props) {
    function goToPowerPageHandler(){
        window.location.hash = "#/power"
        props.updateLocation(window.location.hash)
    }

    function ClickedColorPageHandler() {
        window.location.hash="#/color"
        props.updateLocation(window.location.hash)
    }

    function ClickedScheduleHandler() {
        window.location.hash="#/schedule"
        props.updateLocation(window.location.hash)
    }

    function ClickedGamesHandler() {
        window.location.hash="#/games"
        props.updateLocation(window.location.hash)
    }
    
    function ClickedCustomHandler() {
        window.location.hash="#/custom"
        props.updateLocation(window.location.hash)
    }

    function clickedHeaderHandler() {
        props.headerClicked();
    }

    if(props.playingGame){
        console.log("gaming mode active header hidden")
        return(
            <div>

            </div>
        )
    }
    else if(props.activeDevice && props.currentLocation == '#/power' || 
        props.activeDevice && props.currentLocation == '#/color' || 
        props.activeDevice && props.currentLocation == '#/schedule' || 
        props.activeDevice && props.currentLocation == '#/games' ||
        props.activeDevice && props.currentLocation == '#/custom' ||
        props.activeDevice && props.currentLocation == '#/games/snake' ||
        props.activeDevice && props.currentLocation == '#/games/memory'){
        return(
            <div onClick= { clickedHeaderHandler } class="header">
                <div class="buttonsInHeader">
                    <v-btn variant="tonal" class="iconButtons" onClick={goToPowerPageHandler}>
                        <span class="material-symbols-outlined">
                        power_settings_new
                        </span>
                        ON/OFF & Brightness
                    </v-btn>
                    <v-btn variant="tonal" class="iconButtons" onClick={ClickedColorPageHandler}>
                        <span class="material-symbols-outlined">
                        palette
                        </span>
                        Color
                    </v-btn>
                    <v-btn variant="tonal" class="iconButtons" onClick={ClickedScheduleHandler}>
                        <span class="material-symbols-outlined">
                        schedule
                        </span>
                        Schedule
                    </v-btn>
                    <v-btn variant="tonal" class="iconButtons" onClick={ClickedGamesHandler}>
                        <span class="material-symbols-outlined">
                        videogame_asset
                        </span>
                        Games
                    </v-btn>
                    <v-btn variant="tonal" class="iconButtons">
                        <span class="material-symbols-outlined">
                        info
                        </span>
                        Display
                    </v-btn>
                    <v-btn variant="tonal" class="iconButtons" onClick ={ClickedCustomHandler}>
                        <span class="material-symbols-outlined">
                        view_compact
                        </span>
                        Custom
                    </v-btn>
                    <v-btn variant="tonal" class="iconButtons">
                        <span class="material-symbols-outlined">
                        stroke_partial
                        </span>
                        Pattern
                    </v-btn>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className='header'>

            </div>
        )
    }
  
  }
  
  export {HeaderView}