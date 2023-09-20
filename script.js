function calculateMinCost(ropeLengths) {
  const minHeap = [...ropeLengths];

  function connectRopes(ropeLengths) {
    let cost = 0;

    while (ropeLengths.length > 1) {
      const min1 = Math.min(...ropeLengths);
      const index1 = ropeLengths.indexOf(min1);
      ropeLengths.splice(index1, 1);

      const min2 = Math.min(...ropeLengths);
      const index2 = ropeLengths.indexOf(min2);
      ropeLengths.splice(index2, 1);

      const connectedRope = min1 + min2;
      cost += connectedRope;

      ropeLengths.push(connectedRope);
    }

    return cost;
  }

  return connectRopes(minHeap);
}