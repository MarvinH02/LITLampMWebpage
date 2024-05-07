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
        currentPage : model.currentPage,
        activeDevice : model.activeDevice,
        devices : model.devices,
        onOffStat : model.onOffStat,
        poweredOn : model.poweredOn,
        totalTimeOn : model.totalTimeOn,
        ticTacToeGamesPlayed : model.ticTacToeGamesPlayed,
        snakeGamesPlayed : model.snakeGamesPlayed,
        memoryGamesPlayed : model.memoryGamesPlayed,
        favouriteGame : model.favouriteGame,
    };
}

function persistenceToModelUserData(data, model) {
    if (!data) {
        model.setCurrentPage(null)
        model.setCurrentDevice(null)
        model.setDevices([])
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
    if (data.onOffStat) {
        model.setOnOffStat(data.onOffStat);
    }
    else{
        model.setOnOffStat(0);
    }
    if (data.totalTimeOn){
        model.setTotalTimeOn(data.totalTimeOn);
    }
    else{
        model.setTotalTimeOn(0);
    }
    if (data.ticTacToeGamesPlayed){
        model.setTicTacToeGamesPlayed(data.ticTacToeGamesPlayed);
    }
    else{
        model.setTicTacToeGamesPlayed(0);
    }
    if (data.snakeGamesPlayed){
        model.setSnakeGamesPlayed(data.snakeGamesPlayed);
    }
    else{
        model.setSnakeGamesPlayed(0);
    }
    if (data.memoryGamesPlayed){
        model.setMemoryGamesPlayed(data.memoryGamesPlayed);
    }
    else{
        model.setMemoryGamesPlayed(0);
    }
    if (data.favouriteGame){
        model.setFavouriteGame(data.favouriteGame)
    }
    else{
        model.setFavouriteGame('None yet')
    }
    if (data.poweredOn){
        model.setPowerState(data.poweredOn);
    }
    else{
        model.setPowerState(false);
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
    function authLoginOrLogoutACB(){
        model.setUser(auth.currentUser);
        if(model.user){
            fetchFromFirebase(model);
            watchFunction(checkACB, updateFirebaseACB);
            console.log("User Logged In");
        }
    }

    function checkACB(){
        return [model.activeDevice, model.devices, model.currentPage, 
            model.onOffStat, model.turnOnTime, model.poweredOn, model.totalTimeOn, 
            model.ticTacToeGamesPlayed, model.snakeGamesPlayed, model.memoryGamesPlayed, model.favouriteGame];
    }
    function updateFirebaseACB(){
        saveUserToFirebase(model);
    }
    model.ready = true;
}
export {auth, provider, signInWithPopup, signOut}

export default connectToFirebase;