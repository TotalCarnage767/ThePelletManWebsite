# Deployment

The production website is designed to be published with GitHub Pages from the `master` branch at the repository root.

## GitHub Pages

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **master** and folder **/(root)**, then save.
4. Under **Custom domain**, use `thepelletmanservices.com`.
5. After DNS is correct and GitHub provisions the certificate, enable **Enforce HTTPS**.

## Cloudflare DNS

For the apex domain (`thepelletmanservices.com`), add these GitHub Pages A records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

For `www`, add a CNAME pointing to:

- `TotalCarnage767.github.io`

While GitHub is validating/provisioning the custom domain, use DNS-only records if Cloudflare proxying causes verification or certificate issues.

## Site updates

The site is plain HTML/CSS/JavaScript with no build step. Updating files on `master` will republish through GitHub Pages.

Real customer/job photos can later be added under `assets/jobs/` and wired into the Gallery section in `index.html`.
