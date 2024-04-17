import SignInPresenter from '../views/SignInView.jsx';

import {createRouter, createWebHashHistory} from "vue-router";


export function makeRouter(model) {
    return createRouter({
        history: createWebHashHistory(),
        routes: [
            {
                path: "/",
                component: <SignInPresenter model={model} />,
            }
        ]
    });
}

export default function VueRoot(props) {
    return (
        <div>
            <RouterView />
        </div>
    );
}