function rot13(str) {
    let x = str.toLowerCase();
    let y = [];
    let n = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < x.length; i++) {
      if (alphabet.indexOf(x.charAt(i)) > -1) {
        n += alphabet.charAt((alphabet.indexOf(x.charAt(i)) + 1) % 26);
      } else {
        n += x.charAt(i);
      }
    }
    return n;
  }
  
  console.log(rot13("i love cryptography!"));