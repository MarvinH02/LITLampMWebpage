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
import CustomPresenter from './CustomPresenter.jsx';
import MemoryGamePresenter from './MemoryGamePresenter.jsx';
import StatsPresenter from './StatsPresenter.jsx';
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
            {
                path: "/custom",
                component: <CustomPresenter model={model} />,
            },
            {
                path: "/games/memory",
                component: <MemoryGamePresenter model={model} />,
            },
            {
                path: "/statistics",
                component: <StatsPresenter model={model} />,
            },


        ]
    });
}

export default function VueRoot(props) {
    
        return (
            <div className='flex-container'>
                <div className='leftbox'><HamburgerSidebarPresenter model={props.model}/></div>
                <div className='rightbox'>
                    <div className='headerbox'><HeaderPresenter model={props.model} /></div>
                    <RouterView />   
                </div>
                
                
                
            </div>
        ) 
}