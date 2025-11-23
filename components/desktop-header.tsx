"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

export function DesktopHeader() {
  const menuItems = [
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "/studio", label: "Studio" },
    { href: "#approach", label: "Approach" },
    { href: "#contact", label: "Contact" },
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
        <DropdownMenuContent align="end" className="w-56 mt-2">
          {menuItems.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <Link href={item.href} className="font-bold">
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}