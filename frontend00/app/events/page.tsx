"use client"

import { Calendar } from "@/components/ui/calendar"

import { useEffect, useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import api from "@/lib/api"

interface Event {
  id: string
  name: string
  location: string
  date: string
  attendeesCount: number
  qrCodeUrl: string
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/events")
        setEvents(response.data)
      } catch (error) {
        console.error("Failed to fetch events:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Events</h1>
            <p className="text-muted-foreground">Manage all your events</p>
          </div>
          <Button asChild>
            <Link href="/events/create">
              <Plus className="size-4" />
              Create Event
            </Link>
          </Button>
        </div>

        {events.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <Calendar className="size-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No events yet</h3>
            <p className="text-muted-foreground mb-4">Get started by creating your first event</p>
            <Button asChild>
              <Link href="/events/create">
                <Plus className="size-4" />
                Create Event
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
