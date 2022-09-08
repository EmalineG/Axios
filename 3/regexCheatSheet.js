// / // Expression Boundaries
// [ // Start Character Group
// ^ // Not operator in character group
// a // The character "a"
// ] // End character group

//Example:
// function balancedParens(string){
//     let opens = string.replace(/[^(]/g, "").length;
//     let closes = string.replace(/[^)]/g, "").length;
//     return opens === closes
// }


// console.log(balancedParens("()"));