function sameNumbers(num){
    let numToString = num.toString();
    let isSimilar = true;
    let firstDigit = numToString[0];
    let sum = Number(firstDigit);
    for (let i = 1; i < numToString.length; i++){
        if(numToString[i] != firstDigit){
            isSimilar = false;
        }
        sum += Number(numToString[i]);
    }
    console.log(isSimilar);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);