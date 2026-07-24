function dateToDay(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date(date).getDay()];
}

//enter date in mm/dd/yyyy format
let day1 = dateToDay("08/15/2026");
console.log(day1);