function sleepyTom(input) {
    let restDays = +input[0];

    let playTime = restDays * 127 + (365 - restDays) * 63;

    if (playTime <= 30000) {
        console.log("Tom sleeps well");
        let hours = Math.floor((30000 - playTime) / 60);
        let minutes = (30000 - playTime) % 60;
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    } else {
        console.log("Tom will run away");
        let hours = Math.floor((playTime - 30000) / 60);
        let minutes = (playTime - 30000) % 60;
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    }
}

sleepyTom(["20"]);
sleepyTom(["113"]);
