# Custom Domain Setup Guide

## Domain: tchaasawright.com

This guide will help you configure your custom domain purchased through Cloudflare to work with your GitHub Pages site.

## Changes Made

1. ✅ Created `CNAME` file in `public/` folder
2. ✅ Updated `vite.config.ts` base path from `/Tchaasdigitalresume/` to `/`

## Cloudflare DNS Configuration

### Step 1: Add DNS Records

Log in to your Cloudflare dashboard and add the following DNS records for `tchaasawright.com`:

#### For Root Domain (tchaasawright.com)

Add **A Records** pointing to GitHub Pages IP addresses:

```
Type: A
Name: @
Content: 185.199.108.153
Proxy status: DNS only (gray cloud)
TTL: Auto
```

Add three more A records with the same settings but different IPs:
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

#### For www Subdomain (www.tchaasawright.com)

Add a **CNAME Record**:

```
Type: CNAME
Name: www
Content: tchaas.github.io
Proxy status: DNS only (gray cloud)
TTL: Auto
```

### Step 2: Cloudflare Settings

1. **SSL/TLS Mode**: Set to "Full" (not "Flexible")
   - Go to SSL/TLS → Overview
   - Select "Full"

2. **Always Use HTTPS**: Enable
   - Go to SSL/TLS → Edge Certificates
   - Turn on "Always Use HTTPS"

3. **Automatic HTTPS Rewrites**: Enable
   - In the same section, enable "Automatic HTTPS Rewrites"

### Step 3: GitHub Repository Settings

1. Go to https://github.com/Tchaas/Tchaasdigitalresume/settings/pages

2. Under **Custom domain**, enter: `tchaasawright.com`

3. Click **Save**

4. Wait for DNS check to complete (may take a few minutes)

5. Once verified, enable **Enforce HTTPS**

## DNS Propagation

- DNS changes can take 5 minutes to 48 hours to propagate globally
- Usually completes within 1-2 hours
- Check propagation status at: https://dnschecker.org

## Verify Configuration

After DNS propagates, test your domain:

1. **Root domain**: http://tchaasawright.com → should redirect to HTTPS
2. **WWW subdomain**: http://www.tchaasawright.com → should redirect to HTTPS
3. **HTTPS**: https://tchaasawright.com → should load your site securely

## Cloudflare Proxy (Optional)

Initially, set DNS records to "DNS only" (gray cloud) for setup. Once everything works:

1. You can enable Cloudflare proxy (orange cloud) for:
   - DDoS protection
   - Caching
   - Additional performance
   - Web Application Firewall (WAF)

2. Keep the proxy disabled during initial setup to avoid SSL issues

## Troubleshooting

### DNS Not Resolving
- Verify DNS records are correct
- Check that Cloudflare nameservers are set at your domain registrar
- Wait longer for propagation (up to 48 hours)

### SSL Certificate Errors
- Ensure SSL/TLS mode is set to "Full" in Cloudflare
- Wait for GitHub to provision the certificate (can take up to 24 hours)
- Try clearing browser cache and using incognito mode

### 404 Errors
- Verify CNAME file contains exactly: `tchaasawright.com`
- Check that GitHub Pages is enabled in repository settings
- Ensure the latest code is deployed

### Mixed Content Warnings
- Enable "Automatic HTTPS Rewrites" in Cloudflare
- Update any hardcoded HTTP URLs to HTTPS in your code

## Testing Tools

- DNS Checker: https://dnschecker.org
- SSL Test: https://www.ssllabs.com/ssltest/
- GitHub Pages Status: Check Actions tab in your repository

## Expected Timeline

1. **Immediate**: Push changes to GitHub
2. **2-3 minutes**: GitHub Actions builds and deploys
3. **5-30 minutes**: DNS propagation begins
4. **1-24 hours**: SSL certificate provisioned by GitHub
5. **Up to 48 hours**: Complete DNS propagation worldwide

## Cloudflare Page Rules (Optional Enhancements)

You can add page rules in Cloudflare for additional functionality:

### Redirect www to non-www (or vice versa)

If you want www.tchaasawright.com to redirect to tchaasawright.com:

1. Go to Rules → Page Rules in Cloudflare
2. Create a new rule:
   ```
   URL: www.tchaasawright.com/*
   Setting: Forwarding URL (301 - Permanent Redirect)
   Destination: https://tchaasawright.com/$1
   ```

## Deployment Commands

After these changes, deploy with:

```bash
git add .
git commit -m "Configure custom domain tchaasawright.com"
git push origin main
```

## Final Verification

Once everything is configured and propagated:

✅ Visit https://tchaasawright.com
✅ Check that HTTPS is working (green padlock in browser)
✅ Verify www redirects properly
✅ Test on mobile devices
✅ Check from different locations/networks

## Support Resources

- **Cloudflare Docs**: https://developers.cloudflare.com/dns/
- **GitHub Pages Custom Domain**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **DNS Propagation Checker**: https://dnschecker.org

---

Your custom domain is now configured! 🎉

The site will be accessible at **https://tchaasawright.com** once DNS propagates and GitHub provisions the SSL certificate.
