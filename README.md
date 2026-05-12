# StylePulse Picks

A global English fashion trend discovery and recommendation website. Built for Google organic traffic, affiliate monetization, and Google AdSense.

**Live site:** https://fuli.xxym8.com

## Quick Start

1. **Clone:** `git clone https://github.com/yanjunbobo/fuli.git`
2. **Edit:** Modify any HTML, CSS, JS, or JSON files
3. **Push:** `git push origin main`
4. **Deploy:** GitHub Pages auto-deploys from `/` branch

## File Structure

```
/
├── index.html                    # Homepage
├── sitemap.xml                   # SEO sitemap
├── robots.txt                    # Crawler instructions
├── 404.html                      # Not found page
├── CNAME                         # Custom domain (fuli.xxym8.com)
├── assets/
│   ├── css/style.css            # All styles (mobile-first)
│   ├── js/
│   │   ├── main.js              # Mobile menu, search, product loading
│   │   ├── sp.js                # Affiliate link manager (edit AFFILIATE_URL here)
│   │   └── ads.js               # Ad placeholder manager (add AdSense here)
│   └── data/
│       ├── products.json         # 83+ fashion product items
│       ├── trends.json           # 8 fashion trend objects
│       └── keywords.json         # 35+ SEO keyword targets
├── categories/                   # 9 category pages
│   ├── clothing.html
│   ├── pants.html
│   ├── dresses.html
│   ├── shoes.html
│   ├── accessories.html
│   ├── mens-fashion.html
│   ├── womens-fashion.html
│   ├── streetwear.html
│   └── seasonal.html
├── trends/                       # 8 trend guide pages
│   ├── index.html
│   ├── old-money-style.html
│   ├── quiet-luxury.html
│   ├── y2k-fashion.html
│   ├── streetwear-style.html
│   ├── minimalist-fashion.html
│   ├── coquette-fashion.html
│   ├── gorpcore-style.html
│   └── capsule-wardrobe.html
├── blog/                         # 20 blog articles
│   ├── index.html
│   ├── best-summer-outfit-ideas-for-women.html
│   ├── best-sneakers-to-wear-with-jeans.html
│   └── ... (18 more articles)
└── legal/                        # 6 legal pages
    ├── about.html
    ├── contact.html
    ├── privacy-policy.html
    ├── terms.html
    ├── affiliate-disclosure.html
    └── cookie-policy.html
```

## How to Edit

### Affiliate Links
Edit the **ONE LINE** in `/assets/js/sp.js`:
```javascript
const AFFILIATE_URL = 'https://mulebuy.com/register?ref=201219348';
```
All `data-affiliate="true"` buttons site-wide will automatically use this URL.

### Google AdSense
Replace placeholder content in `/assets/js/ads.js` with your actual AdSense ad unit code. Look for the comments marked `HOW TO ADD GOOGLE ADSENSE`.

### Products
Add/edit products in `/assets/data/products.json`. Each product needs:
- `id`, `title`, `category`, `gender`, `trend`, `season`
- `image_url` (picsum.photos or legal image URL)
- `short_description`, `styling_tip`, `color_tips`, `occasion`
- `tags[]`, `cta_text`, `affiliate: true`

### New Trend Pages
Copy `/trends/template.html` (or any existing trend page) and update:
- Title, meta description, H1
- Trend explanation content
- Product recommendations
- FAQ items

### New Blog Articles
Copy any existing blog article and update:
- SEO title, meta description, H1
- Article content (1200+ words recommended)
- Product cards
- Internal links
- FAQ schema

### Update Sitemap
After adding pages, update `/sitemap.xml` with new URLs. Set priority and change frequency appropriately.

### Custom Domain
The CNAME file contains `fuli.xxym8.com`. If you change domains, update this file AND update all canonical URLs, sitemap.xml, and internal links.

## Deployment

### GitHub Pages
1. Push to `main` branch
2. Go to repository **Settings → Pages**
3. Source: **Deploy from a branch** → **main** → **/ (root)**
4. Save. Site will be live at `fuli.xxym8.com` within minutes.

### Custom Domain
- DNS: Point `fuli.xxym8.com` CNAME to `yanjunbobo.github.io`
- GitHub Settings → Pages → enter custom domain
- CNAME file in repo root must match (already set to `fuli.xxym8.com`)

## SEO

Every page includes:
- Unique title & meta description
- Canonical URL
- Open Graph tags
- Twitter Card tags
- JSON-LD schema (BreadcrumbList on all pages, FAQPage on articles, Article on blog posts)
- Semantic HTML5
- Image alt text
- Internal links

## Monetization

1. **Affiliate:** All `data-affiliate="true"` buttons → MuleBuy
2. **AdSense:** Ad placeholders ready in `ads.js`

## Tech

- 100% static — no backend, no database, no build step
- Pure HTML, CSS, vanilla JavaScript
- Mobile-first responsive design
- GitHub Pages compatible
