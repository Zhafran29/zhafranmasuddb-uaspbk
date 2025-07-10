<template>
  <div class="history-container">
    <h1 class="history-title">Riwayat Pesanan</h1>

    <div v-if="!cart.history.length" class="history-empty">
      Belum ada pesanan yang dibayar.
    </div>

    <div v-else class="history-list">
      <div v-for="(order, index) in cart.history" :key="index" class="order-card">
        <h3 class="order-time">Waktu: {{ order.waktu }}</h3>
        <ul>
          <li v-for="(item, i) in order.pesanan" :key="i" class="order-item">
            <img :src="item.gambar" class="order-image" />
            <div class="order-info">
              <p class="item-name">{{ item.nama }}</p>
              <p class="item-qty">{{ item.jumlah }}x</p>
              <p class="item-price">Rp{{ (item.harga * item.jumlah).toLocaleString('id-ID') }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart'

export default {
  setup() {
    const cart = useCartStore()
    return { cart }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');

.history-container {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #ffffff, #f5f5f5, #e5e5e5);
  padding: 3rem 1.5rem;
  font-family: Arial, sans-serif;
}

.history-title {
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', serif;
}

.history-empty {
  text-align: center;
  color: #666;
  font-size: 1.1rem;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.order-card {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.order-time {
  color: #c28200;
  font-weight: bold;
  margin-bottom: 1rem;
}

.order-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.order-image {
  width: 100px;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
}

.order-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item-name {
  font-weight: 600;
  color: #333;
}

.item-qty,
.item-price {
  font-size: 0.95rem;
  color: #555;
}
</style>
