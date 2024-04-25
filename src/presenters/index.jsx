
import model from "/src/websiteModel.js";
import {createApp, reactive, watch} from "vue";
const reactiveModel = reactive(model);

import VueRoot from "./VueRoot.jsx";
import "../firebaseModel.js";
const app= createApp(<VueRoot model={reactiveModel}/>);

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  });

app.use(vuetify);

import {makeRouter} from "./VueRoot.jsx";

app.use(makeRouter(reactiveModel));

app.mount("#root");


import connectToFirebase from "../firebaseModel.js";
connectToFirebase(reactiveModel, watch);

window.addEventListener("hashchange", updateCurrentPageACB);
function updateCurrentPageACB()
{
    reactiveModel.setCurrentPage(window.location.hash);
}