

export default {
    user: null,
    currentPage: null,
    testCounter: 3,



    setCurrentPage(page) {
        if (this.currentPage !== page && page) {
            this.currentPage = page;
        }
    },
    testCounterPlus(){
        this.testCounter++;
        console.log("Test Counter: "+this.testCounter);
    },
};