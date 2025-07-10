<template>
  <div class="menu-container">
    <h1 class="menu-title">Daftar Menu Makanan Mewah</h1>

    <div class="menu-grid">
      <div v-for="(item, index) in menu" :key="index" class="menu-card">
        <div class="menu-image-container">
          <img :src="item.gambar" alt="Menu image" class="menu-image" />
        </div>
        <div class="menu-content">
          <h2 class="menu-name">{{ item.nama }}</h2>
          <p class="menu-description">{{ item.deskripsi }}</p>
          <div class="menu-footer">
            <p class="menu-price">Rp{{ item.harga.toLocaleString('id-ID') }}</p>
            <div class="menu-rating">
              <template v-for="n in 5" :key="n">
                <span :class="n <= item.rating ? 'star-filled' : 'star-empty'">★</span>
              </template>
            </div>
          </div>
          <button class="menu-button" @click="pesan(item)">Pesan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart'

export default {
  name: 'Menu',
  setup() {
    const cart = useCartStore()
    const pesan = (item) => {
      cart.tambahKeKeranjang(item)
      alert(`Berhasil menambahkan ${item.nama} ke keranjang!`)
    }

    const menu = [
      {
        nama: 'Steak Daging Wagyu Premium',
        deskripsi: 'Daging wagyu pilihan yang dimasak medium rare dengan saus jamur truffle.',
        harga: 250000,
        gambar: 'https://source.unsplash.com/600x400/?wagyu,steak',
        rating: 5
      },
      {
        nama: 'Salmon Panggang Norwegia',
        deskripsi: 'Salmon Norwegia dengan taburan lemon dan asparagus rebus.',
        harga: 180000,
        gambar: 'https://source.unsplash.com/600x400/?salmon,grilled',
        rating: 4
      },
      {
        nama: 'Pasta Carbonara Italia Asli',
        deskripsi: 'Pasta dengan saus carbonara creamy, keju parmesan, dan bacon crispy.',
        harga: 130000,
        gambar: 'https://source.unsplash.com/600x400/?pasta,carbonara',
        rating: 4
      },
      {
        nama: 'Foie Gras Panggang',
        deskripsi: 'Hidangan khas Perancis dari hati angsa pilihan dengan saus berry.',
        harga: 320000,
        gambar: 'https://source.unsplash.com/600x400/?foie,gras',
        rating: 5
      },
      {
        nama: 'Risotto Jamur Truffle',
        deskripsi: 'Risotto creamy dengan jamur dan parutan truffle hitam asli.',
        harga: 200000,
        gambar: 'https://source.unsplash.com/600x400/?risotto,truffle',
        rating: 4
      }
    ]

    return { menu, pesan }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');

.menu-container {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #ffffff, #f5f5f5, #e5e5e5);
  padding: 3rem 1.5rem;
  font-family: Arial, sans-serif;
}

.menu-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', serif;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.menu-card {
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, filter 0.3s ease;
}

.menu-card:hover {
  transform: scale(1.03);
  filter: brightness(0.95);
}

.menu-image-container {
  height: 200px;
  overflow: hidden;
}

.menu-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.menu-card:hover .menu-image {
  transform: scale(1.1);
  filter: blur(1px);
}

.menu-content {
  padding: 1.5rem;
}

.menu-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.menu-description {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.menu-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-price {
  color: #c28200;
  font-size: 1.1rem;
  font-weight: bold;
}

.menu-rating .star-filled {
  color: #fbbf24;
  font-size: 1.1rem;
}

.menu-rating .star-empty {
  color: #ccc;
  font-size: 1.1rem;
}

.menu-button {
  background-color: #c28200;
  color: white;
  border: none;
  padding: 8px 14px;
  margin-top: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.menu-button:hover {
  background-color: #a96f00;
}
</style>
