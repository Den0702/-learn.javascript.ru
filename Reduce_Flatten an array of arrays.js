let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(accumulator, currentValue) {
    return accumulator.concat(currentValue)
  },
  
)
// flattened is [0, 1, 2, 3, 4, 5]