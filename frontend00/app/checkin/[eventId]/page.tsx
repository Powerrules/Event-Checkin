"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Modal } from "@/components/ui/modal"
import { CheckCircle2, XCircle, QrCode } from "lucide-react"
import api from "@/lib/api"

interface CheckInResult {
  success: boolean
  message: string
  attendee?: {
    name: string
    email: string
    checkedInAt: string
  }
}

export default function ManualCheckinPage() {
  const params = useParams()
  const [eventName, setEventName] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<CheckInResult | null>(null)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await api.get(`/events/${params.eventId}`)
        setEventName(response.data.name)
      } catch (error) {
        console.error("Failed to fetch event:", error)
      }
    }

    fetchEvent()
  }, [params.eventId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await api.post("/checkin", {
        eventId: params.eventId,
        attendeeName: name,
        attendeeEmail: email,
      })

      setResult({
        success: true,
        message: "Check-in successful!",
        attendee: response.data,
      })
      setName("")
      setEmail("")
    } catch (error: any) {
      setResult({
        success: false,
        message: error.response?.data?.message || "Check-in failed",
      })
    } finally {
      setLoading(false)
      setShowResult(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="size-12 rounded-xl bg-primary flex items-center justify-center">
              <QrCode className="size-6 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl">Event Check-In</CardTitle>
          <CardDescription>{eventName || "Loading event..."}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Checking in..." : "Check In"}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              By checking in, you confirm your attendance at this event
            </p>
          </form>
        </CardContent>
      </Card>

      <Modal
        isOpen={showResult}
        onClose={() => {
          setShowResult(false)
          setResult(null)
        }}
        title={result?.success ? "Check-in Successful" : "Check-in Failed"}
      >
        <div className="text-center space-y-4">
          {result?.success ? (
            <>
              <CheckCircle2 className="size-16 text-green-500 mx-auto" />
              <div>
                <h3 className="text-lg font-semibold mb-1">{result.attendee?.name}</h3>
                <p className="text-sm text-muted-foreground">{result.attendee?.email}</p>
              </div>
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="text-sm text-green-700 dark:text-green-400">
                  Successfully checked in at{" "}
                  {result.attendee?.checkedInAt && new Date(result.attendee.checkedInAt).toLocaleTimeString()}
                </p>
              </div>
            </>
          ) : (
            <>
              <XCircle className="size-16 text-destructive mx-auto" />
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                <p className="text-sm text-destructive">{result?.message}</p>
              </div>
            </>
          )}

          <Button
            onClick={() => {
              setShowResult(false)
              setResult(null)
            }}
            className="w-full"
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  )
}
