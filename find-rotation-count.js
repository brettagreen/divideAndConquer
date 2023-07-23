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

    return middleIdx;
}

console.log(findRotationCount([15, 18, 2, 3, 6, 12])) // 2
console.log(findRotationCount([7, 9, 11, 12, 5])) // 4
console.log(findRotationCount([7, 9, 11, 12, 15, 17, 20, 1, 3, 5]));
console.log(findRotationCount([7, 9, 11, 12, 15, 17, 20, 1, 3, 5, 6]));
console.log(findRotationCount([7, 9, 11, 12, 15])) // 0

module.exports = findRotationCount

