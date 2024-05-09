import { set } from "firebase/database";


export default {
    user: null,
    currentPage: null,
    testCounter: 3,
    poweredOn: false,
    brightness: 10,
    color: "#E21515",
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
    onOffStat: 0,   //times turned on/off stat
    turnOnTime: null,       //timestamp when lamp was turned on                 //SHOULD ADD FIREBASE PERSISTENCE, REMOVE THIS WHEN DONE
    turnOffTime: null,      //timestamp when lamp was turned off
    totalTimeOn: 0,      //total time on in seconds
    brightnessArray4Stats: [0,0,0,0,0,0,0,0,0,0],     //array to store brgihtness stats of times a certain range has been set    //SHOULD ADD FIREBASE PERSISTENCE, REMOVE THIS WHEN DONE 
    ticTacToeGamesPlayed: 0,
    snakeGamesPlayed: 0,
    memoryGamesPlayed: 0,
    favouriteGame: 'None yet',
    favouriteGameIcon: '',
    snakeScoreboard: [{name: 'goober', score: 0},{name: 'goober', score: 0},{name: 'goober', score: 0},{name: 'goober', score: 0},{name: 'goober', score: 0},{name: 'goober', score: 0},{name: 'goober', score: 0},{name: 'goober', score: 0},{name: 'goober', score: 0},{name: 'goober', score: 0}],
    memoryScoreboard: [{name: 'goober', score: 0},{name: 'goober', score: 0},{name: 'goober', score: 0},{name: 'goober', score: 0},{name: 'goober', score: 0},{name: 'goober', score: 0},{name: 'goober', score: 0},{name: 'goober', score: 0},{name: 'goober', score: 0},{name: 'goober', score: 0}],
    showScoreboard: false,



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

    setShowCreatingSchedule(){
        this.creatingSchedule = true;
    },

    setHideCreatingSchedule(){
        this.creatingSchedule = false;
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

    setPowerState(bool){
        this.poweredOn = bool;
    },

    setBrightness(number){
        if (this.brightness !== number){
            this.brightness = number;

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
            console.log(this.brightnessArray4Stats);
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
    },

    setOnOffStat(number){
        this.onOffStat = number;
    },

    setTurnOnTime(timestamp){
        this.turnOnTime = timestamp;
    },

    calculateTime(){
        console.log("time before calculatetime "+ this.turnOnTime)
        if(this.turnOnTime !== null){
            if(this.poweredOn){     //lamp was on before click i.e we are turning it off meaning calculate total time it was on
                this.turnOffTime = new Date();
                let temp = this.turnOffTime.valueOf() - this.turnOnTime.valueOf();      //the difference between turn on and off is the time passed, .valueOf() converts timestamp to unix time in milliseconds with starting point in the 70s or something so we can take the difference
                temp = Math.round(temp/1000);   
                console.log("Lamp was on for: "+ temp +" seconds")
                this.totalTimeOn = this.totalTimeOn + temp;
                console.log("lamp total time on: "+ this.totalTimeOn+" seconds")
            }
            else{       //lamp was off before click so we are going to turn it on, meaning "start" the time
                
                this.turnOnTime = new Date();
            }
        }
        else{
            console.log("shi null")
            
            this.turnOnTime = new Date();
            console.log("time after "+ this.turnOnTime)
        }
    },

    setTotalTimeOn(time){
        this.totalTimeOn = time;
    },

    setTicTacToeGamesPlayed(number){
        this.ticTacToeGamesPlayed = number;
    },

    setSnakeGamesPlayed(number){
        this.snakeGamesPlayed = number;
    },

    setMemoryGamesPlayed(number){
        this.memoryGamesPlayed = number;
    },

    setFavouriteGame(game){
        this.favouriteGame = game;
    },

    setFavouriteGameIcon(source){
        this.favouriteGameIcon = source;
    },

    logGamePlayed(game){
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
            if(this.snakeGamesPlayed > this.memoryGamesPlayed && this.snakeGamesPlayed > this.ticTacToeGamesPlayed){
                this.favouriteGame = 'Snake!';
                this.favouriteGameIcon = 'src/images/snake.png'
            }   
            else if(this.memoryGamesPlayed > this.snakeGamesPlayed && this.memoryGamesPlayed > this.ticTacToeGamesPlayed){
                this.favouriteGame = 'Memory Game!'
                this.favouriteGameIcon = 'src/images/brain.png'
            }
            else if(this.ticTacToeGamesPlayed > this.snakeGamesPlayed && this.ticTacToeGamesPlayed > this.memoryGamesPlayed){
                this.favouriteGame = 'Tic Tac Toe!'
                this.favouriteGameIcon = 'src/images/tic.png'
            }
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
    
    setShowScoreboard(){
        this.showScoreboard = true;
        console.log(this.scoreboard)
    },

    setHideScoreboard(){
        this.showScoreboard = false;
    },

    addSnakeScore(score){       //for snake game, takes score in the form of an int or float or whatever and assigns it like to scoreboard like insertion sort
        let temp = {name: this.user.displayName, score:score};
        let anothertemp = {name:'',score:0};
        let appeared = false;
        let dupeScorePos = null;
        let NewTempScoreboard = [...this.snakeScoreboard];

        for(let i = 0; i<10; i++){      //check if user has a place in the scoreboard
            if(temp.name === NewTempScoreboard[i].name){
                appeared = true;
                dupeScorePos = i;
            }
        }
        if(appeared && NewTempScoreboard[dupeScorePos].score < temp.score){      //if already in scoreboard and current saved score is less than new score, swap
            NewTempScoreboard[dupeScorePos] = temp;
            for(let i = 0; i<10; i++){
                temp = NewTempScoreboard[i];
                for(let a = i+1; a<10; a++){
                if(NewTempScoreboard[a].score > temp.score){
                    anothertemp = temp;
                    NewTempScoreboard[i] = NewTempScoreboard[a];
                    NewTempScoreboard[a] = anothertemp;
                    temp = NewTempScoreboard[i];
                }
                }
            }
             
        }
        else if(appeared === false){
            for(let i = 0; i<10; i++){
                if(NewTempScoreboard[i].score < temp.score){
                    anothertemp = NewTempScoreboard[i];
                    NewTempScoreboard[i] = {name: temp.name, score: temp.score};
                    temp = anothertemp;
                }
            }
        }
        this.snakeScoreboard = NewTempScoreboard;
        
    },

    addMemoryScore(score){       //for memory game, takes score in the form of an int or float or whatever and assigns it like to scoreboard like insertion sort
        let temp = {name: this.user.displayName, score:score};
        let anothertemp = {name:'',score:0};
        let appeared = false;
        let dupeScorePos = null;
        let NewTempScoreboard = [...this.memoryScoreboard];

        for(let i = 0; i<10; i++){      //check if user has a place in the scoreboard
            if(temp.name === NewTempScoreboard[i].name){
                appeared = true;
                dupeScorePos = i;
            }
        }
        if(appeared && NewTempScoreboard[dupeScorePos].score < temp.score){      //if already in scoreboard and current saved score is less than new score, swap
            NewTempScoreboard[dupeScorePos] = temp;
            for(let i = 0; i<10; i++){
                temp = NewTempScoreboard[i];
                for(let a = i+1; a<10; a++){
                if(NewTempScoreboard[a].score > temp.score){
                    anothertemp = temp;
                    NewTempScoreboard[i] = NewTempScoreboard[a];
                    NewTempScoreboard[a] = anothertemp;
                    temp = NewTempScoreboard[i];
                }
                }
            }
             
        }
        else if(appeared === false){
            for(let i = 0; i<10; i++){
                if(NewTempScoreboard[i].score < temp.score){
                    anothertemp = NewTempScoreboard[i];
                    NewTempScoreboard[i] = {name: temp.name, score: temp.score};
                    temp = anothertemp;
                }
            }
        }
        this.memoryScoreboard = NewTempScoreboard;
    },
    setSnakeScoreboard(scoreboard){
        this.snakeScoreboard = scoreboard;
    },
    setMemoryScoreboard(scoreboard){
        this.memoryScoreboard = scoreboard;
    },

};