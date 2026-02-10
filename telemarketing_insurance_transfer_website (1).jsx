import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, UserCheck, ShieldCheck, AlertCircle } from "lucide-react";

export default function TelemarketingTrainingSite() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Telemarketing Transfer Training</h1>
          <p className="text-gray-600">
            Insurance Prospecting & Call Transfer Guide for Telemarketing Teams
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="script" className="w-full">
          <TabsList className="grid grid-cols-5 w-full">
            <TabsTrigger value="script">Call Script</TabsTrigger>
            <TabsTrigger value="verify">Verify Info</TabsTrigger>
            <TabsTrigger value="transfer">Transfer Process</TabsTrigger>
            <TabsTrigger value="dosdonts">Do & Don’t</TabsTrigger>
            <TabsTrigger value="objections">Objections</TabsTrigger>
          </TabsList>

          {/* Script */}
          <TabsContent value="script">
            <Card className="rounded-2xl shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Phone />
                  <h2 className="text-xl font-semibold">Opening Script</h2>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl">
                  <p>
                    "Hi, is this <strong>[Prospect Name]</strong>? My name is
                    <strong> [Your Name]</strong> calling from
                    <strong> Chris Verdaguer Allstate Agency</strong>."
                  </p>

                  <p className="mt-3">
                    "The reason for my call is we’re reaching out to homeowners
                    in your area to provide a quick insurance comparison. Many
                    clients are finding better coverage and lower rates."
                  </p>

                  <p className="mt-3">
                    "It only takes a few minutes — I can connect you with a
                    licensed specialist who can review everything with you."
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Verify */}
          <TabsContent value="verify">
            <Card className="rounded-2xl shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <UserCheck />
                  <h2 className="text-xl font-semibold">Verify Prospect Information</h2>
                </div>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Full Name (First & Last)</li>
                  <li>Property Address</li>
                  <li>Best Contact Number</li>
                  <li>Confirm Homeownership</li>
                </ul>

                <div className="bg-gray-100 p-4 rounded-xl">
                  "Before I connect you, let me quickly verify a couple of
                  details so the specialist is prepared…"
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transfer */}
          <TabsContent value="transfer">
            <Card className="rounded-2xl shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck />
                  <h2 className="text-xl font-semibold">Warm Transfer Process</h2>
                </div>

                <ol className="list-decimal pl-6 space-y-2">
                  <li>Confirm prospect is interested.</li>
                  <li>Verify name & address.</li>
                  <li>Set expectation for licensed producer.</li>
                  <li>Stay on the line during transfer.</li>
                </ol>

                <div className="bg-gray-100 p-4 rounded-xl">
                  "Great — I’m going to connect you now with a licensed
                  specialist who can provide exact pricing and coverage
                  options. It’ll just take a moment." 
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Dos & Donts */}
          <TabsContent value="dosdonts">
            <div className="grid md:grid-cols-2 gap-6">

              <Card className="rounded-2xl shadow">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 text-green-600">
                    DO ✅
                  </h2>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Be friendly and confident</li>
                    <li>Keep calls short and focused</li>
                    <li>Create curiosity about savings</li>
                    <li>Verify information accurately</li>
                    <li>Use the agency name</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 text-red-600">
                    DON’T ❌
                  </h2>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Quote prices</li>
                    <li>Discuss coverages in detail</li>
                    <li>Sound robotic</li>
                    <li>Argue with prospects</li>
                    <li>Transfer without interest</li>
                  </ul>
                </CardContent>
              </Card>

            </div>
          </TabsContent>

          {/* Objections */}
          <TabsContent value="objections">
            <Card className="rounded-2xl shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <AlertCircle />
                  <h2 className="text-xl font-semibold">Common Objections</h2>
                </div>

                <div className="space-y-4">

                  <div className="bg-gray-100 p-4 rounded-xl">
                    <strong>“I’m not interested.”</strong>
                    <p>
                      "Totally understand — most people felt the same until
                      they saw how much they could save. It only takes a few
                      minutes to check."
                    </p>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-xl">
                    <strong>“I already have insurance.”</strong>
                    <p>
                      "Perfect — that’s exactly why we’re calling. We’re just
                      providing a comparison to make sure you’re getting the
                      best value."
                    </p>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-xl">
                    <strong>“I’m busy.”</strong>
                    <p>
                      "I understand — this will only take a moment, and I can
                      connect you right now so you don’t have to call back
                      later."
                    </p>
                  </div>

                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
