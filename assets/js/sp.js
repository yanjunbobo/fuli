// StylePulse Picks — Affiliate Link Handler (sp.js)
// Handles data-affiliate attribute for product cards
// Replace placeholder hrefs with actual affiliate links

(function() {
    'use strict';

    // Affiliate link mappings (replace with actual affiliate IDs)
    const affiliateLinks = {
        'blazer-001': 'https://example.com/product/blazer-001?aff=stylepulse',
        'sneakers-001': 'https://example.com/product/sneakers-001?aff=stylepulse',
        'jewelry-001': 'https://example.com/product/jewelry-001?aff=stylepulse',
        'jeans-001': 'https://example.com/product/jeans-001?aff=stylepulse',
        'hoodie-001': 'https://example.com/product/hoodie-001?aff=stylepulse',
        'watch-001': 'https://example.com/product/watch-001?aff=stylepulse',
        'boots-001': 'https://example.com/product/boots-001?aff=stylepulse',
        'tote-001': 'https://example.com/product/tote-001?aff=stylepulse'
    };

    // Initialize affiliate buttons on page load
    function initAffiliateLinks() {
        const affiliateButtons = document.querySelectorAll('[data-affiliate="true"]');

        affiliateButtons.forEach(button => {
            const productId = button.getAttribute('data-product');

            if (productId && affiliateLinks[productId]) {
                // Convert button to anchor if needed, or set href
                const link = document.createElement('a');
                link.href = affiliateLinks[productId];
                link.className = button.className;
                link.textContent = button.textContent;
                link.setAttribute('data-affiliate', 'true');
                link.setAttribute('data-product', productId);
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener sponsored');

                button.parentNode.replaceChild(link, button);

                console.log('StylePulse: Affiliate link replaced for', productId);
            } else if (productId) {
                console.warn('StylePulse: No affiliate link found for product:', productId);
            }
        });
    }

    // Track affiliate clicks
    function trackAffiliateClick(productId) {
        console.log('StylePulse: Affiliate click tracked for', productId);
        // Integrate with analytics here
        // Example: gtag('event', 'click', { 'event_category': 'Affiliate', 'event_label': productId });
    }

    // Listen for clicks on affiliate elements
    document.addEventListener('click', function(e) {
        const affiliateElement = e.target.closest('[data-affiliate="true"]');
        if (affiliateElement) {
            const productId = affiliateElement.getAttribute('data-product');
            if (productId) {
                trackAffiliateClick(productId);
            }
        }
    });

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAffiliateLinks);
    } else {
        initAffiliateLinks();
    }
})();
