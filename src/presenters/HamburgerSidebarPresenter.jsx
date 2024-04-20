import { HamburgerSidebarView } from "../views/HamburgerSidebarView";


export default function HamburgerSidebarPresenter (props) {

    if(props.model.showHamburger)
    return (
        <div>
            <HamburgerSidebarView
            showBurger={props.model.showHamburger}
            />

        </div>
    );
}