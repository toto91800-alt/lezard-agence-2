"use client"

import { useState } from "react"
import { AspectRatio } from "@/components/commencer/AspectRatio"
import { cn } from "@/lib/utils"

type Format = "landscape" | "portrait"

export function VideoFormatSelector() {
    const [selected, setSelected] = useState<Format | null>(null)

    const formats: {
        label: string
        value: Format
        ratio: number
        sizeClass: string
    }[] = [
            {
                label: "16:9 (Paysage)",
                value: "landscape",
                ratio: 16 / 9,
                sizeClass: "w-56",
            },
            {
                label: "9:16 (Portrait)",
                value: "portrait",
                ratio: 9 / 16,
                sizeClass: "w-40",
            },
        ]

    return (
        <div className="mt-12 w-full max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-6 text-center">
                Choisis un format
            </h2>
            <div className="flex justify-center gap-10 items-center">

                {formats.map((format) => (
                    <button
                        key={format.value}
                        onClick={() => setSelected(format.value)}
                        className="flex flex-col items-center gap-2 transition-all"
                    >
                        <div
                            className={cn(
                                "relative border rounded-md overflow-hidden shadow-md transition-all",
                                selected === format.value
                                    ? "border-blue-500 ring-2 ring-blue-300"
                                    : "border-gray-300 hover:border-gray-500",
                                format.sizeClass
                            )}
                        >
                            <AspectRatio ratio={format.ratio}>
                                <div className="w-full h-full bg-muted flex items-center justify-center text-sm text-muted-foreground font-medium">
                                    {format.label}
                                </div>
                            </AspectRatio>

                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}
