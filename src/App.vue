<template>
  <div id="app">
    <nav class="navbar">
      <h1 class="title">🍽️ Food Order App</h1>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/menu">Menu</router-link></li>
        <li><router-link to="/cart">Cart</router-link></li>
        <li><router-link to="/order-history">Order History</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/admin/menu-management">Admin - Menu</router-link></li>
        <li><router-link to="/admin/order-management">Admin - Orders</router-link></li>
      </ul>
    </nav>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
}

#app {
  text-align: center;
}

.navbar {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.title {
  margin: 0;
  font-size: 1.5rem;
}

.nav-links {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav-links li a.router-link-exact-active {
  border-bottom: 2px solid #f1c40f;
}

.nav-links li a:hover {
  color: #f1c40f;
}

.content {
  padding: 2rem;
}
</style>
