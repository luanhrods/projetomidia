"use client"

import { useState } from "react"
import { X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { DesktopHeader } from "./desktop-header"

export function Header() {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState(false)

  // Renderiza o menu otimizado para desktop
  if (!isMobile) {
    return <DesktopHeader />
  }

  // Renderiza o menu fly-out para mobile
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        size="icon"
        variant="ghost"
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:rotate-90 rounded-full h-10 w-10 sm:h-12 sm:w-12"
      >
        <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="sr-only">Open menu</span>
      </Button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-50 transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`fixed top-0 right-0 h-full w-full sm:w-[85vw] md:w-[600px] lg:w-[700px] bg-primary text-primary-foreground z-50 transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-2xl`}
      >
        <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 bg-accent" />

        <div className="flex flex-col h-full p-6 sm:p-8 md:p-12 lg:p-16">
          <Button
            onClick={() => setIsOpen(false)}
            size="icon"
            variant="ghost"
            className="self-end mb-8 sm:mb-12 md:mb-16 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:rotate-90 rounded-full h-10 w-10 sm:h-12 sm:w-12"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">Close menu</span>
          </Button>

          <div
            className={`flex-1 flex flex-col justify-center space-y-4 sm:space-y-6 transition-all duration-500 delay-300 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            {[
              { href: "/", label: "Home" },
              { href: "/work", label: "Work" },
              { href: "#services", label: "Services" },
              { href: "/studio", label: "Studio" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold hover:text-accent transition-all duration-300 hover:translate-x-4"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 space-y-3 sm:space-y-4 text-sm border-t border-primary-foreground/20 pt-6 sm:pt-8">
            <p className="opacity-70 text-sm sm:text-base">New business? Let's talk:</p>
            <a
              href="mailto:hey@projetomidia.com"
              className="text-lg sm:text-xl md:text-2xl font-bold hover:text-accent transition-colors block break-all"
            >
              hey@projetomidia.com
            </a>
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 text-sm sm:text-base">
              <a href="#" className="hover:text-accent transition-colors font-medium">
                Instagram
              </a>
              <a href="#" className="hover:text-accent transition-colors font-medium">
                LinkedIn
              </a>
              <a href="#" className="hover:text-accent transition-colors font-medium">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}