function isValidJsBasicsIdentifier(name) {
    let cleanName = name.trim();
    let validIdentifier = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(cleanName);

    const keywords = [
        'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger',
        'default', 'delete', 'do', 'else', 'export', 'extends', 'finally',
        'for', 'function', 'if', 'import', 'in', 'instanceof', 'new', 'return',
        'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void',
        'while', 'with', 'yield', 'let', 'static', 'await', 'implements',
        'interface', 'package', 'private', 'protected', 'public', 'enum',
        'true', 'false', 'null'
    ];

    if (validIdentifier && !keywords.includes(cleanName)) {
        return true;
    } else {
        return false;
    }
}

// let a = isValidJsBasicsIdentifier("1login");
// console.log(a);

// a = isValidJsBasicsIdentifier("loginButton");
// console.log(a);

// a = isValidJsBasicsIdentifier("let");
// console.log(a);

// a = isValidJsBasicsIdentifier("$submit");
// console.log(a);
