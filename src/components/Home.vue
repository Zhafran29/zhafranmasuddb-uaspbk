<template>
  <div class="home-container">
    <div class="overlay"></div>
    <div class="home-content">
      <transition name="fade-slide" appear>
        <h1 class="home-title">Selamat Datang di Aplikasi Pemesanan Makanan Mewah</h1>
      </transition>
      <transition name="fade-slide" appear>
        <p class="home-subtitle">Nikmati berbagai pilihan makanan terbaik, elegan dan berkualitas premium.</p>
      </transition>
      <transition name="fade" appear>
        <router-link to="/menu">
          <button class="home-button">Lihat Menu</button>
        </router-link>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');

/* Gambar background dari assets */
.home-container {
  position: relative;
  height: 100vh;
  background-image: url('@/assets/alleat.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1;
}

.home-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 1.5rem;
}

.home-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
}

.home-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
}

.home-button {
  background-color: #c28200;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.home-button:hover {
  background-color: #a96f00;
  transform: scale(1.05);
}

/* Animasi */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
</style>
