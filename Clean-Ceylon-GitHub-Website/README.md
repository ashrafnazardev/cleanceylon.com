# Clean Ceylon — static website

A responsive, self-contained, single-page website for **Clean Ceylon**. No build tools, subscriptions, server, external fonts, plugins, analytics, or backend required.

## What's included

- `index.html` — the website content and search-engine metadata
- `styles.css` — responsive styles
- `script.js` — mobile menu, subtle reveal animations, and WhatsApp enquiry form
- `assets/` — original SVG illustrations/logo approximation, favicon and social preview image
- `.nojekyll` — GitHub Pages compatibility
- `robots.txt` — crawler rules

## Publish with GitHub Pages

1. Create a new **public** GitHub repository, e.g. `clean-ceylon-website`.
2. Upload **all the files and the `assets` folder** into the repository root (not the ZIP file itself). Commit changes.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** as the branch and **/(root)** as the folder. Save.
6. Your website should become available at `https://YOUR-GITHUB-USERNAME.github.io/clean-ceylon-website/` once Pages deployment finishes.

Alternatively, name the repo `YOUR-GITHUB-USERNAME.github.io` for a root GitHub Pages domain.

## Customize

- **Phone / WhatsApp**: search for `072 227 7226` (displayed phone), `+94722277226` (`tel:` links), and `94722277226` (WhatsApp links). Update all instances if the contact number changes.
- **Services and wording**: edit headings and paragraphs in `index.html`.
- **Brand colors**: edit the CSS variables at the beginning of `styles.css`.
- **Logo**: the SVG icon is an approximation based on the uploaded preview graphics, **not an official original logo file**. Replace `assets/logo.svg` and `assets/favicon.svg` with supplied final brand assets when available.
- **Images**: the illustrations are local SVG files; there is no dependency on stock-image servers. When you have licensed photos of actual Clean Ceylon work, add them to `assets/` and feature them on the site.
- **Service area**: currently only says Colombo and surrounding suburbs because that is what the supplied artwork states.
- **Quotes**: no fixed prices are shown; customers request details via WhatsApp.

## How the WhatsApp enquiry works

The form is 100% client-side. It validates name, area and service selection, then opens WhatsApp with a pre-filled enquiry message. It does **not** send a message without the customer's confirmation and it does **not** record or store the information on your website. No database or email delivery service is used.

## Preview locally

Open `index.html` in your browser or run a local server from this folder:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000 .

## Before launch

- Confirm that 072 227 7226 also receives WhatsApp messages. If not, change only the WhatsApp destinations to the correct number.
- Replace the approximate logo with your original transparent brand logo if available.
- Review service descriptions and availability; no unverified guarantees, testimonials, prices, or opening times are included.
- Once your final public URL is known, consider using its **absolute URL** for Open Graph image tags and adding a sitemap and canonical URL.
- If you add any stock photography, use properly licensed photographs, label illustrative images appropriately, and avoid portraying stock models as actual employees.

The original supplied poster graphics contained **PREVIEW** watermarks and were used as brand/content references only; they were not included in the published site.
