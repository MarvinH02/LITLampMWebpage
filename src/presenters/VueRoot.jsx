import SignInPresenter from '../presenters/SignInPresenter.jsx';
import HomePresenter from '../presenters/HomePresenter.jsx';
import HamburgerSidebarPresenter from './HamburgerSidebarPresenter.jsx';
import HeaderPresenter from './HeaderPresenter.jsx';
import PowerOnPresenter from './PowerOnPresenter.jsx';
import ColorPresenter from './ColorPresenter.jsx';
import {createRouter, createWebHashHistory} from "vue-router";
import '../style.css';

export function makeRouter(model) {
    return createRouter({
        history: createWebHashHistory(),
        routes: [
            {
                path: "/",
                component: <SignInPresenter model={model} />,
            },
            {
                path: "/home",
                component: <HomePresenter model={model} />,
            },
            {
                path: "/power",
                component: <PowerOnPresenter model={model} />,
            },
            {
                path: "/color",
                component: <ColorPresenter model={model} />,
            },
        ]
    });
}

export default function VueRoot(props) {
    
    return (
        <div>
            <HeaderPresenter model={props.model} />
            
            <RouterView />

            <HamburgerSidebarPresenter model={props.model}/>
        </div>
    )

}