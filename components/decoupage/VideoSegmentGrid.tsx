"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

export type VideoSegmentGridProps = {
  segments?: number
}

export function VideoSegmentGrid({ segments = 6 }: VideoSegmentGridProps) {
  return (
    <div className="mt-12 max-w-5xl mx-auto w-full">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Tes séquences découpées
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: segments }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div
              className={cn(
                "aspect-video bg-muted rounded-md overflow-hidden border border-dashed border-gray-300 dark:border-gray-600 w-full"
              )}
            >
              <Image
                src="/placeholder.png"
                alt={`Aperçu épisode ${i + 1}`}
                width={320}
                height={180}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm text-muted-foreground font-medium">
              Épisode {i + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
