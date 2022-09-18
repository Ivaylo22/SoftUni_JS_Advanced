function timeToWalk(steps, stepLength, speedKmH){
    let distance = steps * stepLength;
    let speedMperS = speedKmH * 1000 / 3600;

    let breakMins = Math.floor(distance/ 500);

    let totalSecondsNeeded = distance/speedMperS;
    let minutesNeeded = Math.floor(totalSecondsNeeded/60);
    let totalMinutesNeeded = minutesNeeded + breakMins;

    let finalSecondsNeeded = (totalSecondsNeeded % 60).toFixed(0);
    let finalMinutesNeeded = (totalMinutesNeeded % 60).toFixed(0);
    let finalHoursNeeded = Math.floor(totalMinutesNeeded / 60);

    let formedHours = finalHoursNeeded < 10 ? `0${finalHoursNeeded}` : finalHoursNeeded;
    let formedMinutes = finalMinutesNeeded < 10 ? `0${finalMinutesNeeded}` : finalMinutesNeeded;
    let formedSeconds = finalSecondsNeeded < 10 ? `0${finalSecondsNeeded}` : finalSecondsNeeded;

    console.log(`${formedHours}:${formedMinutes}:${formedSeconds}`)
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5)