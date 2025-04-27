const calc = {
    a: 0,
    result: 0,

    init: function(a) { 
        this.a = a;
        this.result = a; 
    },

    addAndMul: function(b, c) {
        this.result = (this.a +b) * c;
        console.log("Final result:", this.result);
    }
}


calc.init(3);      // a = 3
calc.addAndMul(5, 2); // (3+5) * 2 = 16