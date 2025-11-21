"use client"

import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Menu, QrCode } from "lucide-react"
import Link from "next/link"

interface NavbarProps {
  onMenuClick?: () => void
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          {user && (
            <Button variant="ghost" size="icon" onClick={onMenuClick} className="md:hidden">
              <Menu className="size-5" />
            </Button>
          )}
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <QrCode className="size-6 text-primary" />
            <span>Event Check-In</span>
          </Link>
        </div>

        {user && (
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-sm text-muted-foreground">{user.name}</span>
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
