function HeaderView (props) {
    function goToPowerPageACB() {window.location.hash = "#/power"; }

    function ClickedColorPageHandler() {window.location.hash="#/color"}

    return(
        <div class="header">
            <div class="buttonsInHeader">
                <button class="iconButtons" onClick={goToPowerPageACB}>
                    <span class="material-symbols-outlined">
                    power_settings_new
                    </span>
                    ON/OFF & Brightness
                </button>
                <button class="iconButtons" onClick={ClickedColorPageHandler}>
                    <span class="material-symbols-outlined">
                    palette
                    </span>
                    Color
                </button>
                <button class="iconButtons">
                    <span class="material-symbols-outlined">
                    schedule
                    </span>
                    Schedule
                </button>
                <button class="iconButtons">
                    <span class="material-symbols-outlined">
                    videogame_asset
                    </span>
                    Games
                </button>
                <button class="iconButtons">
                    <span class="material-symbols-outlined">
                    info
                    </span>
                    Display
                </button>
                <button class="iconButtons">
                    <span class="material-symbols-outlined">
                    view_compact
                    </span>
                    Custom
                </button>
                <button class="iconButtons">
                    <span class="material-symbols-outlined">
                    stroke_partial
                    </span>
                    Pattern
                </button>
            </div>
        </div>
    )
  
  }
  
  export {HeaderView}