// Given a string, return true or false depending on whether that string has balanced parentheses.

// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

function balancedParens(string){
    let opens = string.replace(/[^(]/g, "").length;
    let closes = string.replace(/[^)]/g, "").length;
    return opens === closes
}


console.log(balancedParens("()"));
// true

console.log(balancedParens("(Oh Noes!)("))
// false

console.log(balancedParens("((There's a bonus open paren here.)"))
// false

console.log(balancedParens(")"))
// false

console.log(balancedParens("("))
// false

console.log(balancedParens("(This has (too many closes.) ) )"))
// false

// You may consider a string with no parentheses balanced:

console.log(balancedParens("Hey...there are no parens here!"))
// true


