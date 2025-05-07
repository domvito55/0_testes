function plusMinus(arr: number[]): void {
    // Write your code here
  let counter = arr.reduce((counts, element) => {
    if(element > 0){
        counts['positive']++;
    } else if (element < 0){
        counts['negative']++;
    } else {
        counts['zero']++;
    }
    return counts
  }, {positive: 0, negative: 0, zero: 0}
  )

  // type counterType = {positive: number, negative: number, zero: number}
  // for (let key in counter) {
  //   console.log(counter[key as keyof counterType])
  // }

  // for (let value of Object.values(counter)) {
  //   console.log((value/arr.length).toFixed(6))
  // }

  for (let [key, value] of Object.entries(counter)) {
    console.log((value/arr.length).toFixed(6))
  }

}

plusMinus([1,1,1,-1,-1,0])

console.log('-'.repeat(10))

function miniMaxSum(arr: number[]): void {
    // Write your code here
  let acc = arr.reduce((acc, element)=>{
    acc[0] += element;
    if (element < acc[1]) acc[1] = element
    if (element > acc[2]) acc[2] = element    
    return acc
  }, [0,Infinity,-Infinity])
  console.log(acc[0]-acc[2], acc[0]-acc[1])
}

miniMaxSum([1,2,3,4,5])

console.log('-'.repeat(10))

function lonelyinteger(a: number[]): number {
    // Write your code here
    let result = 0
    a.forEach(
      element => {
        result ^= element
      }
    )
    return result

}

console.log(lonelyinteger([1,2,3,7,10,1,2,10,3]))

console.log('-'.repeat(10))

function countingSort(arr: number[]): number[] {
    // Write your code here
    let result = new Array(100).fill(0)
    arr.forEach(
      num => {
        result[num]++
      }
    )
    
    return result

}

console.log(countingSort([1,1,3,2,1]).join(', '))