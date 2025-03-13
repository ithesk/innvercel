import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-white">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="#" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logosinletras-l0O2tVk7hIqQzidCvvJdDsefRlLhSW.png"
                alt="Innovación Tecnológica SK Logo"
                width={40}
                height={40}
              />
              <span className="font-bold text-lg">Innovación Tecnológica</span>
            </Link>
            <p className="text-slate-400">
              Soluciones tecnológicas integrales para empresas. Impulsando la transformación digital en República
              Dominicana.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {["Inicio", "Servicios", "Sobre Nosotros", "Portafolio", "Partners", "Contacto"].map((item, index) => (
                <li key={index}>
                  <Link
                    href={`#${item.toLowerCase() === "inicio" ? "" : item.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-3">
              {[
                "Infraestructura IT",
                "Automatización & IA",
                "Cableado Estructurado",
                "Soluciones a Medida",
                "Distribución de Hardware",
                "Soporte Técnico",
              ].map((item, index) => (
                <li key={index}>
                  <Link href="#services" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Boletín Informativo</h3>
            <p className="text-slate-400 mb-4">
              Suscríbase para recibir noticias y actualizaciones sobre nuestros servicios.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Su email"
                className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Suscribirse</Button>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-slate-400">Santo Domingo, República Dominicana</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-slate-400">+1 (809) 274-2666</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-slate-400">info@ithesk.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Innovación Tecnológica SK. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

