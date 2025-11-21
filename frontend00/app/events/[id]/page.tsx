"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Download } from "lucide-react"
import api from "@/lib/api"
import Image from "next/image"

interface Attendee {
  id: string
  name: string
  email: string
  checkedInAt: string
}

interface Event {
  id: string
  name: string
  location: string
  date: string
  description: string
  qrCodeUrl: string
  attendees: Attendee[]
}

export default function EventDetailsPage() {
  const params = useParams()
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await api.get(`/events/${params.id}`)
        setEvent(response.data)
      } catch (error) {
        console.error("Failed to fetch event:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvent()
  }, [params.id])

  const handleDownloadQR = () => {
    if (event?.qrCodeUrl) {
      const link = document.createElement("a")
      link.href = event.qrCodeUrl
      link.download = `${event.name}-qr-code.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
        </div>
      </DashboardLayout>
    )
  }

  if (!event) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold">Event not found</h2>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{event.name}</h1>
          <p className="text-muted-foreground">{event.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Event Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="size-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Date & Time</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(event.date).toLocaleString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="size-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm font-medium mb-1">Total Check-ins</p>
                <p className="text-3xl font-bold">{event.attendees.length}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>QR Code</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center p-4 bg-muted/30 rounded-lg">
                <Image
                  src={event.qrCodeUrl || "/placeholder.svg"}
                  alt="Event QR Code"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <Button onClick={handleDownloadQR} className="w-full">
                <Download className="size-4" />
                Download QR Code
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Attendees ({event.attendees.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {event.attendees.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">No attendees have checked in yet</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Name</th>
                      <th className="text-left py-3 px-4 font-medium">Email</th>
                      <th className="text-left py-3 px-4 font-medium">Check-in Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {event.attendees.map((attendee) => (
                      <tr key={attendee.id} className="border-b last:border-0">
                        <td className="py-3 px-4">{attendee.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{attendee.email}</td>
                        <td className="py-3 px-4 text-muted-foreground">
                          {new Date(attendee.checkedInAt).toLocaleString("en-US", {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
