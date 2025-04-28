"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    null
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button
    //       variant="outline"
    //       size="icon"
    //       className="rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 dark:bg-blue-900/30 dark:border-blue-800/50 dark:hover:bg-blue-900/50"
    //     >
    //       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-white dark:-rotate-90 dark:scale-0" />
    //       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all text-white dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  )
}
