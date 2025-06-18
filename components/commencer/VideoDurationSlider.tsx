"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  onChange?: (seconds: number) => void
}

export function VideoDurationSelector({ className, onChange }: Props) {
  const [durationSec, setDurationSec] = React.useState<number>(60)

  const handleSliderChange = (val: number[]) => {
    const newVal = val[0]
    setDurationSec(newVal)
    onChange?.(newVal)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value)) {
      const clamped = Math.max(60, Math.min(300, value))
      setDurationSec(clamped)
      onChange?.(clamped)
    }
  }

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60)
    const sec = seconds % 60
    return `${min}m ${sec < 10 ? "0" : ""}${sec}s`
  }

  return (
    <div className={cn("w-full max-w-2xl mx-auto mt-10", className)}>
      <h2 className="text-xl font-semibold mb-4 text-center">
        Choisis la durée
      </h2>

      <div className="flex flex-col items-center gap-4">
        <Slider
          min={60}
          max={300}
          step={5}
          value={[durationSec]}
          onValueChange={handleSliderChange}
          className="w-full max-w-md"
        />

        <span className="text-muted-foreground text-lg">
          {formatTime(durationSec)}
        </span>

        <div className="flex items-center gap-2">
          <label htmlFor="duration" className="text-sm text-muted-foreground">
            Durée exacte (secondes) :
          </label>
          <Input
            id="duration"
            type="number"
            value={durationSec}
            onChange={handleInputChange}
            min={60}
            max={300}
            className="w-24"
          />
        </div>
      </div>
    </div>
  )
}
