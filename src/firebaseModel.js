import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, onValue } from "firebase/database";


const PATH = "LIT-LAMP-M";

import firebaseConfig from "/src/firebaseConfig.js";
const app= initializeApp(firebaseConfig)
const db= getDatabase(app)

console.log("Database")
console.log(db)

//set(ref(db, PATH+"/test"), "Kossa");
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



function modelToPersistence(model) {

    return {
        currentPage: model.currentPage,
    };
}

function persistenceToModelUserData(data, model) {
    if (!data || !data.currentPage) {
        model.setCurrentPage(null)
        return;
    }
    if (data.currentPage) {
        model.setCurrentPage(data.currentPage);
    }
}

function saveToFirebase(model){
    if(model.ready === true)
        set(ref(db, PATH),modelToPersistence(model));
}

function fetchFromFirebase(model) {
    model.ready=false;
    return get(ref(db, PATH + "/test"))
        .then(function convertToModelACB(savedState){
            return persistenceToModelUserData(savedState.val(), model);
        })
        .then(function modelReadyCB() {
            model.ready = true;
        });
}

function connectToFirebase(model, watchFunction){
    fetchFromFirebase(model);
    watchFunction(checkACB, updateFirebaseACB);

    function checkACB(){
        return [model.currentPage];
    }
    function updateFirebaseACB(){
        saveToFirebase(model);
    }
}
export {auth, provider, signInWithPopup, signOut}

export default connectToFirebase;