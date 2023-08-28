// Problem 4
  function productArray(A) {
    const n = A.length;
    const prefix = new Array(n).fill(1);
    const suffix = new Array(n).fill(1);
    const product = new Array(n);
  
    // Calculate prefix product
    for (let i = 1; i < n; i++) {
      prefix[i] = prefix[i - 1] * A[i - 1];
    }
  
    // Calculate suffix product
    for (let i = n - 2; i >= 0; i--) {
      suffix[i] = suffix[i + 1] * A[i + 1];
    }
  
    // Calculate product array
    for (let i = 0; i < n; i++) {
      product[i] = prefix[i] * suffix[i];
    }
  
    return product;
  }
  
  // Example usage:
  const A = [1, 2, 3, 4, 5];
  console.log(productArray(A)); // Output: [120, 60, 40, 30, 24]
  
  const B = [5, 1, 10, 1];
  console.log(productArray(B)); // Output: [10, 50, 5, 50]
  