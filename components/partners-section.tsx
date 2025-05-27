"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const partners = [
    { name: "VEEAM", logo: "/VVAR.png?height=80&width=200" },
    { name: "Ubuntu", logo: "/ubuntu.jpeg?height=80&width=200" },
    { name: "Cisco", logo: "/cisco.png?height=80&width=200" },
    { name: "Dell", logo: "/placeholder.svg?height=80&width=200" },
    { name: "HP", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Hass", logo: "/logohass.png?height=80&width=200" },
    { name: "Proxmox", logo: "/proxmox.png?height=80&width=200" },
  ]

  return (
    <section id="partners" className="w-full py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Nuestros Partners</h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Colaboramos con las marcas líderes en tecnología para ofrecer las mejores soluciones a nuestros clientes.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={200}
                height={80}
                className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

