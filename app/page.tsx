'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Navigation & UI Icons
import { 
  Menu, X, ChevronLeft, ChevronRight, ArrowRight,
  Check, Star, Phone, Mail, MessageCircle, Zap,
  Shield, Clock, Users, FileText, Bell, Target,
  DollarSign, TrendingUp, Calendar, Sparkles,
  MapPin, GraduationCap, BookOpen, UserCheck, Cpu,
  Database, X as XIcon
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [age, setAge] = useState(17)
  const [doctorCurrentSlide, setDoctorCurrentSlide] = useState(0)
  const [pemCurrentSlide, setPemCurrentSlide] = useState(0)
  const [isZoomOpen, setIsZoomOpen] = useState(false)
  const [currentZoomImage, setCurrentZoomImage] = useState('')
  const [currentZoomType, setCurrentZoomType] = useState('')
  const [zoomSlideIndex, setZoomSlideIndex] = useState(0)

  const doctorScreenshots = [
    '/images/projects/doctor-system-1.jpg',
    '/images/projects/doctor-system-2.jpg', 
    '/images/projects/doctor-system-3.jpg',
    '/images/projects/doctor-system-4.jpg',
    '/images/projects/doctor-system-6.jpg',
    '/images/projects/doctor-system-5.jpg'
  ]

  const pemScreenshots = [
    '/images/projects/pem-system-1.jpg',
    '/images/projects/pem-system-2.jpg',
    '/images/projects/pem-system-3.jpg', 
    '/images/projects/pem-system-4.jpg',
    '/images/projects/pem-system-5.jpg',
    '/images/projects/pem-system-6.jpg',
    '/images/projects/pem-system-7.jpg',
    '/images/projects/pem-system-8.jpg',
    '/images/projects/pem-system-9.jpg'
  ]

  const handleZoom = (imageSrc, type, index) => {
    setCurrentZoomImage(imageSrc)
    setCurrentZoomType(type)
    setZoomSlideIndex(index)
    setIsZoomOpen(true)
  }

  const nextZoomSlide = () => {
    if (currentZoomType === 'doctor') {
      const nextIndex = (zoomSlideIndex + 1) % doctorScreenshots.length
      setZoomSlideIndex(nextIndex)
      setCurrentZoomImage(doctorScreenshots[nextIndex])
    } else {
      const nextIndex = (zoomSlideIndex + 1) % pemScreenshots.length
      setZoomSlideIndex(nextIndex)
      setCurrentZoomImage(pemScreenshots[nextIndex])
    }
  }

  const prevZoomSlide = () => {
    if (currentZoomType === 'doctor') {
      const prevIndex = (zoomSlideIndex - 1 + doctorScreenshots.length) % doctorScreenshots.length
      setZoomSlideIndex(prevIndex)
      setCurrentZoomImage(doctorScreenshots[prevIndex])
    } else {
      const prevIndex = (zoomSlideIndex - 1 + pemScreenshots.length) % pemScreenshots.length
      setZoomSlideIndex(prevIndex)
      setCurrentZoomImage(pemScreenshots[prevIndex])
    }
  }

  useEffect(() => {
    const birthYear = 2009
    const currentYear = new Date().getFullYear()
    setAge(currentYear - birthYear)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="relative">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative">
                  <Image
                    src='/images/projects/Logo.png'
                    alt="Tanay Shinde Logo"
                    width={40}
                    height={40}
                    className="rounded-xl"
                  />
                </div>
                <span className="text-2xl font-bold text-white">Tanay Shinde</span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors font-medium">Home</a>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors font-medium">Projects</a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors font-medium">About</a>
                <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-medium hover:opacity-90 transition-all">
                  Get in Touch
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-300"
              >
                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden py-4">
                <div className="flex flex-col gap-2">
                  <a href="#home" onClick={closeMenu} className="px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white">Home</a>
                  <a href="#projects" onClick={closeMenu} className="px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white">Projects</a>
                  <a href="#about" onClick={closeMenu} className="px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white">About</a>
                  <a href="#contact" onClick={closeMenu} className="px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-medium text-center">Get in Touch</a>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-24 flex items-center justify-center min-h-[90vh]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 mb-8 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span className="text-base font-medium text-cyan-300">Website Developer & Designer • Nashik, Maharashtra</span>
              </div>

            {/* Headline */}
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
  I Build Custom Websites<br />
  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
    That Work For Your Business
  </span>
</h1>

              {/* Subheadline */}
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Fully custom websites and web applications—built from scratch, designed for your exact needs. No templates, no compromises. From medical practices to any business you can think of.
              </p>

              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {[
                  { icon: <Clock className="w-5 h-5" />, text: 'Fast delivery (10-14 days)' },
                  { icon: <Database className="w-5 h-5" />, text: 'Custom-built, no templates' },
                  { icon: <Shield className="w-5 h-5" />, text: 'Mobile responsive' },
                  { icon: <Zap className="w-5 h-5" />, text: 'Ongoing support' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="text-cyan-400">{item.icon}</div>
                    <span className="text-gray-300 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Simple Stats */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">2 Major Projects Live</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Used Daily Since Launch</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Serving Clients Nationwide</span>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#projects" 
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                >
                  See My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800/50 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all border border-gray-700"
                >
                  Discuss Your Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                My Recent Work
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Real projects I've built—all custom-coded from the ground up
              </p>
            </div>

            {/* Project 1: Practice Management System */}
            <div className="mb-32">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-900/30 text-green-300 rounded-full text-base font-medium mb-6 backdrop-blur-sm">
                    <Zap className="w-4 h-4" />
                    Live & Active • Running Since Sept 2025
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">Complete Practice Management System</h3>

                  <p className="text-xl text-gray-300 mb-8">
                    Built for Dr. Vrushinit Saudagar's homeopathy practice—replaces 8+ Excel files with one centralized system. Tracks finances, tasks, and dues automatically.
                  </p>
                  
                  {/* Client's Real Feedback */}
                  <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/10 p-6 rounded-xl border border-green-900/30 mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles className="w-5 h-5 text-green-400" />
                      <span className="text-lg font-bold text-white">Client Feedback:</span>
                    </div>
                    <p className="text-lg text-gray-300 arial mb-2">
                      "Very well designed and made. It's very useful—we get all details in one place. This saves time and all the manual work I was doing before."
                    </p>
                    <p className="text-base text-green-300 font-medium">
                      — Dr. Vrushinit Saudagar
                    </p>
                  </div>
                  
                  {/* The Actual Problem Solved */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-cyan-400" />
                      What Changed:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-lg text-white font-medium">Before:</span>
                          <span className="text-lg text-gray-300"> Managing 8+ Excel files for different aspects of the practice. Spending 1.5 hours daily on manual data entry and calculations.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-lg text-white font-medium">Now:</span>
                          <span className="text-lg text-gray-300"> One system handles everything. Saves 1+ hour daily. All data in one searchable place with automatic calculations.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Core Features */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-900/30 text-blue-300 flex-shrink-0">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Smart Income & Expense Tracking</h4>
                        <p className="text-gray-300 text-base">
                          Track every rupee by source and payment mode. Separate categories for different needs. Visual charts show monthly trends. Export ready reports with one click.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-purple-900/30 text-purple-300 flex-shrink-0">
                        <Bell className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Task & Dues Management</h4>
                        <p className="text-gray-300 text-base">
                          Daily/yearly tasks with repeat options. Dues tracking with built-in reminders. Filter by date, category, payment method. Everything searchable.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-green-900/30 text-green-300 flex-shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Analytics & Budget Controls</h4>
                        <p className="text-gray-300 text-base">
                          Set monthly budgets—get alerts at 80% utilization. Real-time net balance calculation. Historical data always accessible. Filter and export any date range instantly.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Built With */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Database className="w-5 h-5 text-cyan-400" />
                      Technical Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['HTML5/CSS3', 'JavaScript (ES6+)', 'MySQL Database', 'Mobile-Responsive', 'Secure Authentication', 'Data Export (Excel)'].map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-blue-900/30 text-blue-300 rounded-lg text-sm border border-blue-800/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Development Time */}
                  <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-green-400" />
                      <span className="text-sm text-gray-300">
                        <span className="font-semibold text-white">Built in 10 days:</span> From initial meeting to live deployment. Now used daily for 4+ months with continuous improvements based on feedback.
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Screenshot Carousel */}
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden border border-gray-700 bg-gray-800 shadow-xl shadow-black/20">
                    {/* Browser Mockup Bar */}
                    <div className="bg-gray-900 border-b border-gray-700 p-4">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex-1 text-center">
                          <div className="text-lg text-gray-500">Practice Management System</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Image Container */}
                    <div className="relative h-96 bg-gray-900">
                      <div 
                        className="absolute inset-0 cursor-pointer"
                        onClick={() => handleZoom(doctorScreenshots[doctorCurrentSlide], 'doctor', doctorCurrentSlide)}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={doctorScreenshots[doctorCurrentSlide]}
                            alt={`Practice Management System Screenshot ${doctorCurrentSlide + 1}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 800px) 100vw, 800px"
                            priority={doctorCurrentSlide === 0}
                          />
                          {/* Slide Label */}
                          <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none z-20">
                            <div className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-md px-5 py-2.5 rounded-xl border border-cyan-600/40 shadow-lg">
                              <div className="text-sm font-bold text-cyan-300 tracking-wider drop-shadow-lg">
                                {['DASHBOARD', 'INCOME TRACKER', 'EXPENSE MANAGER', 'TASK SYSTEM', 'DUES MANAGER','ANALYTICS' ][doctorCurrentSlide]}
                              </div>
                              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rotate-45"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Navigation Arrows */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          setDoctorCurrentSlide((prev) => prev === 0 ? doctorScreenshots.length - 1 : prev - 1)
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-gray-600 hover:bg-black/70 transition-all group z-10"
                      >
                        <ChevronLeft className="w-4 h-4 text-white group-hover:text-cyan-300 transition-colors" />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          setDoctorCurrentSlide((prev) => prev === doctorScreenshots.length - 1 ? 0 : prev + 1)
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-gray-600 hover:bg-black/70 transition-all group z-10"
                      >
                        <ChevronRight className="w-4 h-4 text-white group-hover:text-cyan-300 transition-colors" />
                      </button>
                      
                      {/* Slide Indicators */}
                      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {doctorScreenshots.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation()
                              setDoctorCurrentSlide(idx)
                            }}
                            className={`h-1.5 rounded-full transition-all duration-200 ${
                              doctorCurrentSlide === idx 
                                ? 'bg-white w-5' 
                                : 'bg-gray-600 w-3 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: PEM Educational Platform */}
            <div className="mb-32">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  {/* PEM Carousel */}
                  <div className="relative">
                    <div className="rounded-2xl overflow-hidden border border-gray-700 bg-gray-800 shadow-xl shadow-black/20">
                      {/* Browser Mockup Bar */}
                      <div className="bg-gray-900 border-b border-gray-700 p-4">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          </div>
                          <div className="flex-1 text-center">
                            <div className="text-lg text-gray-500">pemhomeopathy.com</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Image Container */}
                      <div className="relative h-96 bg-gray-900">
                        <div 
                          className="absolute inset-0 cursor-pointer"
                          onClick={() => handleZoom(pemScreenshots[pemCurrentSlide], 'pem', pemCurrentSlide)}
                        >
                          <div className="relative w-full h-full">
                            <Image
                              src={pemScreenshots[pemCurrentSlide]}
                              alt={`PEM Platform Screenshot ${pemCurrentSlide + 1}`}
                              fill
                              className="object-contain"
                              sizes="(max-width: 800px) 100vw, 800px"
                              priority={pemCurrentSlide === 0}
                            />
                            {/* Slide Label */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none z-20">
                              <div className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-md px-5 py-2.5 rounded-xl border border-purple-600/40 shadow-lg">
                                <div className="text-sm font-bold text-purple-300 tracking-wider drop-shadow-lg">
                                  {['HOMEPAGE','DOCTOR PROFILE', 'DOCTOR PROFILE', 'DOCTOR PROFILE', 'COURSE PAGE','COURSE PAGE',  'LIVE CLASSES', 'BOOKS LIBRARY', 'Gallery'][pemCurrentSlide]}
                                </div>
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rotate-45"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Navigation Arrows */}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation()
                            setPemCurrentSlide((prev) => prev === 0 ? pemScreenshots.length - 1 : prev - 1)
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-gray-600 hover:bg-black/70 transition-all group z-10"
                        >
                          <ChevronLeft className="w-4 h-4 text-white group-hover:text-purple-300 transition-colors" />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation()
                            setPemCurrentSlide((prev) => prev === pemScreenshots.length - 1 ? 0 : prev + 1)
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-gray-600 hover:bg-black/70 transition-all group z-10"
                        >
                          <ChevronRight className="w-4 h-4 text-white group-hover:text-purple-300 transition-colors" />
                        </button>
                        
                        {/* Slide Indicators */}
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {pemScreenshots.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation()
                                setPemCurrentSlide(idx)
                              }}
                              className={`h-1.5 rounded-full transition-all duration-200 ${
                                pemCurrentSlide === idx 
                                  ? 'bg-white w-5' 
                                  : 'bg-gray-600 w-3 hover:bg-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-900/30 text-purple-300 rounded-full text-base font-medium mb-6 backdrop-blur-sm">
                    <GraduationCap className="w-4 h-4" />
                    Educational Website • Live at pemhomeopathy.com
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">Personal Evolution Model Platform</h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Complete educational website for Dr. Mahesh Gandhi's PEM methodology—30+ custom-coded pages featuring doctor profiles, course catalog, and resource library. Built from scratch, no templates.
                  </p>
                  
                  {/* Client Feedback */}
                  <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/10 p-6 rounded-xl border border-purple-900/30 mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Star className="w-5 h-5 text-purple-400" />
                      <span className="text-lg font-bold text-white">Client Feedback:</span>
                    </div>
                    <p className="text-lg text-gray-300 arial">
                      "At the age of 17, you have made this website—it's insane! It's very best. We are fully convinced and impressed with the work."
                    </p>
                  </div>
                  
                  {/* What It Does */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: <UserCheck className="w-5 h-5" />, title: '8 Doctors', desc: 'Individual detailed profiles' },
                      { icon: <GraduationCap className="w-5 h-5" />, title: '8 Courses', desc: 'Complete curriculum pages' },
                      { icon: <BookOpen className="w-5 h-5" />, title: 'Books Library', desc: 'Publications & resources' },
                      { icon: <Users className="w-5 h-5" />, title: '30+ Pages', desc: 'All interconnected content' }
                    ].map((feature, idx) => (
                      <div key={idx} className="p-4 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-purple-900/30 text-purple-300">
                            {feature.icon}
                          </div>
                          <div className="text-lg font-semibold text-white">{feature.title}</div>
                        </div>
                        <div className="text-base text-gray-400 pl-11">{feature.desc}</div>
                      </div>
                    ))}
                  </div>

                  {/* Image Preloading */}
                  <div className="hidden">
                    {doctorScreenshots.map((img, idx) => (
                      <Image
                        key={`doctor-preload-${idx}`}
                        src={img}
                        alt=""
                        width={100}
                        height={100}
                        priority={idx === 0}
                      />
                    ))}
                    {pemScreenshots.map((img, idx) => (
                      <Image
                        key={`pem-preload-${idx}`}
                        src={img}
                        alt=""
                        width={100}
                        height={100}
                        priority={idx === 0}
                      />
                    ))}
                  </div>
                  
                  {/* What I Built */}
                  <div className="space-y-3 mb-8">
                    {[
                      "All content written, designed, and coded by me from scratch",
                      "8 individual doctor profiles with credentials, specializations, and experience",
                      "8 detailed course pages with full curriculum and enrollment information",
                      "Books library with medical publications and reference materials",
                      "Fully responsive design—works perfectly on mobile, tablet, and desktop",
                      "Used for course registrations and doctor directory—gets inquiries daily"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-basetext-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technology */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Database className="w-5 h-5 text-purple-400" />
                      Built With:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Custom HTML/CSS', 'JavaScript', 'MySQL Database', 'Responsive Design', 'SEO Optimized', 'Fast Loading'].map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-purple-900/30 text-purple-300 rounded-lg text-sm border border-purple-800/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visit Link */}
                  <div className="p-4 bg-purple-900/20 rounded-xl border border-purple-900/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-purple-400" />
                        <span className="text-white font-medium">Live at pemhomeopathy.com</span>
                      </div>
                      <a 
                        href="https://pemhomeopathy.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-purple-200 transition-colors flex items-center gap-2"
                      >
                        Visit Site
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What Makes My Work Different */}
            <div className="mt-24 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-cyan-900/30">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    How I Build Differently
                  </h3>
                  <p className="text-lg text-gray-300">
                    Why clients choose custom-built websites over templates
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Target className="w-6 h-6" />,
                      title: "Built for Your Needs",
                      desc: "I spend time understanding exactly what you need—then build the website around YOUR requirements, not force you into a template."
                    },
                    {
                      icon: <Zap className="w-6 h-6" />,
                      title: "Fast Delivery",
                      desc: "Most projects delivered in 10-14 days. I work full-time on your project, continuously communicate progress, and iterate based on your feedback."
                    },
                    {
                      icon: <Shield className="w-6 h-6" />,
                      title: "Ongoing Support",
                      desc: "After launch, I'm available for updates, fixes, and improvements. Your website evolves as your business grows."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-lg bg-cyan-900/30 text-cyan-300">
                          {item.icon}
                        </div>
                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      </div>
                      <p className="text-gray-300 text-base leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-gray-900/30 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  About Me
                </h2>
                <p className="text-gray-300 text-xl">
                  Website Developer & Designer—coding since age 16
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    I'm {age} years old and I've been coding since I was 16. I started building websites after seeing how businesses struggle with generic templates that don't fit their needs.
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    My first major project was a practice management system for a doctor—it solved real problems and they use it every day. That experience showed me that custom-built solutions always work better than one-size-fits-all templates.
                  </p>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    I don't use WordPress or templates. Every website I build is custom-coded from scratch—designed specifically for how your business operates. This takes more work, but it means your site fits your exact requirements instead of forcing you to adapt to generic tools.
                  </p>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-white mb-4">What I Can Build:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'Custom business websites (5-20 pages)',
                        'Web applications (management systems, dashboards)',
                        'E-commerce and booking systems',
                        'Educational platforms and course websites',
                        'Mobile-responsive designs (all sites work on phones)',
                        'Database design and management',
                        'Secure authentication and user systems',
                        'Custom features tailored to your needs'
                      ].map((skill, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-cyan-900/20 rounded-xl border border-cyan-900/30">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="font-bold text-white">My approach:</span> I work closely with you throughout development—continuous communication, regular demos, and iterations based on your feedback. The goal is to build something you'll actually use and love, not just another website that sits there.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-white mb-4">Technical Skills:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { skill: 'HTML/CSS', level: 8.5 },
                        { skill: 'JavaScript', level: 9.6 },
                        { skill: 'MySQL', level: 8.9 },
                        { skill: 'UI/UX Design', level: 9.4 },
                        { skill: 'Responsive Design', level: 9.6 },
                        { skill: 'API Integration', level: 8.5 },
                        { skill: 'Database Design', level: 8.9 },
                        { skill: 'Problem Solving', level: 9.5 }
                      ].map((item, idx) => (
                        <div key={idx} className="p-4 bg-gray-800/30 rounded-xl border border-gray-700">
                          <div className="text-sm font-medium text-white mb-2">{item.skill}</div>
                          <div className="flex gap-1">
                            {[...Array(10)].map((_, i) => (
                              <div 
                                key={i} 
                                className={`h-1 flex-1 rounded-full ${
                                  i < Math.floor(item.level) ? 'bg-cyan-400' : 'bg-gray-700'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Let's Discuss Your Project
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Free consultation to understand your needs—no sales pitch, just exploring if custom development makes sense for you
              </p>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto mb-12 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Get in Touch:
                </h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <a 
                    href="tel:+917219632603"
                    className="group block p-6 bg-gradient-to-r from-blue-900/20 to-blue-800/10 rounded-xl border border-blue-700/30 hover:border-blue-600 transition-all hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-blue-900/30 group-hover:bg-blue-800/40 transition-colors">
                          <Phone className="w-6 h-6 text-blue-300" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-white text-lg">Call or Text</div>
                          <div className="text-blue-300">+91 7219632603</div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" />
                    </div>
                  </a>
                  
                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/917219632603?text=Hi%20Tanay,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20custom%20website%20for%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-gradient-to-r from-green-900/20 to-emerald-800/10 rounded-xl border border-green-700/30 hover:border-green-600 transition-all hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-green-900/30 group-hover:bg-green-800/40 transition-colors">
                          <MessageCircle className="w-6 h-6 text-green-300" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-white text-lg">WhatsApp Message</div>
                          <div className="text-sm text-gray-400">Quick and convenient</div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 group-hover:translate-x-2 transition-all" />
                    </div>
                  </a>
                  
                  {/* Email */}
                  <a 
                    href="mailto:tanay@scaleemailer.com?subject=Custom%20Website%20Inquiry&body=Hi%20Tanay,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20custom%20website%20for%20my%20business.%0A%0AWhen%20would%20be%20a%20good%20time%20to%20connect?"
                    className="group block p-6 bg-gradient-to-r from-purple-900/20 to-pink-800/10 rounded-xl border border-purple-700/30 hover:border-purple-600 transition-all hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-purple-900/30 group-hover:bg-purple-800/40 transition-colors">
                          <Mail className="w-6 h-6 text-purple-300" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-white text-lg">Email</div>
                          <div className="text-purple-300 text-sm">tanay@scaleemailer.com</div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-2 transition-all" />
                    </div>
                  </a>
                </div>
                
                <div className="pt-8 mt-8 border-t border-gray-700">
                  <div className="flex flex-wrap justify-center gap-6 text-base text-gray-400">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Free consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>No obligations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Quick response</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex justify-center items-center gap-2 text-lg text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Based in Nashik, Maharashtra • Serving clients nationwide</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-700">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative">
                  <Image
                    src='/images/projects/Logo.png'
                    alt="Tanay Shinde Logo"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">
                    Tanay Shinde
                  </div>
                  <div className="text-lg text-gray-400">Website Developer & Designer</div>
                </div>
              </div>
              
              <div className="text-gray-500 text-sm text-center md:text-right">
                <div>© {new Date().getFullYear()} Tanay Shinde. All rights reserved.</div>
                <div className="mt-1">Custom-built websites • No templates • Fast delivery</div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Zoom Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4">
          {/* Close Button */}
          <button 
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-black/80 text-white hover:bg-black hover:scale-110 transition-all z-50 shadow-lg"
          >
            <XIcon className="w-6 h-6" />
          </button>
          
          {/* Slide Counter */}
          <div className="absolute top-6 left-6 px-4 py-2 rounded-lg bg-black/80 text-white text-sm font-medium z-50">
            {zoomSlideIndex + 1} / {currentZoomType === 'doctor' ? doctorScreenshots.length : pemScreenshots.length}
          </div>
          
          {/* Slide Title */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none z-50">
            <div className={`backdrop-blur-md px-5 py-2.5 rounded-xl shadow-lg ${
              currentZoomType === 'doctor' 
                ? 'bg-gradient-to-r from-gray-900/90 to-gray-800/90 border border-cyan-600/40' 
                : 'bg-gradient-to-r from-gray-900/90 to-gray-800/90 border border-purple-600/40'
            }`}>
              <div className={`text-sm font-bold tracking-wider drop-shadow-lg ${
                currentZoomType === 'doctor' ? 'text-cyan-300' : 'text-purple-300'
              }`}>
                {currentZoomType === 'doctor' 
                  ? ['DASHBOARD', 'INCOME TRACKER', 'EXPENSE MANAGER', 'TASK SYSTEM', 'DUES MANAGER','ANALYTICS'][zoomSlideIndex]
                  : ['HOMEPAGE','DOCTOR PROFILE', 'DOCTOR PROFILE', 'DOCTOR PROFILE', 'COURSE PAGE','COURSE PAGE',  'LIVE CLASSES', 'BOOKS LIBRARY','Gallery'][zoomSlideIndex]
                }
              </div>
              <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                currentZoomType === 'doctor' ? 'bg-cyan-400' : 'bg-purple-400'
              }`}></div>
            </div>
          </div>
          
          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative max-w-full max-h-full">
              <Image
                src={currentZoomImage}
                alt="Zoomed view"
                width={1400}
                height={900}
                className="object-contain max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevZoomSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 text-white hover:bg-black hover:scale-110 transition-all z-50 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextZoomSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 text-white hover:bg-black hover:scale-110 transition-all z-50 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
            {currentZoomType === 'doctor' 
              ? doctorScreenshots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setZoomSlideIndex(idx)
                      setCurrentZoomImage(doctorScreenshots[idx])
                    }}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      zoomSlideIndex === idx 
                        ? 'bg-white w-8' 
                        : 'bg-gray-600 w-4 hover:bg-gray-400'
                    }`}
                  />
                ))
              : pemScreenshots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setZoomSlideIndex(idx)
                      setCurrentZoomImage(pemScreenshots[idx])
                    }}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      zoomSlideIndex === idx 
                        ? 'bg-white w-8' 
                        : 'bg-gray-600 w-4 hover:bg-gray-400'
                    }`}
                  />
                ))
            }
          </div>
          
          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10 cursor-pointer"
            onClick={() => setIsZoomOpen(false)}
          />
        </div>
      )}
    </div>
  )
}