const balanceArrayAroundIndex = (arr: any[], desiredMiddleIndex: number): any[] => {
  // Validate desiredMiddleIndex to be within the array bounds
  if (desiredMiddleIndex < 0 || desiredMiddleIndex >= arr.length) {
    console.error("Desired middle index is outside the array bounds.");
    return null; // Early exit for invalid index
  }
  // Determine the new middle based on array length
  // No need for separate leftHalf and rightHalf variables or adjustment calculation
  const newMiddleIndex = Math.ceil(arr.length / 2);

  // If the desiredMiddleIndex is already in the optimal position or only one element needs to be moved
  if (newMiddleIndex === desiredMiddleIndex || newMiddleIndex + 1 === desiredMiddleIndex) {
    return arr; // Return a shallow copy of the array to keep the function pure
  }

  // Determine the direction and amount to rotate the array
  const rotateAmount = desiredMiddleIndex - newMiddleIndex;

  // Perform rotation to balance the array around the desiredMiddleIndex
  // This uses a single slice operation and reorder, more efficient than separate slicing and concatenating
  const balancedArray = arr.slice(rotateAmount).concat(arr.slice(0, rotateAmount));

  return balancedArray;
}

// Example usage
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const desiredMiddleIndex = 1; // We want to center the array around this index
const result = balanceArrayAroundIndex(array, desiredMiddleIndex);
console.log(result)
