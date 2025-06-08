import React, { useEffect } from 'react'

/**
 * Hook for preloading critical resources
 */
export const usePreloader = () => {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center'
    ]

    criticalImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })

    // Preload Google Fonts with font-display: swap
    const fontPreloadLinks = [
      'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    ]

    fontPreloadLinks.forEach(href => {
      const existing = document.querySelector(`link[href="${href}"]`)
      if (!existing) {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'style'
        link.onload = function() { this.rel = 'stylesheet' }
        link.href = href
        document.head.appendChild(link)
      }
    })

    // Preload critical scripts
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then(registration => {
        if (!registration) {
          // Preload service worker
          fetch('/sw.js', { cache: 'force-cache' })
        }
      })
    }

    return () => {
      // Cleanup preload links on unmount
      const preloadLinks = document.querySelectorAll('link[rel="preload"]')
      preloadLinks.forEach(link => {
        if (criticalImages.includes(link.href) || fontPreloadLinks.includes(link.href)) {
          link.remove()
        }
      })
    }
  }, [])
}

/**
 * Component to handle DNS prefetch and preconnect hints
 */
export const ResourceHints = () => {
  useEffect(() => {
    // DNS prefetch for external domains
    const dnsPrefetchDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://images.unsplash.com',
      'https://api.github.com'
    ]

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'dns-prefetch'
      link.href = domain
      document.head.appendChild(link)
    })

    // Preconnect to critical origins
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ]

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = domain
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })
  }, [])

  return null
}

/**
 * Intersection Observer based image preloader
 */
export const useImagePreloader = (images = [], threshold = 0.1) => {
  useEffect(() => {
    if (!images.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = new Image()
            img.src = entry.target.dataset.src
            
            // Convert to WebP if supported
            if (supportsWebP()) {
              const webpSrc = entry.target.dataset.src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
              img.src = webpSrc
            }
            
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    // Create placeholder elements for images to observe
    images.forEach(src => {
      const placeholder = document.createElement('div')
      placeholder.dataset.src = src
      placeholder.style.position = 'absolute'
      placeholder.style.top = '-1px'
      placeholder.style.left = '-1px'
      placeholder.style.width = '1px'
      placeholder.style.height = '1px'
      placeholder.style.opacity = '0'
      document.body.appendChild(placeholder)
      observer.observe(placeholder)
    })

    return () => {
      observer.disconnect()
      // Clean up placeholder elements
      const placeholders = document.querySelectorAll('[data-src]')
      placeholders.forEach(el => el.remove())
    }
  }, [images, threshold])
}

/**
 * Check WebP support
 */
const supportsWebP = () => {
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
}

/**
 * Preload next page resources
 */
export const useRoutePreloader = (routes = []) => {
  useEffect(() => {
    const preloadRoute = (route) => {
      // Preload route chunks
      import(/* webpackChunkName: "[request]" */ `../pages/${route}Page.jsx`)
        .catch(() => {
          // Fallback for dynamic imports that might fail
          console.log(`Failed to preload route: ${route}`)
        })
    }

    // Preload routes on idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        routes.forEach(preloadRoute)
      })
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        routes.forEach(preloadRoute)
      }, 2000)
    }
  }, [routes])
}
