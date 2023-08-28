function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
  
    // Create character frequency maps
    const charMap1 = createCharMap(cleanStr1);
    const charMap2 = createCharMap(cleanStr2);
  
    // Compare character frequency maps
    return compareCharMaps(charMap1, charMap2);
  }
  
  function createCharMap(str) {
    const charMap = {};
    for (const char of str) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
  }
  
  function compareCharMaps(map1, map2) {
    if (Object.keys(map1).length !== Object.keys(map2).length) {
      return false;
    }
  
    for (const char in map1) {
      if (map1[char] !== map2[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Test cases
  console.log(areAnagrams("listen", "silent"));    // true
  console.log(areAnagrams("hello", "world"));      // false
  console.log(areAnagrams("Debit card", "Bad credit")); // true


// var isAnagram = function(s1, s2) {
//     if (s1.length !== s2.length) return false;
//     const s1Count = {};
//     const s2Count = {};
//     const n = s1.length;
  
//     for (let i = 0; i < n; i++) {
//       if (!s1Count[s1[i]]) s1Count[s1[i]] = 0;
//       if (!s2Count[s2[i]]) s2Count[s2[i]] = 0; // Fixed this line
//       s1Count[s1[i]]++;
//       s2Count[s2[i]]++; // Fixed this line
//     }
  
//     for (let ch in s1Count) {
//       if (s1Count[ch] !== s2Count[ch]) return false;
//     }
  
//     return true;
//   };
  
//   console.log(isAnagram("listen", "silent"));    // true
//   console.log(isAnagram("hello", "world"));      // false
//   console.log(isAnagram("Debit card", "Bad credit")); // true
  
  

