// TrendyWave - Main JS
document.addEventListener("DOMContentLoaded", function() {
    // Bind shop buttons
    document.querySelectorAll(".shop-btn").forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            var product = this.getAttribute("data-product") || "product";
            var category = this.getAttribute("data-category") || "general";
            console.log("Product:", product, "| Category:", category);
            if (typeof goToShop === "function") {
                goToShop();
            }
        });
    });

    // Mobile menu toggle
    var menuBtn = document.querySelector(".mobile-menu-btn");
    if (menuBtn) {
        menuBtn.addEventListener("click", function() {
            var nav = document.querySelector("nav ul");
            if (nav) nav.classList.toggle("show");
        });
    }

    // Intersection Observer for fade-in animations
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".product-card, .trending-card, .guide-card, .category-card").forEach(function(el) {
        el.classList.add("fade-in");
        observer.observe(el);
    });
});

// CSS for fade-in animation (inject if not in CSS)
if (!document.getElementById("fade-style")) {
    var style = document.createElement("style");
    style.id = "fade-style";
    style.textContent = `
        .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.5s, transform 0.5s; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);
}
