"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScrollDown = () => {
    const nextSection = document.getElementById("services")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-light dark:bg-grid-pattern-dark" />
      </div>

      <div className="container relative z-10 px-4 py-24 md:py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logosinletras-l0O2tVk7hIqQzidCvvJdDsefRlLhSW.png"
            alt="Matrix Innovación Tecnológica SK Logo"
            width={180}
            height={180}
            className="mx-auto"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
            Innovación Tecnológica SK
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8"
        >
          Soluciones tecnológicas integrales para empresas. Automatización, IA, infraestructura de red, y servicios IT
          personalizados para impulsar su negocio hacia el futuro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="#contact">
              Solicitar Consulta <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#services">Nuestros Servicios</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={handleScrollDown}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-slate-600 dark:text-slate-400 mb-2">Descubra más</span>
          <ChevronDown className="h-6 w-6 text-blue-600 dark:text-blue-400 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}

