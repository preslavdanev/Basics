function onTimeForTheExam(input) {
    let testHours = Number(input[0]);
    let testMins = Number(input[1]);
    let arrivalHours = Number(input[2]);
    let arrivalMins = Number(input[3]);

    let totalTestMins = testHours * 60 + testMins;
    let totalArrivalMins = arrivalHours * 60 + arrivalMins;
    let diffrence = Math.abs(totalArrivalMins - totalTestMins);
    let diffHours = Math.floor(diffrence / 60);
    let diffMins = diffrence % 60;

    if (diffMins === 0 || (diffMins < 10 && diffHours > 0)) {
        diffMins = `0${diffMins}`
    }
    if (totalArrivalMins === totalTestMins) {
        console.log('On time');

    } else if ((totalArrivalMins > totalTestMins) && (diffrence < 60)) {
        console.log('Late');
        console.log(`${diffrence} minutes after the start`);
    } else if ((totalArrivalMins > totalTestMins) && (diffrence >= 60)) {
        console.log('Late');
        console.log(`${diffHours}:${diffMins} hours after the start`);
    } else if (diffrence <= 30) {
        console.log('On time');
        console.log(`${diffMins} minutes before the start`);
    } else if (diffrence > 30 && diffrence < 60) {
        console.log('Early');
        console.log(`${diffMins} minutes before the start`);
    } else {
        console.log('Early');
        console.log(`${diffHours}:${diffMins} hours before the start`);
    }
}
onTimeForTheExam(["11",
"30",
"8",
"12"])


