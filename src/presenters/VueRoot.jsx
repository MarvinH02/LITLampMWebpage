import SignInPresenter from '../presenters/SignInPresenter.jsx';
import HomePresenter from '../presenters/HomePresenter.jsx';
import HamburgerSidebarPresenter from './HamburgerSidebarPresenter.jsx';
import HeaderPresenter from './HeaderPresenter.jsx';
import PowerOnPresenter from './PowerOnPresenter.jsx';
import ColorPresenter from './ColorPresenter.jsx';
import AboutUsPresenter from './AboutUsPresenter.jsx';
import SchedulePresenter from './SchedulePresenter.jsx';
import DevicesPresenter from './DevicesPresenter.jsx';
import GameSelectPresenter from './GameSelectPresenter.jsx';
import SnakePresenter from './SnakePresenter.jsx';
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
            {
                path: "/about",
                component: <AboutUsPresenter model={model} />,
            },
            {
                path: "/schedule",
                component: <SchedulePresenter model={model} />,
            },
            {
                path: "/devices",
                component: <DevicesPresenter model={model} />,
            },
            {
                path: "/games",
                component: <GameSelectPresenter model={model} />,
            },
            {
                path: "/games/snake",
                component: <SnakePresenter model={model} />,
            },

        ]
    });
}

export default function VueRoot(props) {
    
        return (
            <div className='all-font'>
                <HeaderPresenter model={props.model} />
                
                <RouterView />
    
                <HamburgerSidebarPresenter model={props.model}/>
            </div>
        ) 
}