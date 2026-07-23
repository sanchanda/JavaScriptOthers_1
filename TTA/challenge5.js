function filterSupportedJsBasicsTopics(topics) {
    let topiclist = [];
    let item = "";
    const supportedTopics = ['node', 'v8', "npm"];
    for (let count = 0; count < topics.length; count++) {
        item = topics[count].toLowerCase().trim();
        if (supportedTopics.includes(item)) {
            if (!topiclist.includes(item))
                topiclist.push(item);
        }

    }
    return topiclist;
}

// let a = [];
// a = filterSupportedJsBasicsTopics(["NODE", " v8 ", "unknown"])
// console.log("1: ", a);
// let a1 = [];
// a1 = filterSupportedJsBasicsTopics(["node", "runtime", "node"])
// console.log("2: ", a1);
// let a2 = [];
// a2 = filterSupportedJsBasicsTopics(["npm", "node", "v8"])
// console.log("3: ", a2);