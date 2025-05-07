function caesarCipher(s: string, k: number): string {
    // Write your code here
  let a = 'a'.charCodeAt(0)
  let A = 'A'.charCodeAt(0)
  
  let dict = new Map<string, string>
  for(let i = 0; i < 26; i++){
    dict.set(String.fromCharCode(i+a), String.fromCharCode(a+((i+k)%26)))
    dict.set(String.fromCharCode(i+A), String.fromCharCode(A+((i+k)%26)))
  }
  
  let result = ''
  for(let char of s){
    result += dict.get(char) || char
  }
  
  return result

  // let a = 'a'.charCodeAt(0)
  // let z = 'z'.charCodeAt(0)
  // let A = 'A'.charCodeAt(0)
  // let Z = 'Z'.charCodeAt(0)
  
  // let array = s.split("")
  // array = array.map(
  //   (char) => {
  //     if(char.match(/[a-z]/)){
  //       return (
  //         String.fromCharCode(
  //           a + ((char.charCodeAt(0)-a+k)%(z+1-a))
  //         )
  //       )
  //     }
  //     if(char.match(/[A-Z]/)){
  //       return (
  //         String.fromCharCode(
  //           A + ((char.charCodeAt(0)-A+k)%(Z+1-A))
  //         )
  //       )
  //     }
  //     return char
  //   }
  // )
  // return array.join("")
}

console.log(
  caesarCipher('middle-Outz', 2)
)

console.log('-'.repeat(10))
// #################################

function isNotPalindrome(s: string){
    let half = s.length/2
    for(let i = 0; i < half; i++){
      if(s[i] !== s[(s.length-1)-i]) return i
    }  
    return 0
}

function palindromeIndex(s: string): number {
    // Write your code here
    let diffCharIndex = isNotPalindrome(s)
    if(diffCharIndex){
      let rigthWord = s.slice(diffCharIndex+1,(s.length - diffCharIndex))
      let diff = isNotPalindrome(rigthWord)
      if(!diff) return ((s.length-1) - diffCharIndex)

      let leftWord = s.slice(diffCharIndex, (s.length-diffCharIndex)-1)
      diff = isNotPalindrome(leftWord)
      if(!diff) return diffCharIndex      
    }
    return -1
}

console.log(palindromeIndex('assdfdsa'))

console.log('-'.repeat(10))
// #################################

function superDigit(n: string, k: number): number {
    // Write your code here
    if(n.length === 1 && k === 1) return Number.parseInt(n)
    let sum = 0
    for(let char of n){
      sum += Number.parseInt(char)
    }
    sum *= k
    let newString = sum.toString()
    return superDigit(newString, 1)
}
console.log(superDigit('123', 3))