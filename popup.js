window.addEventListener("load", function () {
  setTimeout(function () {
    const popup = document.getElementById("promoModal");
    if (popup) {
      popup.style.display = "flex";
    }
  }, 3000);

  // Tombol tutup
  document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "closePromoBtn") {
      const popup = document.getElementById("promoModal");
      if (popup) {
        popup.style.display = "none";
      }
    }
  });
});
