

export default {
    user: null,
    currentPage: null,
    testCounter: 3,
    poweredOn: true,
    brightness: 10,
    color: `#000000`,
    creatingSchedule: false,
    scheduleHours: 0,
    scheduleMinutes: 0,
    schedules : [],
    scheduleOnOffState : true,



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
        if (this.brightness !== number)
            this.brightness = number;
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

};