/*
- 90 and above => EXCELLENT.
- 75 to 89 => GOOD.
- 50 to 74 => NEEDS_PRACTICE.
- Below 50 => REVISIT.
*/

function classifyJsBasicsScore(score) {
    switch (true) {
        case score >= 90:
            return "EXCELLENT";
            break
        case score >= 75:
            return "GOOD";
            break;
        case score >= 50:
            return "NEEDS_PRACTICE";
            break;
        case score < 50:
            return "REVISIT";
            break;
        default:
            return "PLEASE ENTER VALID SCORE";
    }
}

// let a = classifyJsBasicsScore(95);
// console.log(a);

// a = classifyJsBasicsScore(76);
// console.log(a);

// a = classifyJsBasicsScore(55);
// console.log(a);

// a = classifyJsBasicsScore(30);
// console.log(a);

// a = classifyJsBasicsScore(130);
// console.log(a);

// a = classifyJsBasicsScore("hI");
// console.log(a);

