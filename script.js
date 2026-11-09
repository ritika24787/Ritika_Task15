
// Dummy Array
let numbers = [4, 8, 2, 11, 6, 7, 10];

// 1. Find Maximum Number
function findMax(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// 2. Find Sum of Numbers
let findSum = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
};

// 3. Count Odd Numbers
let countOdd = function(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            count = count + 1;
        }
    }

    return count;
};

// Print Results
console.log("Array:", numbers);
console.log("Maximum Number:", findMax(numbers));
console.log("Sum:", findSum(numbers));
console.log("Odd Numbers:", countOdd(numbers));
