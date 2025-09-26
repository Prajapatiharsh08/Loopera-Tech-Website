'use client'

import { useEffect } from 'react'

export default function VisitorTracker() {
  useEffect(() => {
    if (document.cookie.includes('loopera_visited=1')) return

    const sendVisit = async () => {
      try {
        const response = await fetch('/api/visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            url: window.location.href,
            path: window.location.pathname,
            referrer: document.referrer,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString()
          })
        })

        const data = await response.json()
        if (!data.success) console.error('VisitorTracker failed:', data.error)
        else console.log('VisitorTracker: visit logged successfully')
      } catch (err) {
        console.error('VisitorTracker fetch error:', err)
      }
    }

    sendVisit()

    document.cookie = 'loopera_visited=1; path=/; max-age=3600; SameSite=Lax'
  }, [])

  return null
}
