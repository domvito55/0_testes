function truckTour(petrolpumps: number[][]): number {
    // Write your code here
    let numPetrol = petrolpumps.length
    let totalPetrol = 0
    let totalDistance = 0
    for(let start = 0; start < numPetrol; start++){
      let sumPetrol = 0
      let sumDistance = 0
      let current = 0
      for(current = start; current < numPetrol; current++){
        sumPetrol += petrolpumps[current][0]
        sumDistance += petrolpumps[current][1]
        totalPetrol += petrolpumps[current][0]
        totalDistance += petrolpumps[current][1]
        if(sumDistance > sumPetrol){
          start = current
          break
        }
      }
      if(current === numPetrol){
        if(totalPetrol >= totalDistance){
          return start
        }
        return -1
      }
    }
    return -1

}

function truckTour2(petrolpumps: number[][]): number {
  const n = petrolpumps.length;
  
  // Try each starting point
  for (let start = 0; start < n; start++) {
    let currentFuel = 0;
    let canComplete = true;
    
    // Try to complete the circle starting from this pump
    for (let i = 0; i < n; i++) {
      // Get the current pump (with wrapping)
      const currentPumpIndex = (start + i) % n;
      const [fuel, distance] = petrolpumps[currentPumpIndex];
      
      // Add fuel and subtract distance
      currentFuel += fuel - distance;
      
      // If we run out of fuel, this starting point won't work
      if (currentFuel < 0) {
        canComplete = false;
        break;
      }
    }
    
    // If we completed the circle, return this starting point
    if (canComplete) {
      return start;
    }
  }
  
  // This should not happen with the given constraints
  return -1;
}

function truckTour3(petrolpumps: number[][]): number {
  const n = petrolpumps.length;
  let start = 0;
  let totalFuel = 0;
  let currentFuel = 0;
  
  for (let i = 0; i < n; i++) {
    const [fuel, distance] = petrolpumps[i];
    const diff = fuel - distance;
    
    // Add to current fuel
    currentFuel += diff;
    totalFuel += diff;
    
    // If we run out of fuel
    if (currentFuel < 0) {
      // Start from the next station
      start = i + 1;
      currentFuel = 0;
    }
  }
  
  // If total fuel is negative, it's impossible to complete the circle
  // But problem states there will be a solution
  return totalFuel >= 0 ? start : -1;
}

let test = [
  [1, 5],
  [10, 3],
  [3, 4]
]

let a = truckTour(test)
let b = truckTour2(test)
let c = truckTour3(test)
console.log(a,b,c)