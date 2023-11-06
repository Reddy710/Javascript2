function powerN(a, n) {
    if (n === 0) {
      return 1;
    } else {
      return a * powerN(a, n - 1);
    }
  }
  
  const result = powerN(2, 3); 
  console.log(result);
  