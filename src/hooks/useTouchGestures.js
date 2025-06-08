import { useEffect, useRef } from 'react'

/**
 * Hook for handling touch gestures
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Minimum distance for swipe detection (default: 50)
 * @param {Function} options.onSwipeLeft - Callback for left swipe
 * @param {Function} options.onSwipeRight - Callback for right swipe
 * @param {Function} options.onSwipeUp - Callback for up swipe
 * @param {Function} options.onSwipeDown - Callback for down swipe
 * @param {Function} options.onTap - Callback for tap gesture
 * @param {Function} options.onLongPress - Callback for long press gesture
 * @param {number} options.longPressDelay - Delay for long press detection (default: 500ms)
 */
export const useTouchGestures = (options = {}) => {
  const {
    threshold = 50,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onTap,
    onLongPress,
    longPressDelay = 500
  } = options

  const touchRef = useRef(null)
  const touchStart = useRef({ x: 0, y: 0, time: 0 })
  const longPressTimer = useRef(null)

  useEffect(() => {
    const element = touchRef.current
    if (!element) return

    const handleTouchStart = (e) => {
      const touch = e.touches[0]
      touchStart.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      }

      // Start long press timer
      if (onLongPress) {
        longPressTimer.current = setTimeout(() => {
          onLongPress(e)
        }, longPressDelay)
      }
    }

    const handleTouchMove = () => {
      // Clear long press timer on move
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current)
        longPressTimer.current = null
      }
    }

    const handleTouchEnd = (e) => {
      // Clear long press timer
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current)
        longPressTimer.current = null
      }

      const touch = e.changedTouches[0]
      const deltaX = touch.clientX - touchStart.current.x
      const deltaY = touch.clientY - touchStart.current.y
      const deltaTime = Date.now() - touchStart.current.time

      const absX = Math.abs(deltaX)
      const absY = Math.abs(deltaY)

      // Check for tap (short duration, small movement)
      if (deltaTime < 300 && absX < 10 && absY < 10 && onTap) {
        onTap(e)
        return
      }

      // Check for swipe gestures
      if (absX > threshold || absY > threshold) {
        if (absX > absY) {
          // Horizontal swipe
          if (deltaX > 0 && onSwipeRight) {
            onSwipeRight(e, deltaX)
          } else if (deltaX < 0 && onSwipeLeft) {
            onSwipeLeft(e, Math.abs(deltaX))
          }
        } else {
          // Vertical swipe
          if (deltaY > 0 && onSwipeDown) {
            onSwipeDown(e, deltaY)
          } else if (deltaY < 0 && onSwipeUp) {
            onSwipeUp(e, Math.abs(deltaY))
          }
        }
      }
    }

    element.addEventListener('touchstart', handleTouchStart, { passive: true })
    element.addEventListener('touchmove', handleTouchMove, { passive: true })
    element.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
      element.removeEventListener('touchend', handleTouchEnd)
      
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current)
      }
    }
  }, [threshold, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, onTap, onLongPress, longPressDelay])

  return touchRef
}

/**
 * Hook for detecting mobile/touch devices
 */
export const useIsMobile = () => {
  const isMobile = useRef(false)

  useEffect(() => {
    const checkMobile = () => {
      isMobile.current = 
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 768
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile.current
}

/**
 * Hook for preventing zoom on mobile inputs
 */
export const usePreventZoom = () => {
  useEffect(() => {
    const preventZoom = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }

    const preventDoubleTapZoom = (e) => {
      const now = Date.now()
      const lastTap = preventDoubleTapZoom.lastTap || 0
      
      if (now - lastTap < 300) {
        e.preventDefault()
      }
      
      preventDoubleTapZoom.lastTap = now
    }

    document.addEventListener('touchstart', preventZoom, { passive: false })
    document.addEventListener('touchend', preventDoubleTapZoom, { passive: false })

    return () => {
      document.removeEventListener('touchstart', preventZoom)
      document.removeEventListener('touchend', preventDoubleTapZoom)
    }
  }, [])
}
