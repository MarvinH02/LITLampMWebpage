

export default {
    user: null,
    currentPage: null,
    testCounter: 3,
    poweredOn: true,
    brightness: 10,
    color: `#000000`,
    creatingSchedule: false,


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
};