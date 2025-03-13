"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Servicios", href: "#services" },
  { label: "Sobre Nosotros", href: "#about" },
  { label: "Portafolio", href: "#portfolio" },
  { label: "Partners", href: "#partners" },
  { label: "Contacto", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logosinletras-l0O2tVk7hIqQzidCvvJdDsefRlLhSW.png"
            alt="Innovación Tecnológica SK Logo"
            width={40}
            height={40}
          />
          <span
            className={cn(
              "font-bold text-lg transition-colors",
              isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white",
            )}
          >
            Innovación Tecnológica
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                isScrolled ? "text-slate-700 dark:text-slate-300" : "text-slate-700 dark:text-slate-300",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {isMounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={cn(
                "rounded-full",
                isScrolled ? "text-slate-700 dark:text-slate-300" : "text-slate-700 dark:text-slate-300",
              )}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Cambiar tema</span>
            </Button>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "md:hidden rounded-full",
                  isScrolled ? "text-slate-700 dark:text-slate-300" : "text-slate-700 dark:text-slate-300",
                )}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <Link href="#" className="flex items-center gap-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logosinletras-l0O2tVk7hIqQzidCvvJdDsefRlLhSW.png"
                      alt="Innovación Tecnológica SK Logo"
                      width={30}
                      height={30}
                    />
                    <span className="font-bold">Innovación Tecnológica</span>
                  </Link>
                </div>

                <nav className="flex flex-col gap-1 py-8">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center py-3 px-4 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto border-t py-4">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="#contact">Contáctenos</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Button asChild className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="#contact">Contáctenos</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

