import { HamburgerSidebarView } from "../views/HamburgerSidebarView";


export default function HamburgerSidebarPresenter (props) {

    function sidebarClickedACB(){
        props.model.setHideScoreboard();
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