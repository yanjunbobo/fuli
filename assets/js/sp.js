// StylePulse Picks — Affiliate Link Handler (sp.js)
// Handles data-affiliate attribute for product cards

(function() {
    'use strict';

    // MuleBuy affiliate URL (register page with ref ID)
    const AFFILIATE_URL = 'https://mulebuy.com/register?ref=201219348';

    // Initialize affiliate buttons on page load
    function initAffiliateLinks() {
        const affiliateButtons = document.querySelectorAll('[data-affiliate="true"]');

        affiliateButtons.forEach(button => {
            const productId = button.getAttribute('data-product');

            // If button has href="#", replace with mulebuy URL
            if (button.href === '#' || button.href === window.location.href + '#') {
                button.href = AFFILIATE_URL;
                button.setAttribute('target', '_blank');
                button.setAttribute('rel', 'noopener sponsored');
            }

            // If button has a product ID, set mulebuy URL
            if (productId) {
                button.href = AFFILIATE_URL;
                button.setAttribute('target', '_blank');
                button.setAttribute('rel', 'noopener sponsored');
                console.log('StylePulse: Affiliate link set for', productId);
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
