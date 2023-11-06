function countSetBits(number) {
    let count = 0;
    while (number) {
        count += number & 1; 
        number >>= 1;
    }
    return count;
}
