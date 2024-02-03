function findLongestConsecutive() {
    const inputArray = document.getElementById('inputArray').value;
    const nums = inputArray.split(',').map(Number);
    
    const result = longestConsecutive(nums);
    
    document.getElementById('result').innerText = `Length of the longest consecutive sequence: ${result}`;
  }
  
  function longestConsecutive(nums) {
    if (nums.length === 0) {
      return 0;
    }
  
    const numSet = new Set(nums);
    let longestStreak = 0;
  
    for (const num of numSet) {
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentStreak = 1;
  
        while (numSet.has(currentNum + 1)) {
          currentNum += 1;
          currentStreak += 1;
        }
  
        longestStreak = Math.max(longestStreak, currentStreak);
      }
    }
  
    return longestStreak;
  }
  