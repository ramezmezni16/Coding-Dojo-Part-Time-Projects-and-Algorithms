//Reverse
function reverse(arr) {
    let a = 0;
    let b = arr.length - 1;
    while (a < b) {
        [arr[a], arr[b]] = [arr[b], arr[a]];
        a++;
        b--;
    }
}

//Rotate
function rotateArr(arr, shiftBy) {
    const n = arr.length;
    shiftBy = ((shiftBy % n) + n) % n;
    function reverse(a, b) {
        while (a < b) {
            [arr[a], arr[b]] = [arr[b], arr[a]];
            a++;
            b--;
        }
    }
    reverse(0, n - 1);
    reverse(0, shiftBy - 1);
    reverse(shiftBy, n - 1);
}

//Filter Range
function filter(arr, min, max) {
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {arr[a++] = arr[i];}
    }
    arr.length = a;
}

//Concat
function arr(arr01, arr02) {
    const finalArr = new Array(arr01.length + arr02.length);
    let a = 0;
    for (const elment of arr01) {
        finalArr[a++] = elment;
    }
    for (const elment of arr02) {
        finalArr[a++] = elment;
    }
    return finalArr;
}
