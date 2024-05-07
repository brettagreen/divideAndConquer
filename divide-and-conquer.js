function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let count = 0;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === 0) {
            count += (rightIdx + 1) - middleIdx;
            rightIdx = middleIdx - 1;
        } else if (middleVal === 1) {
            leftIdx = middleIdx + 1;
        } 
    }

    return count;
}

function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx;
    let middleVal;

    while (leftIdx <= rightIdx) {

        middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        middleVal = arr[middleIdx];

        if (middleVal <= val && arr[middleIdx + 1] > val) {
            return middleVal;
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1;
        } else if (middleVal <= val && (arr[middleIdx -1] <= val && arr[middleIdx + 1] <= val)) {
            leftIdx = middleIdx + 1;
        } else if (!arr[middleIdx + 1]) {
            break;
        }
    }
    return middleVal <= val ? middleVal : -1;
}

function findRotatedIndex(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === num) {
            return middleIdx;
        } else if (middleVal < num && arr[leftIdx] < num) {
            leftIdx = middleIdx + 1;
        } else if (middleVal > num && arr[rightIdx] > num) {
            leftIdx = middleIdx + 1;
        } else if (middleVal < num && arr[leftIdx] > num) {
            rightIdx = middleIdx - 1;
        } else {
            rightIdx = middleIdx - 1;
        }
    }

    return -1;
}

function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx;
    let middleVal;

    if (arr[0] < arr[arr.length - 1]) {
        return 0;
    }

    while (true) {

        middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        middleVal = arr[middleIdx];

        if (middleVal >= arr[rightIdx]) {
            if (arr[middleIdx + 1] > middleVal) {
                leftIdx = middleIdx + 1;
            } else {
                return middleIdx + 1;
            }
        } else if (middleVal <= arr[leftIdx]) {
            if (arr[middleIdx - 1] < middleVal) {
                rightIdx = middleIdx - 1;
            } else {
                return middleIdx;
            }
        }
    }
}

function sortedFrequency(arr, val) {
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

module.exports = { countZeroes, findFloor, findRotatedIndex, findRotationCount, sortedFrequency }