// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  // Menghitung total harga dari item yang dipesan
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  
  // Membuat order baru dengan id unik dan status default 'Menunggu'
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu'
  };

  // Menambahkan order baru ke daftar orders
  orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  // Mencari order berdasarkan id dan memperbarui statusnya jika ditemukan
  const order = orders.find(order => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  // Menghitung total pendapatan dari semua order dengan status 'Selesai'
  return orders
    .filter(order => order.status === 'Selesai') // Hanya mengambil order yang selesai
    .reduce((totalRevenue, order) => totalRevenue + order.totalPrice, 0); // Menjumlahkan total harga
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  // Menghapus order dari daftar orders berdasarkan id
  orders = orders.filter(order => order.id !== id);
}

// Mengekspor semua fungsi dan variabel
export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
