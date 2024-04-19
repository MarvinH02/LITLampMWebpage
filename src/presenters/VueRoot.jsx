import SignInPresenter from '../presenters/SignInPresenter.jsx';
import HomePresenter from '../presenters/HomePresenter.jsx';
import {createRouter, createWebHashHistory} from "vue-router";


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
        ]
    });
}

export default function VueRoot(props) {
    if (!props.model.ready) { return <LoadingView/> }
    return (
        <div>
            <RouterView />
        </div>
    );
}