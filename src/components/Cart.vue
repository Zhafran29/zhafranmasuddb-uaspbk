<template>
  <div class="cart-container">
    <h1 class="cart-title">Keranjang Belanja</h1>

    <div v-if="cart.items.length === 0" class="empty-cart">
      <p>Keranjang masih kosong. Silakan pilih makanan dari menu.</p>
    </div>

    <div v-else class="cart-content">
      <ul class="cart-list">
        <li v-for="(item, index) in cart.items" :key="index" class="cart-item">
          <img :src="item.gambar" class="cart-image" />
          <div class="cart-info">
            <h3 class="cart-name">{{ item.nama }}</h3>
            <p class="cart-desc">{{ item.deskripsi }}</p>
            <p class="cart-qty">Jumlah: {{ item.jumlah }}</p>
            <p class="cart-price">
              Total: Rp{{ (item.harga * item.jumlah).toLocaleString('id-ID') }}
            </p>
          </div>
        </li>
      </ul>

      <div class="cart-summary">
        <p class="cart-total">Total Harga: <strong>Rp{{ totalHarga.toLocaleString('id-ID') }}</strong></p>
        <button class="clear-button" @click="cart.kosongkanKeranjang">Kosongkan Keranjang</button>
        <button class="checkout-button" @click="bayar">Bayar Sekarang</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart'
import { computed } from 'vue'

export default {
  setup() {
    const cart = useCartStore()

    const totalHarga = computed(() =>
      cart.items.reduce((acc, item) => acc + item.harga * item.jumlah, 0)
    )

    const bayar = () => {
      cart.bayarSekarang()
      alert('Pembayaran berhasil! Pesanan masuk ke riwayat.')
    }

    return { cart, totalHarga, bayar }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');

.cart-container {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #ffffff, #f5f5f5, #e5e5e5);
  padding: 3rem 1.5rem;
  font-family: Arial, sans-serif;
}

.cart-title {
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', serif;
}

.empty-cart {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
}

.cart-content {
  max-width: 1000px;
  margin: 0 auto;
}

.cart-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cart-item {
  display: flex;
  gap: 1.5rem;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 1rem;
  transition: transform 0.3s ease;
}

.cart-item:hover {
  transform: scale(1.02);
}

.cart-image {
  width: 140px;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
}

.cart-info {
  flex-grow: 1;
}

.cart-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
}

.cart-desc {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.cart-qty,
.cart-price {
  font-size: 1rem;
  color: #444;
  margin: 0.2rem 0;
}

.cart-summary {
  margin-top: 2rem;
  text-align: right;
}

.cart-total {
  font-size: 1.2rem;
  font-weight: bold;
  color: #c28200;
  margin-bottom: 1rem;
}

.clear-button {
  background-color: #c28200;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.clear-button:hover {
  background-color: #a96f00;
}

.checkout-button {
  background-color: #1e90ff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.checkout-button:hover {
  background-color: #156ec0;
}
</style>
