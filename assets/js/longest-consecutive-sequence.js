function longestConsecutive(nums) {
  if (nums.length === 0) {
      return 0;
  }

  // Convert the array into a set for O(1) lookups
  const numSet = new Set(nums);

  let maxLength = 0;

  // Iterate through each number in the array
  for (let num of nums) {
      // Check if the current number is the start of a sequence
      if (!numSet.has(num - 1)) {
          let currentNum = num;
          let currentLength = 1;

          // Check for consecutive numbers starting from the current number
          while (numSet.has(currentNum + 1)) {
              currentNum++;
              currentLength++;
          }

          // Update the maximum length
          maxLength = Math.max(maxLength, currentLength);
      }
  }

  return maxLength;
}
const nums = [100, 4, 200, 1, 3, 2];
const result = longestConsecutive(nums);
console.log(result);