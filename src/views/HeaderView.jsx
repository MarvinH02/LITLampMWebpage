function HeaderView (props) {
    function goToPowerPageACB() {window.location.hash = "#/power"; }

    function ClickedColorPageHandler() {window.location.hash="#/color"}

    return(
        <div class="header">
            <div class="buttonsInHeader">
                <v-btn variant="tonal" class="iconButtons" onClick={goToPowerPageACB}>
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
                <v-btn variant="tonal" class="iconButtons">
                    <span class="material-symbols-outlined">
                    schedule
                    </span>
                    Schedule
                </v-btn>
                <v-btn variant="tonal" class="iconButtons">
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
                <v-btn variant="tonal" class="iconButtons">
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
  
  export {HeaderView}