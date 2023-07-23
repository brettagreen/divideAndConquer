function sortedFrequency(arr, val) {
    let count = 0;
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx;
    let middleVal;

    while (leftIdx <= rightIdx) {
        middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        middleVal = arr[middleIdx];

        if (middleVal < val) {
            leftIdx = middleIdx + 1;
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1;
        } else {
            count += sortLeft(arr.slice(0, middleIdx), val);
            count += sortRight(arr.slice(middleIdx), val);
            break;
        }
    }

    return count === 0 ? -1 : count;
}

function sortLeft(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx;
    let middleVal;
    let count = 0;

    while (leftIdx <= rightIdx) {
        middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        middleVal = arr[middleIdx];

        if (middleVal < val) {
            leftIdx = middleIdx + 1;
        } else {
            count += (rightIdx + 1) - middleIdx;
            rightIdx = middleIdx - 1;
        }
    }

    return count;
}

function sortRight(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx;
    let middleVal;
    let count = 0;

    while (leftIdx <= rightIdx) {
        middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        middleVal = arr[middleIdx];

         if (middleVal > val) {
            rightIdx = middleIdx - 1;
        } else {
            count += middleIdx + 1;
            rightIdx = middleIdx - 1;
        }
    }

    return count;

}

console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4
console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1
console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1

module.exports = sortedFrequency