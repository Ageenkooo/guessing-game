class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.arr = [];
        for (var i = 0; i < max-min +1; i++) {
            this.arr[i] = min + i;
        }
        this.left = 0; 
        this.right = this.arr.length ;
    }

    guess() {
        if(this.left < this.right)
            return this.arr[Math.floor((this.left+this.right)/2)];
    }

    lower() {
        this.right = Math.floor((this.left+this.right)/2) + 1;
    }

    greater() {
        this.left = Math.floor((this.left+this.right)/2) ;
    }
}

module.exports = GuessingGame;
