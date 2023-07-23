
function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx;
    let middleVal;

    debugger

    while (leftIdx <= rightIdx) {

        middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        middleVal = arr[middleIdx];

        if (middleVal <= val && (arr[middleIdx - 1] < val && arr[middleIdx + 1] > val)) {
            return middleVal;
        } else if (middleVal <= val && (arr[middleIdx - 1] === val && arr[middleIdx + 1] > val)) {
            rightIdx = middleIdx - 1;
        } else if (middleVal <= val && arr[middleIdx + 1] === val) {
            leftIdx = middleIdx + 1;      
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1;
        } else if (middleVal <= val && (arr[middleIdx -1] < val && arr[middleIdx + 1] < val)) {
            leftIdx = middleIdx + 1;
        } else if (!arr[middleIdx + 1]) {
            break;
        }
    }
    return middleVal <= val ? middleVal : -1;
}

console.log(findFloor([1,2,8,10,10,12,19], 9)) // 8
console.log(findFloor([1,2,8,10,10,12,19], 20)) // 19
console.log(findFloor([1,2,8,10,10,12,19], 0)) // -1
console.log(findFloor([12,15,16,19,19,19,19,20,25,30], 20)) // 20

module.exports = findFloor