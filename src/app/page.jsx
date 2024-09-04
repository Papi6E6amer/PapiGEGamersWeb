/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/CQJowSooMOm
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Yeseva_One } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'

yeseva_one({
  subsets: ['latin'],
  display: 'swap',
})

cormorant_garamond({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header
        className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-md border-b border-muted/50 px-4 md:px-6 h-14 flex items-center">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <CodeIcon className="h-6 w-6" />
            <span className="text-lg font-semibold animate-pulse text-primary">Pablo Schefer Orduña</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}>
              Inicio
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=p38WgakuYDo&list=RDhX0lhueeib8&index=4"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}>
              Sobre mí
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}>
              Proyectos
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}>
              Habilidades
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}>
              Contacto
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <nav className="grid gap-4 py-6">
                <Link href="#" className="text-lg font-medium" prefetch={false}>
                  Inicio
                </Link>
                <Link href="#" className="text-lg font-medium" prefetch={false}>
                  Sobre mí
                </Link>
                <Link href="#" className="text-lg font-medium" prefetch={false}>
                  Proyectos
                </Link>
                <Link href="#" className="text-lg font-medium" prefetch={false}>
                  Habilidades
                </Link>
                <Link href="#" className="text-lg font-medium" prefetch={false}>
                  Contacto
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <section id="intro" className="pt-20 md:pt-24 lg:pt-32 bg-muted/40">
        <div
          className="container mx-auto px-4 md:px-6 space-y-6 md:space-y-8 lg:space-y-10">
          <div className="text-center space-y-4 md:space-y-6">
            <h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Hola, soy Pablo Schefer
            </h1>
            <p
              className="max-w-[700px] mx-auto text-muted-foreground md:text-xl lg:text-lg">
              Soy un desarrollador web apasionado por crear soluciones innovadoras y de alta calidad. Disfruto de los
              desafíos técnicos y me esfuerzo por mantener un enfoque en la mejora continua.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-105 duration-300"
                prefetch={false}>
                Descargar CV
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-105 duration-300"
                prefetch={false}>
                Contactar
              </Link>
            </div>
          </div>
          <img
            src="https://cdn.discordapp.com/attachments/1179054948063903754/1280816838195937281/pilares-de-la-creacion.png?ex=66d97522&is=66d823a2&hm=28cad054e37cd162302ff2e66b697e08264624ab6780229f52ca5faa62edb21e&"
            width="1200"
            height="600"
            alt="Intro"
            className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
            style={{
              borderRadius: '10px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'
            }}
          />
        </div>
      </section>
      <section id="about" className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 space-y-8 md:space-y-12">
          <div className="text-center space-y-4 md:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Acerca de mí</h2>
            <p
              className="max-w-[800px] mx-auto text-muted-foreground md:text-xl lg:text-lg">
              Soy un desarrollador web con experiencia en el diseño y la implementación de aplicaciones web modernas y
              escalables. Me apasiona la tecnología y me esfuerzo por mantenerme actualizado con las últimas tendencias
              e innovaciones.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <CodeIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Desarrollo web</h3>
              <p className="text-muted-foreground">
                Cuento con habilidades sólidas en HTML, CSS, JavaScript y diversos frameworks y bibliotecas como React,
                Vue.js y Angular.
              </p>
            </div>
            <div className="space-y-2">
              <DatabaseIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Bases de datos</h3>
              <p className="text-muted-foreground">
                Tengo experiencia trabajando con bases de datos relacionales como MySQL y PostgreSQL, así como bases de
                datos NoSQL como MongoDB.
              </p>
            </div>
            <div className="space-y-2">
              <CloudIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Despliegue en la nube</h3>
              <p className="text-muted-foreground">
                Sé cómo desplegar y mantener aplicaciones web en plataformas en la nube como AWS, Google Cloud y
                Microsoft Azure.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6 space-y-8 md:space-y-12">
          <div className="text-center space-y-4 md:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mis pasatiempos</h2>
            <p
              className="max-w-[800px] mx-auto text-muted-foreground md:text-xl lg:text-lg">
              Aquí puedes ver algunos de los pasatiempos a los que me dedico cada dia.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card className="max-w-[400px] hover:scale-105 duration-300">
              <div className="flex justify-center">
                <img
                  src="https://img.channelpartner.es/wp-content/uploads/2024/01/16165156/telecomunicaciones-tendencias-2.jpg.webp"
                  width="400"
                  height="225"
                  alt="Proyecto 1"
                  className="aspect-[16/9] overflow-hidden rounded-xl object-cover"
                  style={{
                    borderRadius: '10px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'
                  }}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">Pasatiempo 1</h3>
                <p className="text-muted-foreground">
                  Me dedico a formarme de forma oficial y extraoficial tanto en mi tiempo libre como en la formacion profesional de TELECO que estoy estudiando con el fin de aprender y poder dedicarme a las telecomunicaciones en mi futuro profesional
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-105 duration-300"
                  prefetch={false}>
                  Ver más
                </Link>
              </CardFooter>
            </Card>
            <Card className="max-w-[400px] hover:scale-105 duration-300">
              <div className="flex justify-center">
                <img
                  src="https://revistabyte.es/wp-content/uploads/2020/02/10-libros-para-aprender-a-programar.jpg"
                  width="400"
                  height="225"
                  alt="Proyecto 2"
                  className="aspect-[16/9] overflow-hidden rounded-xl object-cover"
                  style={{
                    borderRadius: '10px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'
                  }}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">Pasatiempo 2</h3>
                <p className="text-muted-foreground">
                  Me dedico a programar generalmente paginas web, pero tambien muchos programas de Hacking/Cracking y programas utiles de todo tipo.
                  En el caso de las paginas web utilizo React entre otros y en lo demas Python, C++, C#, etc...
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-105 duration-300"
                  prefetch={false}>
                  Ver más
                </Link>
              </CardFooter>
            </Card>
            <Card className="max-w-[400px] hover:scale-105 duration-300">
              <div className="flex justify-center">
                <img
                  src="https://projectl33t.com/wp-content/uploads/2024/03/discord.webp"
                  width="400"
                  height="225"
                  alt="Pasatiempo 3"
                  className="aspect-[16/9] overflow-hidden rounded-xl object-cover"
                  style={{
                    borderRadius: '10px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'
                  }}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">Pasatiempo 3</h3>
                <p className="text-muted-foreground">
                  Me dedico a mantenerme actualizado de todo en internet(sobre todo ciencia) y tambien a divertirme charlando con mis amigos.
                  Tambien me dedico a moderar el servidor de ValorantESP con  +70k y FNLB con +20k de usuarios.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-105 duration-300"
                  prefetch={false}>
                  Ver más
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 space-y-8 md:space-y-12">
          <div className="text-center space-y-4 md:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mis habilidades</h2>
            <p
              className="max-w-[800px] mx-auto text-muted-foreground md:text-xl lg:text-lg">
              Aquí puedes ver algunas de las habilidades que he desarrollado a lo largo de mi carrera personal como desarrollador
              web.
            </p>
          </div>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="flex flex-col items-center gap-2 hover:scale-105 duration-300">
              <HashIcon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">HTML</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 duration-300">
              <CodepenIcon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">CSS</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 duration-300">
              <EclipseIcon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">JavaScript</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 duration-300">
              <CogIcon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">C</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 duration-300">
              <ComputerIcon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">C#</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 duration-300">
              <PiIcon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">Python</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 duration-300">
              <WrenchIcon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">Rust</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 duration-300">
              <PiIcon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">PHP</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 duration-300">
              <NetworkIcon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-105 duration-300">
              <MoveIcon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">Go</span>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6 space-y-8 md:space-y-12">
          <div className="text-center space-y-4 md:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacto</h2>
            <p
              className="max-w-[800px] mx-auto text-muted-foreground md:text-xl lg:text-lg">
              Si tienes alguna pregunta o quieres que trabajemos juntos, no dudes en ponerte en contacto conmigo.
            </p>
          </div>
          <form className="max-w-xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" type="text" placeholder="Ingresa tu nombre" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Ingresa tu email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea id="message" placeholder="Escribe tu mensaje" rows={5} />
            </div>
            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </form>
        </div>
      </section>
    </div>)
  );
}

function CloudIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>)
  );
}


function CodeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>)
  );
}


function CodepenIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>)
  );
}


function CogIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>)
  );
}


function ComputerIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>)
  );
}


function DatabaseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>)
  );
}


function EclipseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>)
  );
}


function HashIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function MoveIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="5 9 2 12 5 15" />
      <polyline points="9 5 12 2 15 5" />
      <polyline points="15 19 12 22 9 19" />
      <polyline points="19 9 22 12 19 15" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>)
  );
}


function NetworkIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>)
  );
}


function PiIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="9" x2="9" y1="4" y2="20" />
      <path d="M4 7c0-1.7 1.3-3 3-3h13" />
      <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
    </svg>)
  );
}


function WrenchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>)
  );
}
