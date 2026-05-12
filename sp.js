// sp.js - Affiliate Link (TrendyWave)
// Change this link anytime to update all product redirects
const AFFILIATE_LINK = "https://mulebuy.com/register?ref=201219348";

function goToShop() {
    window.open(AFFILIATE_LINK, "_blank");
}

function trackProductClick(productName, category) {
    console.log("Product clicked:", productName, "| Category:", category);
    goToShop();
}

// Auto-bind all .shop-btn elements
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".shop-btn").forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            var product = this.getAttribute("data-product") || "product";
            var category = this.getAttribute("data-category") || "general";
            trackProductClick(product, category);
        });
    });
});
