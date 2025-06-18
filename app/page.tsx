"use client"

import Link from "next/link"
import Image from "next/image"
import { PanelsTopLeft, Github, ArrowRight } from "lucide-react" // <-- lucide-react icons

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/menu/ModeToggle"
import { NavbarDemo } from "@/components/menu/NavbarDemo"
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full px-4">
         <NavbarDemo />
        <div className="max-w-7xl mx-auto w-full pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Créer le film de ton envie
            </h1>
            <span className="max-w-[750px] text-center text-lg font-light text-foreground">
              A stunning and functional retractable sidebar for Next.js using
              shadcn/ui complete with desktop and mobile responsiveness.
            </span>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default" asChild>
                <Link href="/dashboard">
                  Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Studio
                </Link>
              </Button>
            </div>
          </section>
          <div className="flex justify-center relative w-full">
            {/* Image affichée uniquement en mode clair */}
            <Image
              src="/images/demo-light-min.png"
              width={1080}
              height={608}
              alt="demo"
              priority
              className="border rounded-xl shadow-sm dark:hidden"
            />

            <Image
              src="/images/demo-dark-min.png"
              width={1080}
              height={608}
              alt="demo-dark"
              priority
              className="border border-zinc-600 rounded-xl shadow-sm hidden dark:block dark:shadow-gray-500/5"
            />
          </div>
        </div>
          <nav className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8 bg-background"
              asChild
            >
            </Button>
            <ModeToggle />
          </nav>
      </main>

    </div>
  )
}
