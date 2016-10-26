function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
let test = createCalculator();
test.add();
test.add();
test.add();
test.add();

console.log(test.get());

module.exports = { createCalculator };
