// Menunggu seluruh halaman (termasuk gambar dan elemen lain) selesai dimuat
window.addEventListener("load", function () {
  // Menjalankan fungsi setelah 3 detik (3000 milidetik)
  setTimeout(function () {
    // Mengambil elemen popup dengan ID "promoModal"
    const popup = document.getElementById("promoModal");

    // Jika elemen ditemukan
    if (popup) {
      // Menampilkan popup dengan mengatur tampilannya menjadi fleksibel
      popup.style.display = "flex";
    }
  }, 3000); // Waktu tunda 3 detik

  // Menambahkan event listener untuk klik di seluruh halaman
  // Tujuannya untuk mendeteksi klik pada tombol tutup
  document.addEventListener("click", function (e) {
    // Jika elemen yang diklik adalah tombol dengan ID "closePromoBtn"
    if (e.target && e.target.id === "closePromoBtn") {
      // Ambil ulang elemen popup
      const popup = document.getElementById("promoModal");

      // Jika popup ditemukan, sembunyikan popup
      if (popup) {
        popup.style.display = "none";
      }
    }
  });
});
