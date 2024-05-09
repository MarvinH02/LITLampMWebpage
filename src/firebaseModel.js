import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, onValue } from "firebase/database";


const PATH = "LIT-LAMP-M";
const PATH_GLOBAL = "LIT-LAMP-M-Global";

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
        favouriteGameIcon : model.favouriteGameIcon,
        turnOnTime : model.turnOnTime,
    };
}
function modelToPersistenceGlobal(model) {
    return {
        snakeScoreboard : model.snakeScoreboard,
        memoryScoreboard : model.memoryScoreboard,
    };
}
function persistanceToModelGlobalData(data, model) {
    if (!data) {
        model.setSnakeScoreboard([{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0}]);
        model.setMemoryScoreboard([{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0}]);
        return;
    }
    if (data.snakeScoreboard) {
        model.setSnakeScoreboard(data.snakeScoreboard);
    }
    else{
        model.setSnakeScoreboard([{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0}]);
    }
    if (data.memoryScoreboard) {
        model.setMemoryScoreboard(data.memoryScoreboard);
    }
    else{
        model.setMemoryScoreboard([{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0},{name: 'Player', score: 0}]);
    }
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
    if (data.favouriteGameIcon){
        model.setFavouriteGameIcon(data.favouriteGameIcon);
    }
    else{
        model.setFavouriteGameIcon('')
    }
    if (data.turnOnTime){
        model.setTurnOnTime(data.turnOnTime)
    }
    else{
        model.setTurnOnTime(null)
    }
}

function saveToFirebase(model){
    if(model.ready === true){
        console.log("saveGlobalToFirebase<<<<<<<<<<<<<<<<<<<");
        set(ref(db, PATH_GLOBAL),modelToPersistenceGlobal(model));
    }
    else{
        console.log("Not ready to save to firebase zzzzzz");
    }
}
function saveUserToFirebase(model){
    if(model.ready && model.user){
        //console.log("saveUserToFirebase");
        set(ref(db, PATH + "/" + model.user.uid), modelToPersistence(model));
    }
    else{
        console.log("Not ready to save to firebase xxxxxxxxxx");
    }

}

function fetchFromFirebase(model) {
    //console.log("fetchFromFirebase");
    if(model.user){
        model.ready=false;
        const userData = get(ref(db, PATH + "/" + model.user.uid))
            .then(function convertToModelACB(savedState){
                return persistenceToModelUserData(savedState.val(), model);
            });

        const globalData = get(ref(db, PATH_GLOBAL))
            .then(function convertToModelACB(savedState){
                return persistanceToModelGlobalData(savedState.val(), model);
            });
        
        return Promise.all([globalData, userData])
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
            watchFunction(checkGlobalACB, updateGlobalFirebaseACB);
            watchFunction(checkACB, updateFirebaseACB);
            console.log("User Logged In");
        }
    }

    function checkACB(){
        console.log("checking USER ACB");
        return [model.activeDevice, model.devices, model.currentPage, 
            model.onOffStat, model.turnOnTime, model.poweredOn, model.totalTimeOn, 
            model.ticTacToeGamesPlayed, model.snakeGamesPlayed, model.memoryGamesPlayed, model.favouriteGame, model.favouriteGameIcon];
    }
    function checkGlobalACB(){
        console.log("checking Global ACB");
        return [model.snakeScoreboard, model.memoryScoreboard];
    }
    function updateGlobalFirebaseACB(){
        console.log("updating Global FirebaseACB--------------");
        saveToFirebase(model);
    }
    function updateFirebaseACB(){
        console.log("updating User FirebaseACB");
        saveUserToFirebase(model);
    }
    model.ready = true;
}
export {auth, provider, signInWithPopup, signOut}

export default connectToFirebase;