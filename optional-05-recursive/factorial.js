function factorial(n) {
    if (n === 0 || n === 1) return 1; // Faktorial dari 0 atau 1 adalah 1
    return n * factorial(n - 1); // Kalikan n dengan faktorial dari (n-1)
  }
  
  // Jangan hapus kode di bawah ini!
  export default factorial;  