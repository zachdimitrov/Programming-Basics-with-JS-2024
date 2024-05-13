function lunchBreak(input) {
    let seriesName = input[0];
    let episodeMin = input[1];
    let breakMin = input[2];

    let lunchMin = 0.125 * breakMin;
    let restMin = 0.25 * breakMin;

    let timeLeft = breakMin - restMin - lunchMin;

    if (timeLeft >= episodeMin) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft - episodeMin)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeMin - timeLeft)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones",
"60",
"96"]);

lunchBreak(["Teen Wolf",
"48",
"60"]);
