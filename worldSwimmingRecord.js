function worldSwimmingRecord(input) {

    let worldRecordSecunds = Number(input[0]);
    let distanceInSecunds = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let totalSecs = distanceInSecunds * timeForMeter;
    let delay = Math.floor(distanceInSecunds / 15) * 12.5;
    let finalTime = totalSecs + delay;

    if (finalTime < worldRecordSecunds) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);

    } else {
        console.log(`No, he failed! He was ${(finalTime - worldRecordSecunds).toFixed(2)} seconds slower.`);
    }

}
worldSwimmingRecord(["10464", "1500", "20"])