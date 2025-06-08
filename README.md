# ESP32 & IoT Freelance Portfolio Website

A modern, professional portfolio website built for ESP32 & IoT development freelancers. This responsive React.js application showcases expertise in IoT development, featuring animated components, project galleries, and client testimonials.

## 🚀 Features

### Core Components
- **🎯 Hero Section** - Eye-catching landing with animated backgrounds
- **💼 Services Section** - Professional service offerings with hover effects
- **📱 Projects Gallery** - Interactive portfolio with filtering and categories
- **👨‍💻 About Me Section** - Personal branding and expertise showcase
- **💬 Testimonials** - Client feedback with carousel slider
- **📬 Contact Form** - Professional contact with validation
- **🧭 Navigation** - Responsive navbar with mobile menu
- **🦶 Footer** - Complete site footer with social links

### Technical Features
- ✅ **Fully Responsive** - Mobile-first design approach
- ✅ **Modern UI/UX** - Beautiful gradients and animations
- ✅ **Fast Performance** - Optimized React components
- ✅ **SEO Ready** - Semantic HTML structure
- ✅ **Error Boundaries** - Graceful error handling
- ✅ **Multi-page Router** - Professional navigation system

## 🛠️ Technology Stack

- **Frontend Framework:** React.js 19.1.0
- **Styling:** Tailwind CSS 4.1.8
- **Animations:** Framer Motion 12.16.0
- **Build Tool:** Vite 6.3.5
- **Routing:** React Router DOM 7.1.1
- **Carousel:** Swiper.js 11.2.8

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```powershell
   cd c:\Users\burak\Desktop\projects\freelance
   ```

2. **Install dependencies**
   ```powershell
   npm install
   ```

3. **Start development server**
   ```powershell
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```powershell
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📱 Mobile Responsiveness

The website is fully responsive with Tailwind CSS breakpoints:

- **Mobile:** `< 640px` (sm)
- **Tablet:** `640px - 768px` (md)
- **Desktop:** `768px - 1024px` (lg)
- **Large:** `1024px+` (xl)

### Responsive Features
- Adaptive navigation (hamburger menu on mobile)
- Flexible grid layouts (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Scalable typography (`text-lg sm:text-xl lg:text-2xl`)
- Touch-friendly interactions
- Optimized images and assets

## 🎨 Customization

### Colors & Branding
Edit `tailwind.config.js` to customize:
```js
theme: {
  extend: {
    colors: {
      primary: {
        400: '#60a5fa',  // Light blue
        500: '#3b82f6',  // Blue
        600: '#2563eb',  // Dark blue
        700: '#1d4ed8',  // Darker blue
      },
      accent: {
        400: '#a78bfa',  // Light purple
        500: '#8b5cf6',  // Purple
      }
    }
  }
}
```

### Content Updates
- **Services:** Edit `src/components/ServicesSection.jsx`
- **Projects:** Update `src/components/ProjectsGallery.jsx`
- **About:** Modify `src/components/AboutMeSection.jsx`
- **Contact:** Update `src/components/ContactForm.jsx`

## 📦 Deployment

### Vercel (Recommended)
```powershell
npm i -g vercel
vercel --prod
```

### Netlify
```powershell
npm run build
# Upload dist/ folder to Netlify
```

### Traditional Hosting
```powershell
npm run build
# Upload dist/ folder to your hosting provider
```

## 🛡️ Error Handling

The application includes:
- **Error Boundaries** for component-level error catching
- **404 Page** for invalid routes
- **Loading States** for async operations
- **Form Validation** for user inputs

## 🔍 Performance Features

- **Code Splitting** via React Router
- **Optimized Assets** through Vite bundling
- **Responsive Images** with proper sizing
- **Minimal Dependencies** for fast loading

---

**Built with ❤️ for ESP32 & IoT Developers**

*Transform your IoT expertise into a professional online presence that attracts clients and showcases your technical capabilities.*
