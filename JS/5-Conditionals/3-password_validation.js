function validatePasswordIfElse(password) {
    if (password.length > 7) {
        console.log("Strong");
    } else {
        console.log("Weak");
    }
}

function validatePasswordTernary(password) {
    console.log(password.length > 7 ? "Strong" : "Weak");
}

function validatePasswordLogical(password) {
    console.log((password.length > 7 && "Strong") || "Weak");
}

function validatePasswordAdvanced(password) {
    let longPassword = password.length > 7;
    console.log(
        longPassword
            ? /.*[A-Z].*/.test(password)
                ? "Very strong"
                : "Strong"
            : "Weak"
    );
}

validatePasswordIfElse("a2d3f4");
validatePasswordIfElse("a2d3f4asdf");
validatePasswordTernary("a2d3f4");
validatePasswordTernary("a2d3f4asdf");
validatePasswordLogical("a2d3f4");
validatePasswordLogical("a2d3f4asdf");
validatePasswordAdvanced("a2d3f4");
validatePasswordAdvanced("a2d3f4asdf");
