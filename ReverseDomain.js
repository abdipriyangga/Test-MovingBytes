const ReverseDomain = (word) => {
  let words = []
  let newStr = [""]
  let count = 0
  let reversed = []
  for (let i = 0; i < word.length; i++) {
    words += word[i]
    // Split with delimiter .
    if (words.charAt(i) == ".") {
      count++;
      newStr.push('');
    } else {
      newStr[count] += words.charAt(i);
    }
  }

  for (let j = newStr.length - 1; j >= 0; j--) {
    reversed += newStr[j]
  }
  return console.log(Array.from(reversed))
}

const parameter = ["g", "o", "o", "g", "l", "e", ".", "c", "o", "m"]
const parameter2 = ["g", "o", "o", "g", "l", "e", ".", "c", "o", ".", "i", "d"]
ReverseDomain(parameter)
ReverseDomain(parameter2)