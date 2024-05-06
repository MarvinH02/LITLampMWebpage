import { set } from "firebase/database";


export default {
    user: null,
    currentPage: null,
    testCounter: 3,
    poweredOn: false,
    brightness: 10,
    color: "#A800FF",
    creatingSchedule: false,
    scheduleHours: 0,
    scheduleMinutes: 0,
    schedules : [],
    scheduleOnOffState : true,
    addingDevice: false,
    devices: [],
    activeDevice: null,
    gameStatus: false,//true when you are playing game
    memoryGameGuess: null,
    onOffStat: 0,   //times turned on/off stat                                  //SHOULD ADD FIREBASE PERSISTENCE, REMOVE THIS WHEN DONE
    turnOnTime: null,       //timestamp when lamp was turned on                 //SHOULD ADD FIREBASE PERSISTENCE, REMOVE THIS WHEN DONE
    turnOffTime: null,      //timestamp when lamp was turned off
    totalTimeOn: 0,      //total time on in seconds                          //SHOULD ADD FIREBASE PERSISTENCE, REMOVE THIS WHEN DONE
    brightnessArray4Stats: [9],     //array to store brgihtness stats of times a certain range has been set     
    ticTacToeGamesPlayed: 0,                                                    //SHOULD ADD FIREBASE PERSISTENCE, REMOVE THIS WHEN DONE
    snakeGamesPlayed: 0,                                                        //SHOULD ADD FIREBASE PERSISTENCE, REMOVE THIS WHEN DONE
    memoryGamesPlayed: 0,                                                       //SHOULD ADD FIREBASE PERSISTENCE, REMOVE THIS WHEN DONE
    favouriteGame: 'None yet',                                                  //SHOULD ADD FIREBASE PERSISTENCE, REMOVE THIS WHEN DONE


    setColor(color){
        this.color = color;
        console.log("Color in model: "+this.color);
    },

    setCurrentPage(page) {
        if (this.currentPage !== page && page) {
            this.currentPage = page;
        }
    },

    testCounterPlus(){
        this.testCounter++;
        console.log("Test Counter: "+this.testCounter);
    },

    setUser(user) {
        this.user = user;
    },

    setCreatingSchedule(){
        if(this.creatingSchedule === true){
            this.creatingSchedule = false;
        }
        else if (this.creatingSchedule === false){
            this.creatingSchedule = true;
        }
    },

    togglePower(){
        console.log("Power Toggled");
        if(this.poweredOn === true){
            this.poweredOn = false;
        }
        else{
            this.poweredOn = true;
        } 
    },

    setBrightness(number){
        if (this.brightness !== number){
            this.brightness = number;

            /* for stats I want to store a 1 in an array everytime a brightness within a range is set to plot a graph of most used brightness settings but the array that is returned is weird...
            if (number <= 10) {
                console.log("case less than or 10");
                this.brightnessArray4Stats[0]++;
            } else if (number > 10 && number <= 20) {
                console.log("case between 10 and 20");
                this.brightnessArray4Stats[1]++;
            } else if (number > 20 && number <= 30) {
                console.log("case between 20 and 30");
                this.brightnessArray4Stats[2]++;
            } else if (number > 30 && number <= 40) {
                console.log("case between 30 and 40");
                this.brightnessArray4Stats[3]++;
            } else if (number > 40 && number <= 50) {
                console.log("case between 40 and 50");
                this.brightnessArray4Stats[4]++;
            } else if (number > 50 && number <= 60) {
                console.log("case between 50 and 60");
                this.brightnessArray4Stats[5]++;
            } else if (number > 60 && number <= 70) {
                console.log("case between 60 and 70");
                this.brightnessArray4Stats[6]++;
            } else if (number > 70 && number <= 80) {
                console.log("case between 70 and 80");
                this.brightnessArray4Stats[7]++;
            } else if (number > 80 && number <= 90) {
                console.log("case between 80 and 90");
                this.brightnessArray4Stats[8]++;
            } else if (number > 90 && number <= 100) {
                console.log("case between 90 and 100");
                this.brightnessArray4Stats[9]++;
            } else {
                console.log("ROH OH RHAGGY: " + number);
            }
            console.log(this.brightnessArray4Stats);*/
        }
    },

    setScheduleHours(action){
        if(action == ' + '){
            if(this.scheduleHours == 23)
                this.scheduleHours = 0
            else
                this.scheduleHours = ++this.scheduleHours
        }
        else if(action == ' - '){
            if(this.scheduleHours == 0)
                this.scheduleHours = 23
            else
                this.scheduleHours = --this.scheduleHours
        }
    },

    setScheduleMinutes(action){
        if(action == ' + '){
            if(this.scheduleMinutes == 55)
                this.scheduleMinutes = 0
            else
                this.scheduleMinutes = this.scheduleMinutes + 5
        }
        else if(action === ' - '){
            if(this.scheduleMinutes == 0)
                this.scheduleMinutes = 55
            else
                this.scheduleMinutes = this.scheduleMinutes - 5
        }
    },

    resetTime(){
        this.scheduleHours = 0
        this.scheduleMinutes = 0
    },

    saveCurrentTimeToSchedules(state){
        const newSchedule = {
            hours: this.scheduleHours,
            minutes: this.scheduleMinutes,
            onTimeTurn: this.scheduleOnOffState,
          };
        if(this.schedules.length >= 5){
            console.log("too many saved schedules")
        }
        else
        this.schedules = [...this.schedules, newSchedule]
        console.log(this.schedules)
    },

    setOnOffState(){
        console.log(this.scheduleOnOffState)
        if(this.scheduleOnOffState === true){
            this.scheduleOnOffState = false
        }  
        else if(this.scheduleOnOffState === false){
            this.scheduleOnOffState = true
        }
        console.log(this.scheduleOnOffState)
    },

    setAddingDevice(){
        if(this.addingDevice === true){
            this.addingDevice = false;
        }
        else if (this.addingDevice === false){
            this.addingDevice = true;
        }
        //console.log("Adding Device: "+this.addingDevice);
    },

    addDevice(device){
        if (device.ip && device.name)
        {
            if(!(this.devices.some(devices => devices.ip === device.ip))){
                this.devices = [...this.devices, {name: device.name, ip: device.ip}];
                //console.log("Device added: "+device.name + " " + device.ip);
            }
            
            else
                console.log("Device with entered IP already exists");
        } 
        else
            console.log("Invalid device, enter name and IP");
    },
    setCurrentDevice(device){
        //console.log("Setting Active Device: "+device.name);
        this.activeDevice = device;
    },
    deleteDevice(device){
        function shouldDeviceBeDeleted(deviceToCheck){
            return deviceToCheck.ip !== device.ip;
        }
        this.devices = this.devices.filter(shouldDeviceBeDeleted);
    },
    setDevices(devices){
        this.devices = devices;
    },
    setGameStatus(){
        if(this.gameStatus===false)
            this.gameStatus=true;
        else{
            this.gameStatus=false;
        }
        console.log("current game status: "+ this.gameStatus)
    },
    resetStuff(){
        this.gameStatus= false
        this.creatingSchedule = false
        this.addingDevice = false
    },
    setMemoryGameGuess(guess){
        this.memoryGameGuess = guess;
    },

    logOnOffStat(){
        this.onOffStat = ++this.onOffStat;
        //SHOULD ADD FIREBASE PERSISTENCE AND MAKE IT DEVICE SPECIFIC HERE
    },

    calculateTime(){
        if(this.poweredOn){     //lamp was on before click i.e we are turning it off meaning calculate total time it was on
            this.turnOffTime = new Date();
            let temp = this.turnOffTime.valueOf() - this.turnOnTime.valueOf();      //the difference between turn on and off is the time passed, .valueOf() converts timestamp to unix time in milliseconds with starting point in the 70s or something so we can take the difference
            temp = Math.round(temp/1000);   
            console.log("Lamp was on for: "+ temp +" seconds")
            this.totalTimeOn = this.totalTimeOn + temp;
            console.log("lamp total time on: "+ this.totalTimeOn+" seconds")
            //SHOULD ADD FIREBASE PERSISTENCE AND MAKE IT DEVICE SPECIFIC HERE SO TOTAL TIME AND START TIME IS STORED
        }
        else{       //lamp was off before click so we are going to turn it on, meaning "start" the time
            this.turnOnTime = new Date();
        }
    },

    logGamePlayed(game){        //SHOULD ADD FIREBASE PERSISTENCE
        if(this.gameStatus){
            if(game === 'snake'){
                console.log("SNAKE PLAYED MUAHAAHAHAHHAA");
                this.snakeGamesPlayed++;
                console.log(this.snakeGamesPlayed);
            }
            else if(game === 'memory'){
                console.log("memory played ;)");
                this.memoryGamesPlayed++;
                console.log(this.memoryGamesPlayed);
            }
            else if(game === 'tictactoe'){
                console.log("TOE TOE TOE");
                this.ticTacToeGamesPlayed++;
                console.log(this.ticTacToeGamesPlayed);
            }
        }
        else{       //update favourite game after done playing
            if(this.snakeGamesPlayed > this.memoryGamesPlayed && this.snakeGamesPlayed > this.ticTacToeGamesPlayed)
                this.favouriteGame = 'Snake!';
            else if(this.memoryGamesPlayed > this.snakeGamesPlayed && this.memoryGamesPlayed > this.ticTacToeGamesPlayed)
                this.favouriteGame = 'Memory Game!'
            else if(this.ticTacToeGamesPlayed > this.snakeGamesPlayed && this.ticTacToeGamesPlayed > this.memoryGamesPlayed)
                this.favouriteGame = 'Tic Tac Toe!'
        }
            

    },

    resetStats(){
        this.onOffStat = 0;
        this.totalTimeOn = 0;
        this.ticTacToeGamesPlayed = 0;
        this.snakeGamesPlayed = 0;
        this.memoryGamesPlayed = 0;
        this.favouriteGame = 'None yet';
    },

};