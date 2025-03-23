"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    category: "infraestructura",
    title: "Modernización de Infraestructura IT",
    client: "Empresa de Logística",
    description:
      "Implementación de una infraestructura de red completa con servidores virtualizados y sistemas de respaldo.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    category: "automatizacion",
    title: "Sistema de Automatización de Procesos",
    client: "Compañía Manufacturera",
    description: "Desarrollo e implementación de soluciones de automatización para optimizar la cadena de producción.",
    image: "/logohass.png?height=400&width=600",
  },
  {
    category: "redes",
    title: "Cableado Estructurado para Oficinas",
    client: "Firma de Abogados",
    description: "Instalación de sistema de cableado estructurado Cat6A para nueva sede corporativa de 3 pisos.",
    image: "/cableado.webp?height=400&width=600",
  },
  {
    category: "software",
    title: "Plataforma de Gestión Empresarial",
    client: "Cadena de Retail",
    description: "Desarrollo de software personalizado para la gestión integral de inventario y ventas.",
    image: "/?height=400&width=600",
  },
  {
    category: "infraestructura",
    title: "Centro de Datos Modular",
    client: "Institución Financiera",
    description:
      "Diseño e implementación de un centro de datos modular con sistemas redundantes de energía y refrigeración.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    category: "automatizacion",
    title: "Chatbot con IA para Atención al Cliente",
    client: "Empresa de Telecomunicaciones",
    description: "Desarrollo de un chatbot inteligente para mejorar la experiencia de atención al cliente.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="portfolio" className="w-full py-20 bg-white dark:bg-slate-950">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Nuestro Portafolio</h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Conozca algunos de los proyectos que hemos realizado para nuestros clientes, demostrando nuestra experiencia
            y capacidad para ofrecer soluciones tecnológicas de calidad.
          </p>
        </div>

        <div ref={ref}>
          <Tabs defaultValue="todos" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="todos">Todos</TabsTrigger>
                <TabsTrigger value="infraestructura">Infraestructura</TabsTrigger>
                <TabsTrigger value="automatizacion">Automatización</TabsTrigger>
                <TabsTrigger value="redes">Redes</TabsTrigger>
                <TabsTrigger value="software">Software</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="todos" className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </motion.div>
            </TabsContent>

            {["infraestructura", "automatizacion", "redes", "software"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {projects
                    .filter((project) => project.category === category)
                    .map((project, index) => (
                      <ProjectCard key={index} project={project} index={index} />
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group h-full">
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <Button
                variant="outline"
                size="sm"
                className="text-white border-white hover:bg-white/20 hover:text-white"
              >
                Ver Detalles <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
          <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{project.client}</p>
          <p className="text-slate-600 dark:text-slate-400">{project.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

