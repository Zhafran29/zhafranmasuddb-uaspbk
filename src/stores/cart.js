import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    history: []
  }),
  actions: {
    tambahKeKeranjang(item) {
      const existing = this.items.find(i => i.nama === item.nama)
      if (existing) {
        existing.jumlah += 1
      } else {
        this.items.push({ ...item, jumlah: 1 })
      }
    },
    kosongkanKeranjang() {
      this.items = []
    },
    bayarSekarang() {
      if (this.items.length) {
        const waktu = new Date().toLocaleString('id-ID')
        this.history.push({
          waktu,
          pesanan: [...this.items]
        })
        this.kosongkanKeranjang()
      }
    }
  }
})
