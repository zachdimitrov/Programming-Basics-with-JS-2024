function vacationBooks(input) {
    let pagesInBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysToRead = Number(input[2]);

    let allTime = pagesInBook / pagesPerHour;
    console.log(allTime / daysToRead);
}

vacationBooks(["212", "20", "2"]);
vacationBooks(["432", "15", "4"]);
