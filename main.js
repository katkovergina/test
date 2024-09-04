const array1 = [1, 3, 4, 5, 2, 1, 2];
function findUnique (arr) {
    const arrayOfUniq = [];
    for (const item of arr) {
        if(!arrayOfUniq.includes(item)) {
            arrayOfUniq.push(item);
        } else {
            const index = arrayOfUniq.findIndex(element => element === item);
            arrayOfUniq.splice(index, 1);
        }
    }
    return arrayOfUniq;
}
console.log(findUnique(array));


const array2 = [ 2, 1, 3, 4, 5, 7, 8 ];
function findMissing(arr) {
    const N = Math.max(...arr);
    const sumOfArr = arr.reduce((acc, num) => acc + num, 0);

    const expectedSum = (N * (N + 1)) / 2;

    return expectedSum - sumOfArr;
}
console.log(findMissing(array2));


var someList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function reversePrint(linkedList) {
    if (linkedList === null) {
        return;
    }
    reversePrint(linkedList.next);
    console.log(linkedList.value);
}

reversePrint(someList);
