

export default {
    user: null,
    currentPage: null,



    setCurrentPage(page) {
        if (this.currentPage !== page && page) {
            this.currentPage = page;
        }
    }
};