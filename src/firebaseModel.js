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
        activeDevice: model.activeDevice,
        devices: model.devices,
        userImages: model.userImages,
    };
}

function persistenceToModelUserData(data, model) {
    if (!data) {
        model.setCurrentPage(null)
        model.setCurrentDevice(null)
        model.setDevices([])
        model.setUserImages([])
        return;
    }
    if (data.currentPage) {
        model.setCurrentPage(data.currentPage);
    }
    else{
        model.setCurrentPage("home");
    }
    if (data.activeDevice) {
        model.setCurrentDevice(data.activeDevice);
    }
    else{
        model.setCurrentDevice(null);
    }
    if (data.devices) {
        model.setDevices(data.devices);
    }
    else{
        model.setDevices([]);
    }
    if (data.userImages) {
        model.setUserImages(data.userImages);
    }
    else{
        model.setUserImages([]);
    }
}

function saveToFirebase(model){
    if(model.ready === true)
        set(ref(db, PATH),modelToPersistence(model));
}
function saveUserToFirebase(model){
    console.log("saveUserToFirebase");
    if(model.ready && model.user){
        set(ref(db, PATH + "/" + model.user.uid), modelToPersistence(model));
    }

}

function fetchFromFirebase(model) {
    console.log("fetchFromFirebase");
    if(model.user){
        model.ready=false;
        return get(ref(db, PATH + "/" + model.user.uid))
            .then(function convertToModelACB(savedState){
                return persistenceToModelUserData(savedState.val(), model);
            })
            .then(function modelReadyCB() {
                model.ready = true;
            });
    }
}

function connectToFirebase(model, watchFunction){
    model.ready = false;
    console.log("connectToFirebase");
    onAuthStateChanged(auth, authLoginOrLogoutACB);
    console.log("auth state changed");
    function authLoginOrLogoutACB(){
        model.setUser(auth.currentUser);
        if(model.user){
            console.log("1");
            fetchFromFirebase(model);
            watchFunction(checkACB, updateFirebaseACB);
            console.log("2");
            console.log("User Logged In");
        }
        console.log("4")
    }

    function checkACB(){
        return [model.activeDevice, model.devices, model.currentPage, model.userImages];
    }
    function updateFirebaseACB(){
        saveUserToFirebase(model);
    }
    model.ready = true;
}
export {auth, provider, signInWithPopup, signOut}

export default connectToFirebase;