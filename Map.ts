function lonelyinteger(a: number[]): number {
    // Write your code here
    let counter = new Map<number, number>
    a.forEach(
      element => {
        if(counter.has(element)){
          counter.set(element, counter.get(element)! + 1)
        } else {
          counter.set(element, 1)
        }
      }
    )
    
    for (let [num, freq] of counter.entries()){
      if (freq === 1) return num
    }
    
    return 0

}

console.log(lonelyinteger([1,2,3,7,10,1,2,10,3]))