// Write a function that takes an array of numbers and returns the 3 highest numbers in the array.

const array = [10,43,23,98,45,76,42,75,84]

function return3Largest(arr){
    let largest = arr[0]
    let second = arr[0]
    let third = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
        else if(arr[i] > second && arr[i] < largest){
            second = arr[i]
        }
        else if(arr[i] > third && arr[i] < second){
            third = arr[i]
        }
    }
    return [largest, second, third]
}

console.log(return3Largest(array))