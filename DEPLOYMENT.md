# ESP32 & IoT Portfolio - Deployment Guide

## 🚀 Quick Deploy Checklist

### Pre-Deployment Steps

1. **Update Content**
   - [ ] Replace placeholder images in `public/`
   - [ ] Update contact information in components
   - [ ] Customize services and projects data
   - [ ] Update social media links
   - [ ] Add your real testimonials

2. **SEO & Meta Tags**
   - [ ] Update `index.html` title and meta description
   - [ ] Add Open Graph images
   - [ ] Configure analytics tracking
   - [ ] Add structured data markup

3. **Performance Check**
   - [ ] Optimize images (WebP format recommended)
   - [ ] Test mobile responsiveness
   - [ ] Verify all animations work smoothly
   - [ ] Check loading times

### Environment Configuration

Create `.env` file:
```env
VITE_SITE_URL=https://your-domain.com
VITE_CONTACT_EMAIL=your.email@example.com
VITE_PHONE=+1-555-123-4567
VITE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Build Commands

```powershell
# Install dependencies
npm install

# Add missing router dependency
npm install react-router-dom@latest

# Test build
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment Platforms

### 1. Vercel (Recommended)

**Setup:**
```powershell
npm i -g vercel
vercel login
vercel --prod
```

**Configuration:** `vercel.json`
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### 2. Netlify

**Setup:**
```powershell
npm run build
```
Then drag `dist/` folder to Netlify deploy area.

**Configuration:** `_redirects` in `public/`
```
/*    /index.html   200
```

### 3. GitHub Pages

**Setup:**
```powershell
npm install --save-dev gh-pages
```

**Add to `package.json`:**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/repository-name"
}
```

**Deploy:**
```powershell
npm run deploy
```

## 📧 Contact Form Integration

### EmailJS Setup
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Add service and template
3. Update `ContactForm.jsx`:

```jsx
import emailjs from '@emailjs/browser';

const sendEmail = (formData) => {
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
  .then((result) => {
    console.log('SUCCESS!', result.text);
  })
  .catch((error) => {
    console.log('FAILED...', error.text);
  });
};
```

### Formspree Alternative
1. Create account at [Formspree](https://formspree.io/)
2. Update form action:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 📊 Analytics Integration

### Google Analytics 4
Add to `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔧 Performance Optimization

### Image Optimization
```powershell
# Install image optimization tools
npm install --save-dev imagemin imagemin-webp
```

### Lighthouse Checklist
- [ ] Performance Score 90+
- [ ] Accessibility Score 95+
- [ ] Best Practices Score 95+
- [ ] SEO Score 95+

## 🛡️ Security Headers

Add to hosting platform configuration:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' *.googletagmanager.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com;
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## 📱 Domain & DNS

### Custom Domain Setup
1. Purchase domain from registrar
2. Update DNS records:
   ```
   Type: CNAME
   Name: www
   Value: your-deployment-url.vercel.app
   
   Type: A
   Name: @
   Value: [Platform IP addresses]
   ```

### SSL Certificate
Most platforms (Vercel, Netlify) provide automatic SSL certificates.

## 🔍 SEO Enhancements

### Sitemap Generation
Add to `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://your-domain.com/services</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Add other pages -->
</urlset>
```

### robots.txt
Add to `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap.xml
```

## 📈 Monitoring & Maintenance

### Error Tracking
- Set up Sentry or similar service
- Monitor Core Web Vitals
- Track conversion rates

### Regular Updates
- Update dependencies monthly
- Check for security vulnerabilities
- Monitor website performance
- Update portfolio content regularly

## 🆘 Troubleshooting

### Common Issues

**Build Fails:**
```powershell
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Routing Issues:**
- Ensure SPA redirects are configured
- Check for trailing slashes in routes

**Styling Issues:**
- Verify Tailwind CSS is building correctly
- Check for PostCSS configuration errors

**Performance Issues:**
- Optimize images and assets
- Implement lazy loading
- Check for memory leaks in animations

---

**Need Help?** Contact support or check the main README.md for additional resources.
