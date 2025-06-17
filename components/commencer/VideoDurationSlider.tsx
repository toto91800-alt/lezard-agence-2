"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

type Props = {
  value?: number
  onChange?: (value: number) => void
  className?: string
}

export function VideoDurationSlider({ value = 1, onChange, className }: Props) {
  const [duration, setDuration] = React.useState<number>(value)

  const handleChange = (val: number[]) => {
    const newDuration = val[0]
    setDuration(newDuration)
    onChange?.(newDuration)
  }

  return (
    <div className={cn("w-full max-w-2xl mx-auto mt-10", className)}>
      <h2 className="text-xl font-semibold mb-4 text-center">
        Choisis la durée
      </h2>

      <div className="flex flex-col items-center gap-4">
        <Slider
          defaultValue={[duration]}
          min={1}
          max={5}
          step={1}
          onValueChange={handleChange}
          className="w-full max-w-md"
        />
        <span className="text-muted-foreground text-lg">
          {duration} minute{duration > 1 ? "s" : ""}
        </span>
      </div>
    </div>
  )
}
