import SignInPresenter from '../views/SignInView.jsx';
import HomePresenter from '../views/HomeView.jsx';
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