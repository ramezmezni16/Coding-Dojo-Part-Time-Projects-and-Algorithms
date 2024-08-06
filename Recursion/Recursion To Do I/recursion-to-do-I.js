//rSigma
function rSigma(num) {
    const intNum = Math.floor(num);
    if (intNum <= 0) {
        return 0;
    }
    return intNum + rSigma(intNum - 1);
}

//rFact
function rFact(num) {
    const intNum = Math.floor(num);
   if (intNum <= 0) {
        return 1;
    }
    return intNum * rFact(intNum - 1);
}
