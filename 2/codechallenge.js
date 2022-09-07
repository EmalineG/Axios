function makeUnique(string) {
    let input = string
    arr = Array.from(input)
    let newUnique = []
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; i < arr.length; j++) {
        if (i = j) {
          let duplicate = arr.splice(i, 1)
          newUnique.push(duplicate)
        } else {
          i++;
        }
        j++
      }
    }
  }
  console.log(makeUnique('iwanttoclimbamountain'));

//   function makeUnique(string){
//     let unique = [];
//     for(let i = 0; i < string.length; i++){
//         if(string.indexOf(string[i]) === i){
//             unique.push(string[i])
//         }
//     }
//     return unique.join('')
//   }