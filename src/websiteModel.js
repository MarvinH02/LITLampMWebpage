import { set } from "firebase/database";


export default {
    user: null,
    currentPage: null,
    testCounter: 3,
    poweredOn: true,
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
    userImages: [],

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
    
    addToUserImages(image){
        this.userImages = [...this.userImages, image];
    },


};