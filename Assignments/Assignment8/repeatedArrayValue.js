function findRepeatedElements(arr) {
    const frequencyMap = {};
    const repeatedElements = [];
  
    for (const num of arr) {
      if (frequencyMap[num]) {
        frequencyMap[num]++;
      } else {
        frequencyMap[num] = 1;
      }
    }
  
    for (const num in frequencyMap) {
      if (frequencyMap[num] > 1) {
        repeatedElements.push({
          value: parseInt(num),
          frequency: frequencyMap[num]
        });
      }
    }
  
    return repeatedElements;
  }
  
  const integerArray = [1, 2, 3, 2, 4, 4, 5, 6, 5, 7, 8, 8, 8];
  const repeatedElements = findRepeatedElements(integerArray);
  
  console.log("Repeated Elements:", repeatedElements);
  