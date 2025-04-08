document.addEventListener("DOMContentLoaded", function () {
  // 1. Mobile menu functionality
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const closeMenuButton = document.getElementById("closeMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
  const mobileMenuItems = document.querySelectorAll(".mobile-menu-item");

  // Function to open mobile menu
  function openMobileMenu() {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    mobileMenuOverlay.classList.remove("hidden");
    mobileMenuOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    document.body.style.overflow = "hidden";
    document.body.style.overflowX = "hidden";
  }

  // Function to close mobile menu
  function closeMobileMenu() {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");
    mobileMenuOverlay.classList.add("hidden");
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
  }

  // Toggle mobile menu
  mobileMenuButton.addEventListener("click", openMobileMenu);

  // Close menu on X button click
  closeMenuButton.addEventListener("click", closeMobileMenu);

  // Close menu on overlay click
  mobileMenuOverlay.addEventListener("click", closeMobileMenu);

  // Close menu when menu item is clicked
  mobileMenuItems.forEach((item) => {
    item.addEventListener("click", closeMobileMenu);
  });

  // 2. Project filtering functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  // Projeleri filtreleme için JavaScript kodunda değişiklik
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Tıklanan butonun filtre değerini al
      const filterValue = this.getAttribute("data-filter");

      // Aktif buton stilini güncelle
      filterButtons.forEach((btn) => {
        // İnaktif butonlar için beyaz arka plan, gri yazı, yeşil hover
        btn.classList.remove(
          "bg-emerald-700",
          "text-white",
          "hover:text-white"
        );
        btn.classList.add(
          "bg-white",
          "text-gray-700",
          "hover:text-emerald-700"
        );
      });

      // Aktif buton için yeşil arka plan, beyaz yazı ve beyaz hover
      this.classList.remove(
        "bg-white",
        "text-gray-700",
        "hover:text-emerald-700"
      );
      this.classList.add("bg-emerald-700", "text-white", "hover:text-white");

      // Projeleri filtrele
      projectCards.forEach((card) => {
        // "all" filtresi veya kart kategorisi filtreye uyuyor mu kontrol et
        if (
          filterValue === "all" ||
          card.getAttribute("data-category") === filterValue
        ) {
          card.style.display = "block"; // Göster
        } else {
          card.style.display = "none"; // Gizle
        }
      });
    });
  });

  // 3. Yukarı çık butonu işlevselliği
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Sayfa kaydırma olayını dinle
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      // Kullanıcı 300px'den fazla kaydırdığında butonu göster
      scrollToTopBtn.classList.remove("opacity-0", "translate-y-10");
      scrollToTopBtn.classList.add("opacity-100", "translate-y-0");
    } else {
      // Kullanıcı sayfanın üstüne yakınsa butonu gizle
      scrollToTopBtn.classList.remove("opacity-100", "translate-y-0");
      scrollToTopBtn.classList.add("opacity-0", "translate-y-10");
    }
  });

  // Butona tıklama olayını ekle
  scrollToTopBtn.addEventListener("click", () => {
    // Sayfa başına yumuşak bir şekilde kaydır
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
