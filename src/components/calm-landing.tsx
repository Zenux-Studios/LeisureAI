"use client"

import { useState } from "react"
import Link from "next/link"

import { ChevronDown, MessageCircle, Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function BCALabsLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className=" bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center">
          <Link href="#" className="flex items-center gap-1 font-bold text-white">
            <span className="text-white">calm</span>
            <span className="text-xs text-blue-400">★</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 text-sm">
          <Link href="#" className="text-blue-400 flex items-center gap-1">
            <span>Explore</span>
            <ChevronDown className="w-4 h-4" />
          </Link>
          <Link href="#" className="text-gray-400">
            Pricing
          </Link>
          <Link href="#" className="text-gray-400">
            Blogs
          </Link>
          <Link href="#" className="text-gray-400 flex items-center gap-1">
            <Search className="w-4 h-4" />
          </Link>
          <Link href="#" className="text-gray-400 flex items-center gap-1">
            <Menu className="w-4 h-4" />
          </Link>
        </div>

        <div className="hidden md:block">
          {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-md px-3 py-1 h-auto">
            Sign Up
          </Button> */}
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 p-4">
          <div className="flex flex-col gap-4">
            <Link href="#" className="text-blue-400 flex items-center gap-1">
              <span>Explore</span>
              <ChevronDown className="w-4 h-4" />
            </Link>
            <Link href="#" className="text-gray-400">
              Pricing
            </Link>
            <Link href="#" className="text-gray-400">
              Blogs
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-md px-3 py-1 h-auto w-full">
              Sign Up
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="flex justify-center items-center gap-1 text-xs text-gray-400 mb-2">
          <span>✨</span>
          <span>Transforming the Mental Health</span>
          <span>✨</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
        Find Peace with AI <span className="text-blue-400">Share, Heal, and Connect</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">for Mental Health</h2>
        <p className="max-w-xl mx-auto text-gray-400 text-sm mb-8">
        An AI-powered platform for <span className="text-blue-400">AI-powered</span> student
          <span className="text-blue-400"> systems</span> offering refined answers and notes for{" "}
          <span className="text-blue-400">BCA, MCA, B.Tech,</span> and more.
        </p>
        <Button className="bg-white hover:bg-gray-200 text-black font-medium rounded-md px-6">
          EXPLORE AI LIBRARY
        </Button>
      </section>

      {/* PYQs Section */}
      <section className="py-12 px-4 text-center bg-black">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="text-blue-400">AI Experts Systems</span> can now Solve <br />
          and Create <span className="text-pink-500">PYQs</span>
        </h2>
        <p className="max-w-xl mx-auto text-gray-400 text-sm mb-8">
          Our AI experts can create & solve PYQs for you. No need of searching for PYQs on the internet. We have got you
          covered.
        </p>
      </section>

      {/* Q&A Section */}
      {/* <section className="py-8 px-4 max-w-3xl mx-auto">
        <div className="border border-gray-800 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-blue-500/20 rounded-full p-1">
              <Search className="w-4 h-4 text-blue-400" />
            </div>
            <h3 className="text-blue-400 text-lg">
              What are Web desktops? What is their relationship to cloud computing?
            </h3>
          </div>

          <div className="text-gray-300 pl-8">
            <p className="mb-4">
              Web desktops are virtualized desktop environments accessed through a web browser. Instead of running
              applications directly on your computer&apos;s hardware, you access them remotely via the internet. Think of it
              like using a computer that lives somewhere else, but you interact with it as if it were right in front of
              you.
            </p>
            <p className="mb-4">Here&apos;s a breakdown of web desktops and their relationship with cloud computing:</p>
            <p className="mb-2 font-medium">7.5 marks (5 points):</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <span className="font-medium">Definition:</span> A web desktop is a user interface accessed via a web
                browser, providing access to applications and data stored remotely on a server.
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* AI Expert Section */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">
          <span className="text-blue-400">AI Expert</span> for every Subject
        </h2>
        <p className="max-w-xl mx-auto text-gray-400 text-sm mb-8">
          Our AI experts are available 24/7 to help you with your queries.
          <br />
          Don&apos;t hesitate to ask any question. Updated with the latest syllabus and curriculum.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {/* Feature 1 */}
          {/* <div className="bg-gray-900 rounded-lg p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-500/20 rounded-full p-1">
                <MessageCircle className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-sm font-medium">BCA</span>
            </div>
            <p className="text-xs text-gray-400">Computer programs, data structures</p>
          </div> */}

          {/* Feature 2 */}
          {/* <div className="bg-gray-900 rounded-lg p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-pink-500/20 rounded-full p-1">
                <MessageCircle className="w-4 h-4 text-pink-400" />
              </div>
              <span className="text-sm font-medium">BTech</span>
            </div>
          </div> */}

          {/* Feature 3 */}
          {/* <div className="bg-gray-900 rounded-lg p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-500/20 rounded-full p-1">
                <MessageCircle className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-sm font-medium">Diverse AI Experts</span>
            </div>
            <p className="text-xs text-gray-400">
              Access specialized experts in math, physics, chemistry, BCA, MCA, and more.
            </p>
          </div> */}
      

        </div>
      </section>

      {/* Bottom Features */}
      {/* <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
          {/* Feature 1 */}
          {/* <div className="bg-gray-900 rounded-lg p-4">
            <div className="flex justify-center mb-4">
              <Image
                src="/placeholder.svg?height=150&width=200"
                alt="Chat Interface"
                width={200}
                height={150}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-center font-medium mb-2">Interactive Chat Interface</h3>
            <p className="text-xs text-gray-400 text-center">
              Engage with our AI experts through a user-friendly chat interface with quick message delivery.
            </p>
          </div> */}

          {/* Feature 2 */}
          {/* <div className="bg-gray-900 rounded-lg p-4">
            <div className="flex justify-center mb-4">
              <Image
                src="/placeholder.svg?height=150&width=200"
                alt="Quality Responses"
                width={200}
                height={150}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-center font-medium mb-2">Quality Responses</h3>
            <p className="text-xs text-gray-400 text-center">
              Don&apos;t know how to proceed? Let us guide you through your queries.
            </p>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="py-8 px-4 text-center">
        <h2 className="text-2xl font-bold">We Don&apos;t Say, We Deliver</h2>
      </footer> */}
    </div>
  )
}

