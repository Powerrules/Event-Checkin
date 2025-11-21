"use client"

import type React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Modal } from "@/components/ui/modal"
import { CheckCircle2, XCircle, Camera, User } from "lucide-react"
import api from "@/lib/api"
import dynamic from "next/dynamic"

const Scanner = dynamic(() => import("@yudiel/react-qr-scanner").then((mod) => mod.Scanner), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-muted/30 rounded-lg">
      <div className="text-center">
        <Camera className="size-12 text-muted-foreground mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">Loading camera...</p>
      </div>
    </div>
  ),
})

interface CheckInResult {
  success: boolean
  message: string
  attendee?: {
    name: string
    email: string
    checkedInAt: string
  }
}

export default function ScannerPage() {
  const [step, setStep] = useState<"details" | "scan">("details")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [scanning, setScanning] = useState(false)
  const [result, setResult] = useState<CheckInResult | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) {
      setStep("scan")
      setScanning(true)
    }
  }

  const handleScan = async (detectedCodes: any[]) => {
    if (!scanning || detectedCodes.length === 0) return

    const qrData = detectedCodes[0].rawValue

    try {
      // Assume QR code contains just the eventId or a URL with eventId
      // If it's a URL like https://.../checkin/event123, extract event123
      let eventId = qrData
      if (qrData.includes("/checkin/")) {
        eventId = qrData.split("/checkin/")[1]
      }
      // Fallback for pipe separated format if used
      if (qrData.includes("|")) {
        eventId = qrData.split("|")[0]
      }

      const response = await api.post("/checkin", {
        eventId,
        attendeeName: name,
        attendeeEmail: email,
      })

      setResult({
        success: true,
        message: "Check-in successful!",
        attendee: response.data,
      })
    } catch (error: any) {
      setResult({
        success: false,
        message: error.response?.data?.message || "Check-in failed. Invalid QR or already checked in.",
      })
    } finally {
      setShowResult(true)
      setScanning(false)
    }
  }

  const handleError = (error: any) => {
    console.error("Scanner error:", error)
    setResult({
      success: false,
      message: "Camera access denied or not available",
    })
    setShowResult(true)
    setScanning(false)
  }

  const resetScanner = () => {
    setShowResult(false)
    setResult(null)
    setStep("details")
    setName("")
    setEmail("")
  }

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">QR Check-In</h1>
          <p className="text-muted-foreground">Enter your details and scan the event QR code</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{step === "details" ? "Attendee Details" : "Scan Event QR"}</CardTitle>
            <CardDescription>
              {step === "details"
                ? "Please enter your information before scanning"
                : "Point your camera at the Event QR Code"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === "details" ? (
              <form onSubmit={handleStartScan} className="space-y-4">
                <div className="flex justify-center mb-6">
                  <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="size-10 text-primary" />
                  </div>
                </div>

                <Input
                  label="Full Name"
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

                <Button type="submit" className="w-full" size="lg">
                  <Camera className="size-4 mr-2" />
                  Continue to Scan
                </Button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden border-2 border-primary/20 relative">
                  <Scanner
                    onScan={handleScan}
                    onError={handleError}
                    constraints={{
                      facingMode: "environment",
                    }}
                    styles={{
                      container: {
                        width: "100%",
                        aspectRatio: "1",
                      },
                    }}
                  />
                  <div className="absolute inset-0 border-2 border-primary/50 m-12 rounded-lg pointer-events-none animate-pulse" />
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setScanning(false)
                    setStep("details")
                  }}
                  className="w-full"
                >
                  Cancel
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Modal
        isOpen={showResult}
        onClose={resetScanner}
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
                  Checked in at{" "}
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

          <Button onClick={resetScanner} className="w-full">
            Done
          </Button>
        </div>
      </Modal>
    </DashboardLayout>
  )
}
