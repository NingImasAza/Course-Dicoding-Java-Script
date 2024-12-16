import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Uji Penjumlahan dengan Dua Angka Positif
test('Penjumlahan 5 + 10 seharusnya menghasilkan 15', () => {
  const result = sum(5, 10);
  assert.strictEqual(result, 15, '5 + 10 seharusnya menghasilkan 15');
});

// Uji Penjumlahan dengan Argumen Bukan Angka
test('Penjumlahan dengan argumen bukan angka seharusnya menghasilkan 0', () => {
  const result = sum(5, 'a');
  assert.strictEqual(result, 0, 'Argumen bukan angka seharusnya menghasilkan 0');
});

// Uji Penjumlahan dengan Angka Negatif
test('Penjumlahan dengan angka negatif seharusnya menghasilkan 0', () => {
  const result = sum(5, -3);
  assert.strictEqual(result, 0, 'Penjumlahan 5 + -3 seharusnya menghasilkan 0');
});

// Uji Penjumlahan dengan Kedua Argumen Negatif
test('Penjumlahan -5 + -10 seharusnya menghasilkan 0', () => {
  const result = sum(-5, -10);
  assert.strictEqual(result, 0, 'Penjumlahan -5 + -10 seharusnya menghasilkan 0');
});

// Uji Penjumlahan dengan Salah Satu Argumen 0
test('Penjumlahan dengan 0 seharusnya menghasilkan angka yang sama', () => {
  const result = sum(0, 10);
  assert.strictEqual(result, 10, '0 + 10 seharusnya menghasilkan 10');
});
