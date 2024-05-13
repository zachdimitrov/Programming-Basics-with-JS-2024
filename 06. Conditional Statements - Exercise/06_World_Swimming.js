function worldSwimming(input) {
    let recordTime = Number(input[0]);
    let lengthMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let fullTime = lengthMeters * secondsPerMeter + Math.floor(lengthMeters / 15) * 12.5;

    if (fullTime < recordTime) {
        console.log(`Yes, he succeeded! The new world record is ${(fullTime).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(fullTime - recordTime).toFixed(2)} seconds slower.`);
    }
}

worldSwimming(["10464",
"1500",
"20"]);

worldSwimming(["55555.67",
"3017",
"5.03"]);
