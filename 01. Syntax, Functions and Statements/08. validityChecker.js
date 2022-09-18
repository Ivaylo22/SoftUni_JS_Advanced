function checker(x1, y1, x2, y2){   
    let isOneToZeroInt = "invalid";
    let isTwoToZeroInt = "invalid";
    let isOneToTwoInt = "invalid";

    let oneToZero = Math.sqrt(Math.pow((x1 - 0), 2) + Math.pow((y1 - 0), 2))
    if (Number.isInteger(oneToZero)){
        isOneToZeroInt = "valid";
    }
    console.log(`{${x1}, ${y1}} to {0, 0} is ${isOneToZeroInt}`);

    let twoToZero = Math.sqrt(Math.pow((x2 - 0), 2) + Math.pow((y2 - 0), 2))
    if (Number.isInteger(twoToZero)){
        isTwoToZeroInt = "valid";
    }
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isTwoToZeroInt}`);

    let twoToOne = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
    if (Number.isInteger(twoToOne)){
        isOneToTwoInt = "valid";
    }
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isOneToTwoInt}`);

}
checker(3, 0, 0, 4);
checker(2, 1, 1, 1);