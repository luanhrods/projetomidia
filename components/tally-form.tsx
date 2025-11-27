"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    Tally: any
  }
}

export function TallyForm() {
  // TODO: Replace with your Tally form URL
  const TALLY_FORM_URL = "https://tally.so/r/w2zlkO" // Example URL

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://tally.so/widgets/embed.js"
    script.async = true
    script.onload = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds()
      }
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <iframe
      data-tally-src={TALLY_FORM_URL}
      loading="lazy"
      width="100%"
      height="300"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Contact form"
      className="rounded-3xl"
    ></iframe>
  )
}