function getJsBasicsKeywordMeaning(term) {
    let cleanTerm = term.toLowerCase().trim();
    switch (cleanTerm) {
        case "node":
            return "runtime";
        case "v8":
            return "engine"
        case "npm":
            return "package-manager";
        case "not-a-topic":
            return "unknown";
        default:
            return "Keyword not found.";
    }
}


// let a = getJsBasicsKeywordMeaning("NODE");
// console.log("1:", a);

// a = getJsBasicsKeywordMeaning("v8");
// console.log("2:", a);

// a = getJsBasicsKeywordMeaning("not-a-topic");
// console.log("3:", a);

// a = getJsBasicsKeywordMeaning("NPM");
// console.log("4:", a);


// a = getJsBasicsKeywordMeaning("HEllo");
// console.log("5:", a);