"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type AspectRatioProps = {
  ratio?: number | string // ex: 16/9 or 9/16
  children: React.ReactNode
  className?: string
}

export const AspectRatio = ({
  ratio = 16 / 9,
  children,
  className,
  ...props
}: AspectRatioProps) => {
  const numericRatio =
    typeof ratio === "string"
      ? eval(ratio) // e.g., "16/9" => 1.777...
      : ratio

  return (
    <div
      className={cn("relative w-full", className)}
      style={{ aspectRatio: `${numericRatio}` }}
      {...props}
    >
      <div className="absolute inset-0">{children}</div>
    </div>
  )
}
