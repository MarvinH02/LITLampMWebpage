

export default {
    user: null,
    currentPage: null,
    testCounter: 3,
    showHamburger: false,
    poweredOn: true,



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

    setShowHamburger(){
        if(this.showHamburger === true){
            this.showHamburger = false;
        }
        
        else if (this.showHamburger === false){
            this.showHamburger = true;
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
};