function timePlus(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let newMinutes = minutes + 15;

    if (newMinutes < 60) {
        console.log(`${hours}:${newMinutes}`);
    } else {
        let newHours = hours + 1;
        newMinutes = newMinutes - 60;
        if (newHours >= 24) {
            newHours = newHours - 24;
        }

        if (newMinutes < 10) {
            console.log(`${newHours}:0${newMinutes}`);
        } else {
            console.log(`${newHours}:${newMinutes}`);
        }
    }
}

timePlus(["1", "46"]);
timePlus(["0", "01"]);
timePlus(["23", "59"]);
timePlus(["11", "08"]);
timePlus(["12", "49"]);