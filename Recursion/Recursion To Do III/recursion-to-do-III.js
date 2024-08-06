//rBinarySearch
function rBinarySearch(arr, value, a=0, b=arr.length-1) {
    if (a>b) {
        return false;
    }
    const c = Math.floor((a+b)/2);
    if (arr[c] === value) {
    } else if (arr[c] < value) {
        return rBinarySearch(arr, value, c+1, b);
    } else {
        return rBinarySearch(arr, value, a, c-1);
    }
}

//rGCF
function rGCF(num01, num02) {
    if (num01 === num02) {
        return num01;
    }
    if (num01>num02) {
        return rGCF(num01-num02, num02);
    }
    return rGCF(num01, num02-num01);
}

// Second rGCF
function rGCF(num01, num02) {
    if (num02 === 0) {
        return num01;
    }
    return rGCF(num02, num01 % num02);
}

