/*
In this challenge, you’ll write a decoder.

Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

The number in the string represents how many characters each letter should shift. For example:

>>> "1a" // "b"
>>> "3ce" // "fh"
>>> "2fcjjm" // "hello"
*/
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const reg = new RegExp('^[0-9]+$');

const decoder = word => {
  let ans = []
  let num = word.substr(0, 1)
  word = word.substring(1)


  for (let i = 0; i < word.length; i++) {    
    console.log(word[i])
    let index = alphabet.indexOf(word[i])
    let newIndex = alphabet[parseInt(index) + parseInt(num)]
      
    ans.push(newIndex)

  }
  
  let answerString = ans.join('')
  return answerString
}

console.log(decoder("2fcjjm"))