"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="w-full py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Oficina de Matrix Innovación Tecnológica"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-full opacity-20 z-0"></div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6"
            >
              Sobre <span className="text-blue-600">Innovación Tecnológica</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 mb-6">
              Innovación Tecnológica SK es una empresa líder en soluciones tecnológicas integrales para el sector
              empresarial en República Dominicana. Desde nuestra fundación, nos hemos dedicado a proporcionar servicios
              de alta calidad que impulsan la transformación digital de nuestros clientes.
            </motion.p>

            <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 mb-8">
              Contamos con un equipo de profesionales altamente capacitados y certificados en las tecnologías más
              avanzadas del mercado, lo que nos permite ofrecer soluciones innovadoras y eficientes para cualquier
              desafío tecnológico.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-4">
              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">
                  Más de 12 años de experiencia en el sector tecnológico
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">
                  Equipo de profesionales certificados en tecnologías de vanguardia
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">
                  Soluciones personalizadas adaptadas a las necesidades específicas de cada cliente
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">
                  Compromiso con la excelencia y la satisfacción del cliente
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

