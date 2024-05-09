import { HamburgerSidebarView } from "../views/HamburgerSidebarView";


export default function HamburgerSidebarPresenter (props) {

    function sidebarClickedACB(){
        props.model.setHideScoreboard();
        props.model.setHideCreatingSchedule();
        props.model.resetTime();
    }
    return (
        <div>
            <HamburgerSidebarView
            user={props.model.user}
            playingGame={props.model.gameStatus}
            sidebarClicked = { sidebarClickedACB }
            />

        </div>
    );
}