import SignInPresenter from '../presenters/SignInPresenter.jsx';
import HomePresenter from '../presenters/HomePresenter.jsx';
import HamburgerSidebarPresenter from './HamburgerSidebarPresenter.jsx';
import HeaderPresenter from './HeaderPresenter.jsx';
import PowerOnPresenter from './PowerOnPresenter.jsx';
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
            }
        ]
    });
}

export default function VueRoot(props) {
    if (!props.model.ready) { return <LoadingView/> }
    if (props.model.showHamburger){
        return (
            <div className="flexParent">
                <HeaderPresenter model={props.model} />
                <div className='flex-container'>
                    <div className='hamburger'>
                        <HamburgerSidebarPresenter model={props.model}/> 
                    </div>
                    <div className='mainContent'>
                        <RouterView /> 
                    </div>  
                </div>
            </div>
        );
    }
    return (
        <div className="flexParent">
            <HeaderPresenter model={props.model} />
            <div>      
                <RouterView />          
            </div>
        </div>
    )

}