// define a stats object - no functions yet
let stats = {
    min: function(array) {
        //assume first number is smallest 
        let smallest = array[0];
        //loop through the rest of the array, seeing if we can find a smaller one
        for(let i = 1; i < array.length; i++) {
            if(array[i] < smallest) {
                smallest = array[i]; // new smallest number
            }
        }
        // return the smallest number
        return smallest;
    },
    sumOfValues: function(array) {
        let total = 0;
        // loop through the array, adding up the numbers
        for(let i = 0; i < array.length; i++) {
            total = total + array[i];
        }
        return total;
    },
    max: function(array) {
        let max = array[0];
        for(let i = 1; i < array.length; i ++) {
            if(array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }
};
// export the stats object
module.exports = stats;