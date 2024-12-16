function fibonacci(n) {
    const series = [0, 1]; // Inisialisasi deret dengan dua angka pertama : 0 dan 1
    // Menghitung elemen berikutnya dalam deret Fibonacci hingga elemen ke-n
    for (let i = 2; i <= n; i++) {
      series.push(series[i - 1] + series[i - 2]); // Setiap elemen adalah jumlah dari dua elemen sebelumnya
    }
    return series.slice(0, n + 1); // Mengembalikan deret hingga elemen ke-n
  }
  
  // Jangan hapus kode di bawah ini!
  export default fibonacci;
  