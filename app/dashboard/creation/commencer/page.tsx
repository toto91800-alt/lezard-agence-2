"use client"

import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Video } from "lucide-react"
import Link from "next/link"

import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"

export default function PlacerVideoPage() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log("Fichiers reçus :", acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "video/*": []
    },
    multiple: false
  })

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Studio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Placer la vidéo</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col items-center justify-start p-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Placer la vidéo
          </h1>

          <div
            {...getRootProps()}
            className="w-full max-w-2xl h-64 border-2 border-dashed border-gray-400 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer bg-gray-50 dark:bg-zinc-800 hover:border-blue-500 transition-colors"
          >
            <input {...getInputProps()} />
            <Video className="w-12 h-12 mb-4 text-gray-500 dark:text-gray-300" />
            <p className="text-gray-600 dark:text-gray-200 text-lg text-center">
              {isDragActive
                ? "Lâche la vidéo ici 📽️"
                : "Dépose ta vidéo ici ou clique pour en choisir une"}
            </p>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
