"use client"

import StudioLayout from "@/components/menu/StudioLayout"
import { VideoSegmentGrid } from "@/components/decoupage/VideoSegmentGrid"

export default function DecoupagePage() {
  return (
    <StudioLayout title="Découpage vidéo">
      <h1 className="text-3xl font-bold text-center mb-8">Découpage vidéo</h1>
      <VideoSegmentGrid segments={8} />
    </StudioLayout>
  )
}
