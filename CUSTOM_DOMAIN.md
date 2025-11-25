# Custom Domain Setup Guide

## Domain: tchaasawright.com

This guide will help you configure your custom domain purchased through Cloudflare to work with your GitHub Pages site.

## Changes Made

1. ✅ Created `CNAME` file in `public/` folder
2. ✅ Updated `vite.config.ts` base path from `/Tchaasdigitalresume/` to `/`

## ⚠️ CRITICAL: Cloudflare Proxy Settings

**READ THIS FIRST - Most Common Mistake That Breaks Deployments**

### DNS Records MUST Stay in "DNS Only" Mode

For GitHub Pages to work with custom domains, your DNS records **MUST** use "DNS only" mode (gray cloud ☁️) **PERMANENTLY**.

```
✅ CORRECT: DNS only (gray cloud ☁️)
❌ WRONG:   Proxied (orange cloud 🟧)
```

### Why Orange Cloud Breaks Everything

When you enable Cloudflare proxy (orange cloud):
- ❌ GitHub Pages **CANNOT** provision SSL certificates
- ❌ HTTPS will show certificate warnings indefinitely
- ❌ GitHub cannot verify domain ownership
- ❌ Automatic deployments may fail

### Why GitHub Pages Requires Direct DNS Access

GitHub Pages needs to:
1. Verify domain ownership via DNS
2. Provision Let's Encrypt SSL certificates automatically
3. Serve content directly from GitHub's CDN

When Cloudflare proxy is enabled, GitHub sees Cloudflare's IPs instead of your domain, breaking this entire chain.

### ⚠️ If You Already Enabled Orange Cloud

If you've already enabled the proxy and SSL isn't working:

1. **Disable proxy** on ALL DNS records (click orange cloud → turns gray)
2. **Remove custom domain** from GitHub Pages settings
3. **Wait 10 minutes** for DNS propagation
4. **Re-add custom domain** in GitHub Pages settings
5. **Wait up to 24 hours** for GitHub to provision new SSL certificate

### What About Cloudflare's Benefits?

You might want Cloudflare proxy for:
- DDoS protection
- Caching
- Web Application Firewall (WAF)

**Unfortunately, these are incompatible with GitHub Pages custom domains.** You must choose:
- ✅ GitHub Pages with custom domain (gray cloud, GitHub's CDN)
- ❌ Cloudflare proxy features (orange cloud, incompatible)

## Cloudflare DNS Configuration

### Step 1: Add DNS Records

Log in to your Cloudflare dashboard and add the following DNS records for `tchaasawright.com`:

#### For Root Domain (tchaasawright.com)

Add **A Records** pointing to GitHub Pages IP addresses:

```
Type: A
Name: @
Content: 185.199.108.153
⚠️ Proxy status: DNS only (gray cloud ☁️) - NEVER orange cloud
TTL: Auto
```

**Add three more A records** with identical settings, only changing the IP:

| Type | Name | Content | Proxy Status | TTL |
|------|------|---------|--------------|-----|
| A | @ | 185.199.108.153 | ☁️ DNS only | Auto |
| A | @ | 185.199.109.153 | ☁️ DNS only | Auto |
| A | @ | 185.199.110.153 | ☁️ DNS only | Auto |
| A | @ | 185.199.111.153 | ☁️ DNS only | Auto |

⚠️ **CRITICAL**: All four A records must have gray cloud (DNS only). Do NOT click to enable orange cloud.

#### For www Subdomain (www.tchaasawright.com)

Add a **CNAME Record**:

```
Type: CNAME
Name: www
Content: tchaas.github.io
⚠️ Proxy status: DNS only (gray cloud ☁️) - NEVER orange cloud
TTL: Auto
```

**Note**: GitHub Pages automatically redirects www to non-www (or vice versa) based on your Pages settings.

### Step 2: Cloudflare SSL/TLS Settings

Navigate to **SSL/TLS** section in Cloudflare dashboard:

1. **SSL/TLS Mode**: Set to **"Full (strict)"** (RECOMMENDED)
   - Go to SSL/TLS → Overview
   - Select **"Full (strict)"**
   - GitHub Pages provides valid SSL certificates, so strict mode works
   - Alternative: "Full" also works but less secure

   **Why not "Flexible"?**
   - "Flexible" = Cloudflare to visitor is HTTPS, Cloudflare to GitHub is HTTP
   - GitHub Pages requires HTTPS, so "Flexible" creates redirect loops

2. **Always Use HTTPS**: Enable
   - Go to SSL/TLS → Edge Certificates
   - Toggle **ON**: "Always Use HTTPS"

3. **Automatic HTTPS Rewrites**: Enable
   - In the same section
   - Toggle **ON**: "Automatic HTTPS Rewrites"

4. **Verify DNS Records Are Still Gray Cloud**
   - Go back to DNS → Records
   - Confirm ALL records show gray cloud ☁️ (DNS only)
   - If any show orange 🟧, click to disable proxy

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

## ⚠️ Why You Cannot Use Cloudflare Proxy (Orange Cloud)

**THIS IS NOT OPTIONAL - It's a technical limitation**

Many users ask: "Can I enable Cloudflare proxy (orange cloud) after setup?"

**Answer: NO. Never. Not even after everything works.**

### Technical Reason

GitHub Pages custom domains require:
1. Direct DNS resolution to GitHub's servers (185.199.108-111.153)
2. GitHub's ability to verify domain ownership via DNS
3. GitHub's automatic Let's Encrypt SSL certificate provisioning

When Cloudflare proxy is enabled:
- Your domain points to Cloudflare's IPs (not GitHub's)
- GitHub cannot verify ownership
- SSL certificate provisioning fails permanently
- Even if you get it working temporarily, renewals will fail

