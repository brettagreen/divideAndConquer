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

console.log(findRotatedIndex([3,4,1,2],4))
console.log(findRotatedIndex([6, 7, 8, 9, 10, 1, 2, 3, 4], 8))
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3))
console.log(findRotatedIndex([37,44,66,102,10,22],14))
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12))

module.exports = findRotatedIndex