"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2"
          style={{
            backgroundColor: "var(--toggle-bg)",
            color: "var(--toggle-fg)",
            borderColor: "var(--toggle-border)",
            // si tu veux teinter l’anneau de focus à la volée :
            boxShadow: "0 0 0 0 var(--toggle-ring)",
          }}
          aria-label="Toggle theme"
        >
          {/* Icônes héritent de currentColor => suivent --toggle-fg */}
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="border"
        style={{
          backgroundColor: "var(--toggle-bg)",
          color: "var(--toggle-fg)",
          borderColor: "var(--toggle-border)",
        }}
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("custom")}>Custom</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