### Common Questions

**Q: But I want DDoS protection!**
A: GitHub Pages has built-in DDoS protection. You don't need Cloudflare's.

**Q: What about caching for better performance?**
A: GitHub Pages uses a global CDN (Fastly). Additional caching isn't beneficial.

**Q: Can I use orange cloud for www but not root?**
A: No. Both must be gray cloud. Mixed configurations break SSL.

**Q: What Cloudflare features CAN I use?**
A: DNS management, SSL/TLS settings, Page Rules (redirects), Email forwarding. Just keep DNS records gray cloud.

### The Choice

```
Option 1: GitHub Pages + Custom Domain
├─ DNS: Gray cloud (DNS only) ☁️
├─ SSL: GitHub provisions automatically
├─ CDN: GitHub/Fastly
└─ DDoS: GitHub's protection

Option 2: Cloudflare Proxy (incompatible with GitHub Pages custom domain)
├─ DNS: Orange cloud (proxied) 🟧
├─ Cannot use with GitHub Pages custom domains
└─ Use GitHub's default domain instead
```

**Bottom line**: If custom domain on GitHub Pages is your priority, DNS records stay gray cloud forever.

## Troubleshooting

### DNS Not Resolving
- Verify DNS records are correct
- Check that Cloudflare nameservers are set at your domain registrar
- Wait longer for propagation (up to 48 hours)

### SSL Certificate Errors

**Most Common Cause**: Cloudflare proxy (orange cloud) is enabled

1. **Check DNS records FIRST**:
   - Go to Cloudflare → DNS → Records
   - Verify ALL records show gray cloud ☁️ (DNS only)
   - If ANY show orange 🟧, click to disable proxy
   
2. **Ensure SSL/TLS mode** is set to "Full (strict)" or "Full" (not "Flexible")

3. **Reset GitHub Pages custom domain**:
   - Remove domain from GitHub Pages settings
   - Wait 10 minutes
   - Re-add domain
   
4. **Wait for certificate provisioning** (up to 24 hours on first setup)

5. **Clear browser cache** or use incognito mode to test

6. **Still not working?** Check:
   - DNS propagation: Use https://dnschecker.org
   - Cloudflare SSL mode is not "Off" or "Flexible"
   - CNAME file exists in repository root (dist/ folder)

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

## Optional: Cloudflare Page Rules

You can use Cloudflare Page Rules (these work with gray cloud DNS):

### Redirect www to non-www (or vice versa)

**Note**: GitHub Pages automatically handles www redirects based on your Pages settings. Only add this if you need custom redirect behavior.

If you want www.tchaasawright.com to redirect to tchaasawright.com:

1. Go to Rules → Page Rules in Cloudflare
2. Create a new rule:
   ```
   URL: www.tchaasawright.com/*
   Setting: Forwarding URL (301 - Permanent Redirect)
   Destination: https://tchaasawright.com/$1
   ```

**Warning**: Page Rules work with DNS-only mode. They do NOT require orange cloud proxy.

## Deployment Commands

After these changes, deploy with:

```bash
git add .
git commit -m "Configure custom domain tchaasawright.com"
git push origin main
```

## Final Verification Checklist

Once everything is configured and propagated, verify each item:

### DNS Configuration
- [ ] All A records point to 185.199.108-111.153
- [ ] CNAME record points to tchaas.github.io
- [ ] **ALL DNS records show gray cloud ☁️ (DNS only)**
- [ ] **NO DNS records show orange cloud 🟧**

### Cloudflare Settings
- [ ] SSL/TLS mode: "Full (strict)" or "Full"
- [ ] Always Use HTTPS: Enabled
- [ ] Automatic HTTPS Rewrites: Enabled

### GitHub Settings
- [ ] Pages source: GitHub Actions
- [ ] Custom domain: tchaasawright.com
- [ ] DNS check: Successful ✅
- [ ] Enforce HTTPS: Enabled

### Site Testing
- [ ] Visit https://tchaasawright.com - loads correctly
- [ ] Green padlock 🔒 shows in browser (valid SSL)
- [ ] Visit https://www.tchaasawright.com - redirects or works
- [ ] Test on mobile device
- [ ] Test from different network/location

### DNS Propagation Verification
- [ ] Run: `nslookup tchaasawright.com` returns GitHub IPs
- [ ] Check https://dnschecker.org shows propagation
- [ ] Check https://www.ssllabs.com/ssltest/ shows Grade A

## Support Resources

- **Cloudflare Docs**: https://developers.cloudflare.com/dns/
- **GitHub Pages Custom Domain**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **DNS Propagation Checker**: https://dnschecker.org

---

Your custom domain is now configured! 🎉

The site will be accessible at **https://tchaasawright.com** once DNS propagates and GitHub provisions the SSL certificate.
