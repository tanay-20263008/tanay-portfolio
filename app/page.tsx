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
  Database, X as XIcon // Renamed XIcon to avoid conflict
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [age, setAge] = useState(17)
  const [doctorCurrentSlide, setDoctorCurrentSlide] = useState(0)
  const [pemCurrentSlide, setPemCurrentSlide] = useState(0)
  const [isZoomOpen, setIsZoomOpen] = useState(false)
  const [currentZoomImage, setCurrentZoomImage] = useState('')
  const [currentZoomType, setCurrentZoomType] = useState('') // 'doctor' or 'pem'
  const [zoomSlideIndex, setZoomSlideIndex] = useState(0)

  const doctorScreenshots = [
    '/images/projects/doctor-system-1.jpg',
    '/images/projects/doctor-system-2.jpg', 
    '/images/projects/doctor-system-3.jpg',
    '/images/projects/doctor-system-4.jpg',
    '/images/projects/doctor-system-5.jpg'
  ]

  const pemScreenshots = [
    '/images/projects/pem-system-1.jpg',
    '/images/projects/pem-system-2.jpg',
    '/images/projects/pem-system-3.jpg', 
    '/images/projects/pem-system-4.jpg'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      {/* Main content container */}
      <div className="relative">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Tanay</span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors font-medium">Home</a>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors font-medium">Systems</a>
                <a href="#results" className="text-gray-300 hover:text-white transition-colors font-medium">Results</a>
                <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-medium hover:opacity-90 transition-all">
                  Get Your Time Back
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
                  <a href="#home" className="px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white">Home</a>
                  <a href="#projects" className="px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white">Systems</a>
                  <a href="#results" className="px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white">Results</a>
                  <a href="#contact" className="px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-medium text-center">Get Your Time Back</a>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section - Killer Copy */}
        <section id="home" className="pt-32 pb-24 flex items-center justify-center min-h-[90vh]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 mb-8 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span className="text-sm font-medium text-cyan-300">Age {age} • Medical Systems Developer</span>
              </div>

              {/* Headline That Grabs Attention */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Stop Trading<br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Patient Time for Paperwork
                </span>
              </h1>

              {/* Subheadline That Connects */}
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                I build clinic automation systems that give doctors back <span className="text-white font-bold">4 hours daily</span>—so you can focus on what matters: your patients.
              </p>

              {/* Doctor-Specific Benefits */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {[
                  { icon: <FileText className="w-5 h-5" />, text: 'CA-ready reports in one click' },
                  { icon: <Bell className="w-5 h-5" />, text: 'Zero missed follow-ups' },
                  { icon: <Clock className="w-5 h-5" />, text: '15-minute daily check-in' },
                  { icon: <Shield className="w-5 h-5" />, text: 'HIPAA compliant by design' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="text-cyan-400">{item.icon}</div>
                    <span className="text-gray-300 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Results That Matter */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">120+</div>
                  <div className="text-sm text-gray-300">Hours reclaimed monthly</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-sm text-gray-300">Follow-up compliance</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-sm text-gray-300">Tax audit-ready</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-orange-400 mb-2">2 min</div>
                  <div className="text-sm text-gray-300">Daily expense tracking</div>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                >
                  Get Your Free Clinic Time Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Medical First Language */}
        <section id="projects" className="py-24 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Your Clinic's New Operating System
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Built specifically for medical practice headaches—solved permanently
              </p>
            </div>

            {/* Project 1: Doctor Management System */}
            <div className="mb-32">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-900/30 text-green-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                    <Zap className="w-4 h-4" />
                    Live • Saving Doctors Time Daily
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">Clinic Command Center</h3>
                  <p className="text-xl text-gray-300 mb-8">
                    The system that ends last-minute tax panic and patient follow-up chaos
                  </p>
                  
                  {/* Results First */}
                  <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/10 p-6 rounded-xl border border-green-900/30 mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles className="w-5 h-5 text-green-400" />
                      <span className="font-bold text-white">Dr. Sharma's Results:</span>
                    </div>
                    <p className="text-gray-300">
                      "Went from 2 hours daily paperwork to 15-minute morning check-in. My CA asked what changed."
                    </p>
                  </div>
                  
                  {/* Pain Points Solved */}
                  <div className="space-y-4 mb-8">
                    {[
                      "No more mixing personal & clinic finances",
                      "Auto-reminders for patient follow-ups",
                      "CA gets perfect reports monthly",
                      "Staff scheduling without headaches"
                    ].map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{point}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Medical Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-cyan-400" />
                      Built for Medical Workflows:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Prescription Templates', 'Lab Report Integration', 'Insurance Claim Assistant', 'Telemedicine Ready', 'Patient History Timeline', 'Vaccination Scheduler'].map((feature, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-blue-900/30 text-blue-300 rounded-lg text-sm border border-blue-800/50">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Screenshot Carousel - CLEAN VERSION */}
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
                          <div className="text-lg text-gray-500">Doctor's Management System</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Image Container - FIXED FOR CLARITY */}
                    <div className="relative h-96 bg-gray-900">
                      {/* Main image container - CLICKABLE AREA */}
                      <div 
                        className="absolute inset-0 cursor-pointer"
                        onClick={() => handleZoom(doctorScreenshots[doctorCurrentSlide], 'doctor', doctorCurrentSlide)}
                      >
                        {/* Image with proper dimensions */}
                        <div className="relative w-full h-full">
                          <Image
                            src={doctorScreenshots[doctorCurrentSlide]}
                            alt={`Doctor System Screenshot ${doctorCurrentSlide + 1}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 800px) 100vw, 800px"
                            priority={doctorCurrentSlide === 0}
                          />
                          {/* Slide Name at TOP - Improved Visibility */}
                          <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none z-20">
                            <div className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-md px-5 py-2.5 rounded-xl border border-cyan-600/40 shadow-lg">
                              <div className="text-sm font-bold text-cyan-300 tracking-wider drop-shadow-lg">
                                {['DASHBOARD', 'EXPENSE TRACKER', 'INCOME MANAGER', 'TASK SYSTEM', 'ANALYTICS'][doctorCurrentSlide]}
                              </div>
                              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rotate-45"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Navigation Arrows - Minimal */}
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
                      
                      {/* Subtle Slide Indicators at Bottom */}
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

            {/* Project 2: PEM Platform */}
            <div className="mb-32">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  {/* PEM Carousel - Clean Version */}
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
                            <div className="text-lg text-gray-500">Medical Education Platform</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Image Container - FIXED FOR CLARITY */}
                      <div className="relative h-96 bg-gray-900">
                        {/* Main image container - CLICKABLE AREA */}
                        <div 
                          className="absolute inset-0 cursor-pointer"
                          onClick={() => handleZoom(pemScreenshots[pemCurrentSlide], 'pem', pemCurrentSlide)}
                        >
                          {/* Image with proper dimensions */}
                          <div className="relative w-full h-full">
                            <Image
                              src={pemScreenshots[pemCurrentSlide]}
                              alt={`PEM Platform Screenshot ${pemCurrentSlide + 1}`}
                              fill
                              className="object-contain"
                              sizes="(max-width: 800px) 100vw, 800px"
                              priority={pemCurrentSlide === 0}
                            />
                            {/* Slide Name at TOP - Improved Visibility */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none z-20">
                              <div className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-md px-5 py-2.5 rounded-xl border border-purple-600/40 shadow-lg">
                                <div className="text-sm font-bold text-purple-300 tracking-wider drop-shadow-lg">
                                  {['HOMEPAGE', 'DOCTOR PROFILES', 'COURSES', 'LIBRARY'][pemCurrentSlide]}
                                </div>
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rotate-45"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Navigation Arrows - Minimal */}
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
                        
                        {/* Subtle Slide Indicators at Bottom */}
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
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-900/30 text-purple-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                    <GraduationCap className="w-4 h-4" />
                    Complete Medical Education Platform
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">Doctor Education Engine</h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Where busy doctors actually complete CME courses—without the administrative nightmare
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: <UserCheck className="w-5 h-5" />, title: '8 Specialists', desc: 'Teaching on platform' },
                      { icon: <GraduationCap className="w-5 h-5" />, title: '10 Courses', desc: 'Auto-certification' },
                      { icon: <BookOpen className="w-5 h-5" />, title: 'Medical Library', desc: 'Search everything' },
                      { icon: <Users className="w-5 h-5" />, title: 'Zero Admin', desc: 'Fully automated' }
                    ].map((feature, idx) => (
                      <div key={idx} className="p-4 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-purple-900/30 text-purple-300">
                            {feature.icon}
                          </div>
                          <div className="font-semibold text-white">{feature.title}</div>
                        </div>
                        <div className="text-sm text-gray-400 pl-11">{feature.desc}</div>
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
                  
                  {/* Doctor Quote */}
                  <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/10 p-6 rounded-xl border border-purple-900/30">
                    <p className="text-gray-300 italic mb-3">
                      "My entire team completed mandatory training in one weekend. The system did all the tracking."
                    </p>
                    <div className="text-sm text-purple-300 font-medium">- Dr. Kapoor, Hospital Director</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Banner */}
            <div className="mt-24 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-cyan-900/30">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    What Happens After Implementation
                  </h3>
                  <p className="text-gray-300">
                    The transformation doctors experience in the first 30 days
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Before */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-red-300 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      Before (The Headache)
                    </h4>
                    {[
                      "2+ hours daily on paperwork",
                      "Last-minute tax preparation panic",
                      "Patients falling through follow-up cracks",
                      "Evenings spent on admin work",
                      "Staff confusion about schedules"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <XIcon className="w-4 h-4 text-red-400 mt-1" />
                        <span className="text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* After */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-green-300 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      After (The Relief)
                    </h4>
                    {[
                      "15-minute morning system check",
                      "CA gets perfect reports monthly",
                      "95% patient follow-up compliance",
                      "Evenings free for family",
                      "Staff knows duties automatically"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-green-400 mt-1" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="results" className="py-24 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                "My CA Asked What Changed"
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                What happens when doctors stop drowning in paperwork
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: 'Dr. Rajesh Sharma',
                  specialty: 'Cardiologist • 20-year practice',
                  quote: "Regained 4 hours daily. Now I see 3 more patients without extending clinic hours. My CA called asking why the books are suddenly perfect.",
                  result: "4 hours daily reclaimed"
                },
                {
                  name: 'Dr. Mahesh Gandhi',
                  specialty: 'Homeopathy Clinic Founder',
                  quote: "The system handles everything—patient tracking, finances, staff scheduling. I went from manager back to doctor.",
                  result: "Zero admin headaches"
                },
                {
                  name: 'Clinic Manager',
                  specialty: 'Multi-Specialty Hospital',
                  quote: "Tax season used to mean 2 weeks of chaos. Now it's 2 hours of review. Everything is audit-ready automatically.",
                  result: "2 hours vs 2 weeks"
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400 mb-3">{testimonial.specialty}</div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-900/30 text-cyan-300 rounded-full text-sm">
                      <Zap className="w-3 h-3" />
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Direct Action */}
        <section id="contact" className="py-24 bg-gray-900/30 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 text-cyan-300 rounded-full text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                Limited Spots This Month
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Your Next 100 Hours Are Free
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's find where your clinic is leaking time—no pitch, just solutions.
              </p>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto mb-12 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Pick Your Conversation Starter:
                </h3>
                
                <div className="space-y-6 mb-10">
                  {/* Option 1: Call */}
                  <div className="group p-6 bg-gradient-to-r from-blue-900/20 to-blue-800/10 rounded-xl border border-blue-700/30 hover:border-blue-600 transition-all hover:scale-[1.02] cursor-pointer"
                       onClick={() => window.location.href = 'tel:+917219632603'}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-blue-900/30 group-hover:bg-blue-800/40 transition-colors">
                          <Phone className="w-6 h-6 text-blue-300" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-white text-lg">Call Direct</div>
                          <div className="text-sm text-gray-400">Solve it now in 15 minutes</div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" />
                    </div>
                    <div className="text-left pl-16">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/40 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-sm text-blue-300">Usually answers in 2 rings</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Option 2: WhatsApp */}
                  <div className="group p-6 bg-gradient-to-r from-green-900/20 to-emerald-800/10 rounded-xl border border-green-700/30 hover:border-green-600 transition-all hover:scale-[1.02] cursor-pointer"
                       onClick={() => window.open('https://wa.me/917219632603?text=Hi%20Tanay,%20my%20biggest%20clinic%20headache%20is...', '_blank')}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-green-900/30 group-hover:bg-green-800/40 transition-colors">
                          <MessageCircle className="w-6 h-6 text-green-300" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-white text-lg">WhatsApp Message</div>
                          <div className="text-sm text-gray-400">Send your biggest pain point</div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 group-hover:translate-x-2 transition-all" />
                    </div>
                    <div className="text-left pl-16">
                      <div className="text-sm text-gray-400">
                        Just type: "My biggest headache is..."
                      </div>
                    </div>
                  </div>
                  
                  {/* Option 3: Email - SIMPLIFIED GMAIL ONLY */}
                  <div className="group p-6 bg-gradient-to-r from-purple-900/20 to-pink-800/10 rounded-xl border border-purple-700/30 hover:border-purple-600 transition-all hover:scale-[1.02] cursor-pointer"
                       onClick={() => {
                         const gmailUrl = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=tanay@scaleemailer.com&su=Clinic%20Time%20Audit%20-%20From%20Your%20Portfolio&body=Hi%20Tanay%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20clinic%20automation.%0A%0AWhen%20would%20be%20a%20good%20time%20to%20connect%3F%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D';
                         window.open(gmailUrl, '_blank');
                       }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-purple-900/30 group-hover:bg-purple-800/40 transition-colors">
                          <Mail className="w-6 h-6 text-purple-300" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-white text-lg">Email via Gmail</div>
                          <div className="text-sm text-gray-400">Get custom time-savings report</div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-2 transition-all" />
                    </div>
                    <div className="text-left pl-16">
                      <div className="text-sm text-gray-400">
                        Opens Gmail instantly with pre-filled template
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-gray-700">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>No contract to talk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Free workflow analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Reply within 90 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Info - SIMPLIFIED */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-300">
                <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors"
                     onClick={() => window.location.href = 'tel:+917219632603'}>
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+91 7219632603</span>
                </div>
                
                <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors"
                     onClick={() => {
                       const gmailUrl = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=tanay@scaleemailer.com&su=Clinic%20Time%20Audit%20Inquiry&body=Hi%20Tanay%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20clinic%20automation.';
                       window.open(gmailUrl, '_blank');
                     }}>
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>tanay@scaleemailer.com</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>Based in Nashik • Working Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Tanay<span className="text-white">.</span>
                  </div>
                  <div className="text-sm text-gray-400">Built for doctors who value their time</div>
                </div>
              </div>
              
              <div className="text-gray-500 text-sm text-center md:text-right">
                <div>© {new Date().getFullYear()} Tanay Shinde. All rights reserved.</div>
                <div className="mt-1">Next.js • TypeScript • MongoDB • Tailwind CSS</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
{/* Simple Zoom Modal - Photo Only with Visible Title */}
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
    
{/* Slide Title with Water/Glass Effect - AT TOP LIKE BEFORE ZOOM */}
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
        ? ['DASHBOARD', 'EXPENSE TRACKER', 'PATIENT FOLLOW-UP', 'STAFF SCHEDULING', 'REPORTS'][zoomSlideIndex]
        : ['HOMEPAGE', 'DOCTOR PROFILES', 'COURSES', 'LIBRARY'][zoomSlideIndex]
      }
    </div>
    <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
      currentZoomType === 'doctor' ? 'bg-cyan-400' : 'bg-purple-400'
    }`}></div>
  </div>
</div>
   
    
    {/* Main Image Only */}
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