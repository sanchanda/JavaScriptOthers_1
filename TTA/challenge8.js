function mergeJsBasicsConfig(defaultConfig, overrideConfig) {
    let merged = { ...defaultConfig };  // copy to avoid mutating original
    for (let key of Object.keys(overrideConfig)) {
        merged[key] = overrideConfig[key];  // override values
    }

    // Also add missing defaults
    if (!("retries" in merged)) {
        merged.retries = 0;
    }

    return merged;
}

let a = mergeJsBasicsConfig({ "retries": 1, "env": "dev" }, { "retries": 3 })
console.log("Test 1 :", a);

let a1 = mergeJsBasicsConfig({ "env": "qa" }, { "timeout": 5000 })
console.log("Test 2 :", a1);

let a2 = mergeJsBasicsConfig({ "env": "dev", "retries": 2 }, { "env": "stage" })
console.log("Test 3 :", a2);

/*
Input: mergeJsBasicsConfig({"retries":1,"env":"dev"}, {"retries":3})
Expected: {"retries":3,"env":"dev"}

Input: mergeJsBasicsConfig({ "env": "qa" }, { "timeout": 5000 })
Expected: { "env": "qa", "timeout": 5000, "retries": 0 }

Input: mergeJsBasicsConfig({ "env": "dev", "retries": 2 }, { "env": "stage" })
Expected: { "env": "stage", "retries": 2 }

*/