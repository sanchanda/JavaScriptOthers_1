function summarizeJsBasicsResults(results) {
    let passCount = 0;
    let failCount = 0;
    let skipCount = 0;
    let othersCount = 0;

    let item;
    for (let count = 0; count < results.length; count++) {
        item = results[count].toLowerCase().trim();
        if (item.includes("pass")) {
            passCount++;
        } else if (item.includes("fail")) {
            failCount++;
        } else if (item.includes("skip")) {
            skipCount++;
        }
    }
    return `{"failed":${failCount},"passed":${passCount},"skipped":${skipCount},"total":${results.length}}`;
}


//return `{ "total": ${results.length}, "passed": ${passCount}, "failed": ${failCount}, "skipped": ${skipCount} }`;
// let a = [];
// a = summarizeJsBasicsResults(["login-pass", "api-fail", "profile-skip"])
// console.log("1: ", a);

// a = summarizeJsBasicsResults([]);
// console.log("2: ", a);

// a = summarizeJsBasicsResults(["a-pass", "b-pass"]);
// console.log("3: ", a);