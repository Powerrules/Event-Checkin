"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Modal } from "@/components/ui/modal"
import api from "@/lib/api"
import Image from "next/image"

export default function CreateEventPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [createdEvent, setCreatedEvent] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const dateTime = `${date}T${time}`
      const response = await api.post("/events", {
        name,
        location,
        date: dateTime,
        description,
      })

      setCreatedEvent(response.data)
      setShowSuccess(true)
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create event")
    } finally {
      setLoading(false)
    }
  }

  const handleDownloadQR = () => {
    if (createdEvent?.qrCodeUrl) {
      const link = document.createElement("a")
      link.href = createdEvent.qrCodeUrl
      link.download = `${createdEvent.name}-qr-code.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Event</h1>
          <p className="text-muted-foreground">Set up a new event with QR code check-in</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                  {error}
                </div>
              )}

              <Input
                label="Event Name"
                placeholder="Tech Summit 2024"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <Input
                label="Location"
                placeholder="Convention Center, Hall A"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />

              <div className="grid gap-4 md:grid-cols-2">
                <Input label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

                <Input label="Time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
              </div>

              <Textarea
                label="Description"
                placeholder="Describe your event..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />

              <div className="flex gap-3">
                <Button type="submit" disabled={loading} className="flex-1">
                  {loading ? "Creating..." : "Create Event"}
                </Button>
                <Button type="button" variant="outline" onClick={() => router.back()}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Modal
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false)
          router.push("/events")
        }}
        title="Event Created Successfully!"
      >
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">{createdEvent?.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">Your event has been created with a unique QR code</p>
          </div>

          {createdEvent?.qrCodeUrl && (
            <div className="flex justify-center p-4 bg-muted/30 rounded-lg">
              <Image
                src={createdEvent.qrCodeUrl || "/placeholder.svg"}
                alt="Event QR Code"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          )}

          <div className="flex gap-3">
            <Button onClick={handleDownloadQR} className="flex-1">
              Download QR Code
            </Button>
            <Button variant="outline" onClick={() => router.push(`/events/${createdEvent?.id}`)} className="flex-1">
              View Event
            </Button>
          </div>
        </div>
      </Modal>
    </DashboardLayout>
  )
}
