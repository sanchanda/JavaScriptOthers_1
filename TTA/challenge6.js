function countPassingJsBasicsChecks(results) {
    let passCount = 0;
    let item;
    for (let count = 0; count < results.length; count++) {
        item = results[count].toLowerCase().trim().includes("pass");
        if (item) {
            passCount++;
        }
    }
    return passCount;
}


// let a = countPassingJsBasicsChecks(["login-pass", "api-fail", "logout-pass"]);
// console.log("1:", a);
// a = countPassingJsBasicsChecks(["SETUP PASS", "CONFIG PASS"]);
// console.log("2:", a);

// a = countPassingJsBasicsChecks(["one-fail", "two-skip"]);
// console.log("3:", a);