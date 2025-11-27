"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu"
import { Button } from "components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

export function DesktopHeader() {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "/studio", label: "Studio" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:rotate-90 rounded-full h-10 w-10 sm:h-12 sm:w-12 bg-background/80 backdrop-blur-sm"
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-[26rem] mt-2 bg-primary text-primary-foreground border-l-4 border-accent p-2 shadow-2xl space-y-1"
        >
          {menuItems.map((item) => (
            <DropdownMenuItem key={item.href} asChild className="p-0">
              <Link
                href={item.href}
                className="w-full text-lg font-bold py-2 px-3 rounded-md hover:bg-primary hover:text-accent focus:bg-primary focus:text-accent transition-all duration-300 hover:translate-x-2 focus:outline-none"
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}