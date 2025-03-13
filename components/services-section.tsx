"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Server, Cpu, Network, Bot, Headphones, Settings, Code, Shield } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Server className="h-10 w-10 text-blue-600" />,
    title: "Infraestructura IT",
    description: "Diseño e implementación de infraestructuras tecnológicas robustas y escalables para empresas.",
  },
  {
    icon: <Bot className="h-10 w-10 text-blue-600" />,
    title: "Automatización & IA",
    description: "Soluciones de automatización e inteligencia artificial para optimizar procesos empresariales.",
  },
  {
    icon: <Network className="h-10 w-10 text-blue-600" />,
    title: "Cableado Estructurado",
    description: "Instalación profesional de sistemas de cableado para redes de datos y comunicaciones.",
  },
  {
    icon: <Code className="h-10 w-10 text-blue-600" />,
    title: "Soluciones a Medida",
    description:
      "Desarrollo de soluciones tecnológicas personalizadas según las necesidades específicas de su empresa.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-blue-600" />,
    title: "Distribución de Hardware",
    description: "Suministro de equipos informáticos y hardware especializado para entornos empresariales.",
  },
  {
    icon: <Headphones className="h-10 w-10 text-blue-600" />,
    title: "Soporte Técnico",
    description: "Servicio de soporte técnico y mantenimiento para garantizar la continuidad de sus operaciones.",
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: "Ciberseguridad",
    description: "Protección integral contra amenazas digitales y gestión de la seguridad de la información.",
  },
  {
    icon: <Settings className="h-10 w-10 text-blue-600" />,
    title: "Consultoría Tecnológica",
    description: "Asesoramiento estratégico para la transformación digital y optimización de recursos tecnológicos.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" className="w-full py-20 bg-white dark:bg-slate-950">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Nuestros Servicios</h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Ofrecemos una amplia gama de servicios tecnológicos para ayudar a su empresa a crecer y mantenerse
            competitiva en la era digital.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

