"use client"

import { useCallback } from "react"
import StudioLayout from "@/components/menu/StudioLayout"
import { VideoFormatSelector } from "@/components/commencer/VideoFormatSelector"
import { VideoDropzone } from "@/components/commencer/VideoDropzone"
import { VideoDurationSlider } from "@/components/commencer/VideoDurationSlider"

export default function PlacerVideoPage() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log("Fichiers reçus :", acceptedFiles)
  }, [])

  return (
    <StudioLayout title="Placer la vidéo">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Placer la vidéo
      </h1>
      <VideoDropzone onDrop={onDrop} />
      <VideoDurationSlider onChange={(val) => console.log("Durée choisie :", val)} />
      <VideoFormatSelector />
    </StudioLayout>
  )
}
