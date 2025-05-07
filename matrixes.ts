function diagonalDifference(arr: number[][]): number {
    // Write your code here
    // let mainDiagonal = 0
    // let reverseDiagonal = 0
    // for(let i=0; i<arr.length; i++){
    //   mainDiagonal += arr[i][i]
    //   reverseDiagonal += arr[i][(arr.length-1)-i]
    // }
    // return Math.abs(mainDiagonal - reverseDiagonal)

    let sums = arr.reduce(
      (sums, row, index) =>{
        sums[0] += row[index]
        sums[1] += row[(arr.length-1)-index]

        return sums
      }, [0,0]
    )
    return Math.abs(sums[0] - sums[1])

}

console.log(
  diagonalDifference(
    [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12]
    ]
  )
)

console.log('-'.repeat(10))
//  #################################################
function flippingMatrix(matrix: number[][]): number {
    // Write your code here
    let n = matrix.length/2
    let sum = 0
    for(let i = 0; i < n; i++){
      for(let j = 0; j < n; j++){
        sum += Math.max(
          matrix[i][j],
          matrix[i][(2*n-1)-j],
          matrix[(2*n-1)-i][j],
          matrix[(2*n-1)-i][(2*n-1)-j]
        )
      }
    }
    return sum
}

console.log(
  flippingMatrix([
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]

  ])
)

console.log('-'.repeat(10))
//  #################################
function gridChallenge(grid: string[]): string {    
    let last = new Array(grid.length).fill('a')
    let finalResult = 'YES'
    for (let i = 0; i < grid.length; i++){
        let array = grid[i].split("")
        array.sort()
        for(let j = 0; j<array.length; j++){
          if(array[j] < last[j]){
            return 'NO'
          }          
        }
        last = array
    }
    return 'YES'
}

console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']))