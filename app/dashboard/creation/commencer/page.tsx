"use client"

import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Video } from "lucide-react"
import StudioLayout from "@/components/menu/StudioLayout"

export default function PlacerVideoPage() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log("Fichiers reçus :", acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "video/*": [] },
    multiple: false
  })

  return (
    <StudioLayout title="Placer la vidéo">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Placer la vidéo
      </h1>

      <div
        {...getRootProps()}
        className="w-full max-w-2xl h-64 border-2 border-dashed border-gray-400 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer bg-gray-50 dark:bg-zinc-800 hover:border-blue-500 transition-colors mx-auto"
      >
        <input {...getInputProps()} />
        <Video className="w-12 h-12 mb-4 text-gray-500 dark:text-gray-300" />
        <p className="text-gray-600 dark:text-gray-200 text-lg text-center">
          {isDragActive
            ? "Lâche la vidéo ici 📽️"
            : "Dépose ta vidéo ici ou clique pour en choisir une"}
        </p>
      </div>
    </StudioLayout>
  )
}
