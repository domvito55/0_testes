function minimumBribes(q: number[]): void {
  let bribes = 0;
  let chaotic = false;
  
  // Start from the end of the queue
  for (let i = q.length - 1; i >= 0; i--) {
    // Calculate how far this person has moved
    // Original position is (value - 1) since positions are 1-indexed
    const originalPosition = q[i] - 1;
    const currentPosition = i;
    const moveDistance = originalPosition - currentPosition;
    
    // If a person moved forward more than 2 positions, it's too chaotic
    if (moveDistance > 2) {
      console.log('Too chaotic')
      return;
    }
    
    // Count bribes by looking at people who are ahead of their original position
    // We only need to check at most 2 positions ahead of original
    const startCheckPosition = Math.max(0, originalPosition - 2);
    for (let j = startCheckPosition; j < i; j++) {
      if (q[j] > q[i]) {
        bribes++;
      }
    }
  }
  
  console.log(bribes);
}
minimumBribes([1,2,5,3,4,8,6,7])