import { HamburgerSidebarView } from "../views/HamburgerSidebarView";


export default function HamburgerSidebarPresenter (props) {

    return (
        <div>
            <HamburgerSidebarView
            user={props.model.user}
            playingGame={props.model.gameStatus}
            />

        </div>
    );
}