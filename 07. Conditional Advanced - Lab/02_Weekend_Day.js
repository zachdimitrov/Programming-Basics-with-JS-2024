function weekendDay(input) {
    let dayOfWeek = input[0];

    if (dayOfWeek == "Saturday" || dayOfWeek == "Sunday") {
        console.log("Weekend");
    } else if (dayOfWeek == "Monday" || dayOfWeek == "Tuesday" || dayOfWeek == "Wednesday" || dayOfWeek == "Thursday" || dayOfWeek == "Friday") {
        console.log("Working day");
    } else {
        console.log("Error");
    }
}

weekendDay(["Monday"]);
weekendDay(["Sunday"]);
weekendDay(["April"]);