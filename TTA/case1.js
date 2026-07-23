//JavaScript Coding Test Part 1 - Basics, Setup, Identifiers & Literals - 15 Coding Questions
//https://app.thetestingacademy.com/student/live-test/javascript-coding-part-1/session

//Input: normalizeJsBasicsLabel(" Login Button ")
//Expected: "js-basic-login-button"

function normalizeJsBasicsLabel(label) {
    let cleanLabel1 = label.replace(/[@@]/g, ' ');
    let cleanLabel = cleanLabel1.replace(/[^a-zA-Z0-9\s]/g, '');
    let lowerCaseValue = cleanLabel.toLowerCase().trim().split(/\s+/).join("-");
    return lowerCaseValue ? "js-basic-" + lowerCaseValue : "js-basic";

}


// let b = normalizeJsBasicsLabel("---Search@@Box---");
// console.log(b);

// b = normalizeJsBasicsLabel("Login Button");
// console.log(b);

// b = normalizeJsBasicsLabel(" ");
// console.log(b);

// b = normalizeJsBasicsLabel("User Profile: Edit!");
// console.log(b);
