"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    Tally: any
  }
}

export function TallyForm() {
  const TALLY_FORM_URL = "https://tally.so/embed/aQOd19?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"

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
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="Contact form"
      className="rounded-3xl"
    ></iframe>
  )
}