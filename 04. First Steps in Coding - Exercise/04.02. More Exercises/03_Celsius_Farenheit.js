function celsiusFarenheit(input) {
    let degrees = Number(input[0]);
    let converted = 9/5*degrees + 32;
    console.log(converted.toFixed(2));
}

celsiusFarenheit(["25"]);
celsiusFarenheit(["0"]);
celsiusFarenheit(["-5.5"]);
celsiusFarenheit(["32.3"]);