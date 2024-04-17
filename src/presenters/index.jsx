
import model from "/src/websiteModel.js";
import {createApp, reactive, h} from "vue";
const reactiveModel = reactive(model);

import VueRoot from "./VueRoot.jsx";
const app= createApp(<VueRoot model={reactiveModel}/>);

import {makeRouter} from "./VueRoot.jsx";
app.use(makeRouter(reactiveModel));

app.mount("#root");