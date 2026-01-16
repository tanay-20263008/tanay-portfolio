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
    '/images/projects/doctor-system-5.jpg'
  ]

  const pemScreenshots = [
    '/images/projects/pem-system-1.jpg',
    '/images/projects/pem-system-2.jpg',
    '/images/projects/pem-system-3.jpg', 
    '/images/projects/pem-system-4.jpg',
    '/images/projects/pem-system-5.jpg',
    '/images/projects/pem-system-6.jpg',
    '/images/projects/pem-system-7.jpg'
   
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
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
                <span className="text-sm font-medium text-cyan-300">Medical Systems Developer • Nashik, Maharashtra</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Custom Medical Practice<br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Management Systems
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                I build tailored practice management systems for doctors and medical institutions—helping reduce administrative work and improve clinic efficiency through smart automation.
              </p>

              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {[
                  { icon: <FileText className="w-5 h-5" />, text: 'Automated financial tracking' },
                  { icon: <Bell className="w-5 h-5" />, text: 'Patient follow-up reminders' },
                  { icon: <Clock className="w-5 h-5" />, text: 'Save 2-3 hours daily' },
                  { icon: <Shield className="w-5 h-5" />, text: 'Secure & reliable' }
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
                  <span className="text-gray-300">2 Systems Live & Working</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">6+ Months Running Smoothly</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Serving Nashik & across India</span>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#projects" 
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800/50 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all border border-gray-700"
                >
                  Get in Touch
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
                Featured Projects
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Custom systems built specifically for medical practice workflows
              </p>
            </div>

         {/* Project 1: Practice Management System */}
<div className="mb-32">
  <div className="grid lg:grid-cols-2 gap-16 items-center">
    <div>
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-900/30 text-green-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
        <Zap className="w-4 h-4" />
        Live & Saving 2+ Hours Daily • Since July 2024
      </div>
      
    <h3 className="text-3xl font-bold text-white mb-4 whitespace-nowrap">Complete Practice Automation System</h3>


      <p className="text-xl text-gray-300 mb-8">
        Custom-built for a senior cardiologist couple—automates their entire practice finances, task management, and patient follow-ups. No more manual Excel sheets, no missed dues, and CA-ready reports every month.
      </p>
      
      {/* Doctor's Experience */}
      <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/10 p-6 rounded-xl border border-green-900/30 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <Sparkles className="w-5 h-5 text-green-400" />
          <span className="font-bold text-white">What the Doctor Experiences Now:</span>
        </div>
        <p className="text-gray-300">
          "My CA gets perfect monthly reports without asking. I know exactly where every rupee goes—home, clinic, or personal. Tasks remind themselves. And I've stopped missing patient follow-ups entirely."
        </p>
      </div>
      
      {/* How It Works - Clear Benefits */}
      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-green-900/30 text-green-300 flex-shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-white mb-1">Smart Financial Dashboard</h4>
            <p className="text-gray-300 text-sm">
              Automatically calculates monthly income vs expenses with visual charts. Separate tracking for home, clinic, and personal expenses. Set budgets—get alerts at 80% utilization. Export CA-ready Excel sheets with one click.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-blue-900/30 text-blue-300 flex-shrink-0">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-white mb-1">Never-Miss Task & Dues System</h4>
            <p className="text-gray-300 text-sm">
              Daily/yearly tasks with "fixed repeat" options. Dues (receivable/payable) auto-remind 2 days before deadlines. Export task lists. Filter any data by date, category, or payment method. Everything searchable, everything sortable.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-purple-900/30 text-purple-300 flex-shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-white mb-1">Complete Payment Tracking</h4>
            <p className="text-gray-300 text-sm">
              Track income by source (consultations/procedures/other) and payment mode (cash/online/card). Expense tracking with category tags. Real-time net balance calculation. Historical data always accessible with intelligent filters.
            </p>
          </div>
        </div>
      </div>
      
      {/* Key Results */}
      <div className="mb-8">
        <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-cyan-400" />
          What Changed for the Practice:
        </h4>
        <div className="grid grid-cols-2 gap-4">
          {[
            { stat: '2-3 Hours', desc: 'Daily paperwork eliminated' },
            { stat: '100%', desc: 'Follow-up compliance' },
            { stat: '15 Min', desc: 'Monthly CA reporting time' },
            { stat: '0 Missed', desc: 'Dues since implementation' }
          ].map((result, idx) => (
            <div key={idx} className="p-4 bg-gray-800/30 rounded-xl border border-gray-700">
              <div className="text-xl font-bold text-green-400">{result.stat}</div>
              <div className="text-sm text-gray-400">{result.desc}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Security Note */}
      <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-green-400" />
          <span className="text-sm text-gray-300">
            <span className="font-semibold text-white">Private & Secure:</span> Built exclusively for their practice. No user registration. All data encrypted. Accessible only to authorized clinic members.
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
              <div className="text-sm text-gray-500">Practice Management System • Live Since July 2024</div>
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
                    {['DASHBOARD', 'EXPENSE TRACKER', 'INCOME MANAGER', 'TASK SYSTEM', 'ANALYTICS'][doctorCurrentSlide]}
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
                            <div className="text-sm text-gray-500">Medical Education Platform</div>
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
                                  {['HOMEPAGE','DOCTOR PROFILES','DOCTOR PROFILES', 'DOCTOR PROFILES', 'COURSES','COURSES', 'Live Classes'][pemCurrentSlide]}
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
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-900/30 text-purple-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                    <GraduationCap className="w-4 h-4" />
                    Educational Platform
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">Medical Education Platform</h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Comprehensive platform for medical education—featuring multiple doctor profiles, course catalog, and resource library
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: <UserCheck className="w-5 h-5" />, title: '12+ Doctors', desc: 'Individual profile pages' },
                      { icon: <GraduationCap className="w-5 h-5" />, title: '12+ Courses', desc: 'Detailed curriculum pages' },
                      { icon: <BookOpen className="w-5 h-5" />, title: 'Resource Library', desc: 'Books & publications' },
                      { icon: <Users className="w-5 h-5" />, title: '60+ Pages', desc: 'Interconnected content' }
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
                  
                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {[
                      "Individual doctor profiles with credentials and specializations",
                      "Comprehensive course pages with detailed curriculum information",
                      "Resource library with medical publications and references",
                      "Multi-level navigation system for easy content discovery",
                      "Mobile-responsive design optimized for all devices"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technology */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                      <Database className="w-5 h-5 text-purple-400" />
                      Built With:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['WordPress Custom Theme', 'Responsive Design', 'SEO Optimized', 'Content Management', 'Image Optimization'].map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-purple-900/30 text-purple-300 rounded-lg text-sm border border-purple-800/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What the Systems Do */}
            <div className="mt-24 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-cyan-900/30">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    What These Systems Do
                  </h3>
                  <p className="text-gray-300">
                    Core functionality that makes clinic management easier
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <FileText className="w-6 h-6" />,
                      title: "Financial Tracking",
                      desc: "Automatic logging of all income and expenses. Monthly reports generated and ready for your accountant."
                    },
                    {
                      icon: <Bell className="w-6 h-6" />,
                      title: "Patient Follow-ups",
                      desc: "Automated reminders for check-ups, test reports, and medication refills—sent via WhatsApp."
                    },
                    {
                      icon: <Calendar className="w
                      -6 h-6" />,
title: "Staff Management",
desc: "Duty rosters, leave tracking, and task assignment—all organized in one dashboard."
}
].map((item, idx) => (
<div key={idx} className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-4">
<div className="p-3 rounded-lg bg-cyan-900/30 text-cyan-300">
{item.icon}
</div>
<h4 className="font-bold text-white">{item.title}</h4>
</div>
<p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
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
            <p className="text-gray-300 text-lg">
              Building custom solutions for medical practices
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I specialize in building custom web applications for medical professionals in Nashik and across India. My focus is on creating systems that actually solve real problems—reducing paperwork, improving organization, and making clinic management more efficient.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I work closely with doctors to understand their specific needs, then build tailored solutions that fit their workflow. Every system is custom-made, not based on generic templates, which means it's designed exactly for how you work.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Technical Skills:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Custom web application development',
                    'Database design & management (MySQL)',
                    'Frontend: HTML, CSS, JavaScript',
                    'Backend: PHP, API integration',
                    'WordPress & CMS platforms',
                    'Mobile-responsive design',
                    'WhatsApp Business API',
                    'Secure authentication systems'
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
                  <span className="font-bold text-white">My approach:</span> I believe technology should adapt to doctors, not the other way around. That's why every system I build is customized to your specific practice, your workflow, and your needs.
                </p>
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
            Let's Discuss Your Practice
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Free consultation to understand your needs and explore how custom automation can help your clinic
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
                href="https://wa.me/917219632603?text=Hi%20Tanay,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20clinic%20automation."
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
                href="mailto:tanay@scaleemailer.com?subject=Clinic%20Automation%20Inquiry&body=Hi%20Tanay,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20clinic%20automation.%0A%0AWhen%20would%20be%20a%20good%20time%20to%20connect?"
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
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
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
          <div className="flex justify-center items-center gap-2 text-gray-300">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <span>Based in Nashik, Maharashtra • Serving across India</span>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="py-12 border-t border-gray-700">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">
                Tanay Shinde
              </div>
              <div className="text-sm text-gray-400">Medical Systems Developer</div>
            </div>
          </div>
          
          <div className="text-gray-500 text-sm text-center md:text-right">
            <div>© {new Date().getFullYear()} Tanay Shinde. All rights reserved.</div>
            <div className="mt-1">Built with Next.js • TypeScript • Tailwind CSS</div>
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
              ? ['DASHBOARD', 'EXPENSE TRACKER', 'INCOME MANAGER', 'TASK SYSTEM', 'ANALYTICS'][zoomSlideIndex]
              : ['HOMEPAGE','DOCTOR PROFILES','DOCTOR PROFILES', 'DOCTOR PROFILES', 'COURSES','COURSES', 'Live Classes'][zoomSlideIndex]
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