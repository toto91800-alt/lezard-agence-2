"use client"

import { useCallback } from "react"
import StudioLayout from "@/components/menu/StudioLayout"
import { VideoFormatSelector } from "@/components/commencer/VideoFormatSelector"
import { VideoDropzone } from "@/components/commencer/VideoDropzone"
import { VideoDurationSelector } from "@/components/commencer/VideoDurationSlider"
import { Button } from "@/components/ui/button"




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
            <VideoDurationSelector onChange={(val: number) => console.log("Durée choisie :", val)} />

            <VideoFormatSelector />
            <div className="flex justify-center mt-10">
                <Button
                    size="lg"
                    className="text-lg px-8 py-6"
                    onClick={() => console.log("Démarrage...")}
                >
                Démarrer
                </Button>
            </div>

        </StudioLayout>
    )
}
