'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

import {
  Menu, X, ChevronLeft, ChevronRight, ArrowRight,
  Check, Star, Phone, Mail, MessageCircle, Zap,
  Shield, Clock, Users, FileText, Bell, Target,
  DollarSign, TrendingUp, Calendar, Sparkles,
  MapPin, GraduationCap, BookOpen, UserCheck, Cpu,
  Database, X as XIcon, Building2, Globe, Link
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [age, setAge] = useState(17)
  const [doctorCurrentSlide, setDoctorCurrentSlide] = useState(0)
  const [pemCurrentSlide, setPemCurrentSlide] = useState(0)
  const [drWebCurrentSlide, setDrWebCurrentSlide] = useState(0)
  const [hospitalCurrentSlide, setHospitalCurrentSlide] = useState(0)
  const [isZoomOpen, setIsZoomOpen] = useState(false)
  const [currentZoomImage, setCurrentZoomImage] = useState('')
  const [currentZoomType, setCurrentZoomType] = useState('')
  const [zoomSlideIndex, setZoomSlideIndex] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

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
  const drWebScreenshots = [
    '/images/projects/dr-website-1.jpg',
    '/images/projects/dr-website-2.jpg',
    '/images/projects/dr-website-3.jpg',
    '/images/projects/dr-website-4.jpg',
    '/images/projects/dr-website-5.jpg',
    '/images/projects/dr-website-6.jpg',
    '/images/projects/dr-website-7.jpg',
    '/images/projects/dr-website-8.jpg',
  ]
  const hospitalScreenshots = [
    '/images/projects/godavari-1.jpg',
    '/images/projects/godavari-2.jpg',
    '/images/projects/godavari-3.jpg',
    '/images/projects/godavari-4.jpg',
    '/images/projects/godavari-5.jpg',
    '/images/projects/godavari-6.jpg',
    '/images/projects/godavari-7.jpg',
    '/images/projects/godavari-8.jpg',
    '/images/projects/godavari-9.jpg',
  ]

  const allScreenshotSets = {
    doctor: doctorScreenshots,
    pem: pemScreenshots,
    drweb: drWebScreenshots,
    hospital: hospitalScreenshots,
  }

  const handleZoom = (imageSrc, type, index) => {
    setCurrentZoomImage(imageSrc)
    setCurrentZoomType(type)
    setZoomSlideIndex(index)
    setIsZoomOpen(true)
  }

  const nextZoomSlide = () => {
    const arr = allScreenshotSets[currentZoomType]
    const next = (zoomSlideIndex + 1) % arr.length
    setZoomSlideIndex(next)
    setCurrentZoomImage(arr[next])
  }
  const prevZoomSlide = () => {
    const arr = allScreenshotSets[currentZoomType]
    const prev = (zoomSlideIndex - 1 + arr.length) % arr.length
    setZoomSlideIndex(prev)
    setCurrentZoomImage(arr[prev])
  }

  useEffect(() => {
    setAge(new Date().getFullYear() - 2008)
  }, [])

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  const Carousel = ({ screenshots, current, setCurrent, type, labels, accentColor }) => (
    <div style={{ position: 'relative' }}>
      {/* Frame */}
      <div style={{
        borderRadius: 20,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        background: '#0a0e1a',
        boxShadow: `0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.05)`
      }}>
        {/* Title bar */}
        <div style={{
          background: 'rgba(8,10,20,0.95)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', fontFamily: "'DM Mono', monospace" }}>
              {type === 'pem' ? 'pemhomeopathy.com' :
               type === 'drweb' ? 'kovalekiran.com' :
               type === 'hospital' ? 'godavarimultispecialityhospital.com' :
               'Practice Management System'}
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          style={{ position: 'relative', height: 420, background: '#070a14', cursor: 'zoom-in' }}
          onClick={() => handleZoom(screenshots[current], type, current)}
        >
          <Image
            src={screenshots[current]}
            alt={`Screenshot ${current + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 800px) 100vw, 800px"
            priority={current === 0}
          />

          {/* Label chip */}
          <div style={{
            position: 'absolute', top: 16, left: '50%', transform: 'translateX(-50%)',
            pointerEvents: 'none', zIndex: 10
          }}>
            <div style={{
              background: 'rgba(5,7,15,0.88)',
              backdropFilter: 'blur(16px)',
              border: `1px solid ${accentColor}50`,
              borderRadius: 10,
              padding: '6px 16px',
              boxShadow: `0 0 20px ${accentColor}20`
            }}>
              <span style={{
                fontSize: 11, fontWeight: 800,
                letterSpacing: '0.14em',
                color: accentColor,
                fontFamily: "'DM Mono', monospace"
              }}>
                {labels[current]}
              </span>
            </div>
          </div>

          {/* Arrows */}
          {['left', 'right'].map(dir => (
            <button
              key={dir}
              onClick={(e) => {
                e.stopPropagation()
                if (dir === 'left') setCurrent(p => p === 0 ? screenshots.length - 1 : p - 1)
                else setCurrent(p => p === screenshots.length - 1 ? 0 : p + 1)
              }}
              style={{
                position: 'absolute',
                [dir]: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: 36, height: 36,
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.7)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = accentColor }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
            >
              {dir === 'left' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </button>
          ))}

          {/* Dots */}
          <div style={{
            position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: 6, zIndex: 10
          }}>
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrent(idx) }}
                style={{
                  height: 4,
                  width: current === idx ? 22 : 8,
                  borderRadius: 2,
                  background: current === idx ? '#fff' : 'rgba(255,255,255,0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  padding: 0
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Glow under */}
      <div style={{
        position: 'absolute', bottom: -40, left: '50%', transform: 'translateX(-50%)',
        width: '60%', height: 80,
        background: `radial-gradient(ellipse, ${accentColor}25, transparent 70%)`,
        filter: 'blur(20px)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#070a14', color: '#e2e8f0', fontFamily: "'Plus Jakarta Sans', 'DM Sans', system-ui, sans-serif", overflowX: 'hidden' }}>
      <style suppressHydrationWarning>{`
        @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(99,102,241,0.35); color: #fff; }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #070a14; }
        ::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.5); border-radius: 3px; }

        .hero-display {
          font-family: 'Clash Display', 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: clamp(3.2rem, 7.5vw, 7rem);
          line-height: 0.95;
          letter-spacing: -0.025em;
          color: #fff;
        }

        .section-heading {
          font-family: 'Clash Display', 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: clamp(2.4rem, 5vw, 4rem);
          line-height: 1;
          letter-spacing: -0.02em;
          color: #fff;
        }

        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 40%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-warm {
          background: linear-gradient(135deg, #f59e0b 0%, #ef4444 60%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-bar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          background: rgba(7,10,20,0.75);
          backdrop-filter: blur(32px) saturate(1.8);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .nav-link {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: color 0.2s;
          position: relative;
        }
        .nav-link:hover { color: #fff; }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: #fff;
          border-radius: 12px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: all 0.25s;
          box-shadow: 0 8px 32px rgba(99,102,241,0.35);
          border: none; cursor: pointer;
        }
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 48px rgba(99,102,241,0.5);
        }

        .cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.75);
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.25s;
        }
        .cta-ghost:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
          border-color: rgba(255,255,255,0.2);
        }

        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .pulse-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          position: relative;
          flex-shrink: 0;
        }
        .pulse-dot::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          animation: ripple 1.8s ease-out infinite;
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        .stat-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          transition: all 0.2s;
        }
        .stat-pill:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(99,102,241,0.3);
          color: #fff;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 20px;
        }
        .section-tag::before {
          content: '';
          display: block;
          width: 24px; height: 1px;
          background: rgba(255,255,255,0.2);
        }

        .project-block {
          padding: 60px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .project-block:last-child { border-bottom: none; }

        .feature-row {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 18px 20px;
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          transition: all 0.25s;
        }
        .feature-row:hover {
          background: rgba(255,255,255,0.055);
          border-color: rgba(255,255,255,0.1);
          transform: translateX(4px);
        }

        .tech-tag {
          padding: 5px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.03em;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.55);
          transition: all 0.2s;
        }
        .tech-tag:hover {
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.8);
        }

        .quote-block {
          border-radius: 16px;
          padding: 24px 28px;
          position: relative;
          overflow: hidden;
        }
        .quote-block::before {
          content: '"';
          position: absolute;
          top: -10px;
          left: 20px;
          font-family: 'Clash Display', serif;
          font-size: 120px;
          color: rgba(255,255,255,0.04);
          line-height: 1;
          pointer-events: none;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 24px;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          text-decoration: none;
          color: inherit;
          transition: all 0.3s;
          cursor: pointer;
        }
        .contact-row:hover {
          transform: translateX(6px);
          background: rgba(255,255,255,0.06);
        }

        .skill-grid-card {
          padding: 16px;
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          transition: all 0.2s;
        }
        .skill-grid-card:hover {
          background: rgba(99,102,241,0.08);
          border-color: rgba(99,102,241,0.2);
        }

        .divider-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent);
        }

        .about-what-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          font-size: 14px;
          color: rgba(255,255,255,0.65);
          transition: all 0.2s;
        }
        .about-what-card:hover {
          background: rgba(99,102,241,0.07);
          border-color: rgba(99,102,241,0.2);
          color: rgba(255,255,255,0.9);
        }

        .diff-card {
          padding: 28px;
          border-radius: 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          transition: all 0.3s;
        }
        .diff-card:hover {
          background: rgba(255,255,255,0.05);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        @media (max-width: 1024px) {
          .project-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .diff-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .hero-display { font-size: 2.8rem !important; }
          .hero-pills { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      {/* ── Ambient bg ──────────────────────────────── */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        {/* Subtle grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '72px 72px'
        }} />
        {/* Orbs */}
        <div style={{ position: 'absolute', top: -200, left: -200, width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', top: 300, right: -150, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: '30%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        {/* Cursor glow */}
        <div style={{
          position: 'fixed',
          left: mousePos.x - 250, top: mousePos.y - 250,
          width: 500, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
          transition: 'left 0.4s ease, top 0.4s ease',
          zIndex: 0
        }} />
      </div>

      {/* ── HEADER ──────────────────────────────────── */}
      <header className="nav-bar">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, overflow: 'hidden', position: 'relative' }}>
              <Image src='/images/projects/Logo.png' alt="Tanay Shinde Logo" width={36} height={36} className="rounded-xl" />
            </div>
            <span style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 20, color: '#fff', letterSpacing: '-0.01em' }}>
              Tanay Shinde
            </span>
          </div>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hidden lg:flex">
            {['Home', 'Projects', 'About'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            ))}
            <a href="#contact" className="cta-primary" style={{ padding: '10px 22px', fontSize: 13 }}>
              Get in Touch
            </a>
          </nav>

          {/* Mobile toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 6 }} className="lg:hidden">
            {isMenuOpen ? <XIcon size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '16px 28px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {['Home', 'Projects', 'About'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}
                style={{ padding: '12px 16px', borderRadius: 10, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 15, fontWeight: 500, transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
              >{item}</a>
            ))}
            <a href="#contact" onClick={closeMenu} className="cta-primary" style={{ marginTop: 8, justifyContent: 'center' }}>Get in Touch</a>
          </div>
        )}
      </header>

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* ── HERO ──────────────────────────────────── */}
        <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 100, paddingBottom: 80 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', width: '100%' }}>

            <div style={{ maxWidth: 900 }}>
              {/* Badge */}
              <div style={{ marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', borderRadius: 100, background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)' }}>
                  <div className="pulse-dot" style={{ background: '#22c55e' }}>
                    <style>{`.pulse-dot::after { border: 1.5px solid #22c55e; }`}</style>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#a5b4fc', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Open for Projects
                  </span>
                </div>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)' }}>Nashik, Maharashtra · Serving Nationwide</span>
              </div>

              {/* Headline */}
              <h1 className="hero-display" style={{ marginBottom: 28 }}>
                I Build Custom<br />
                <span className="gradient-text">Web Systems</span><br />
                <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 500, fontSize: '0.62em', letterSpacing: '-0.01em', display: 'block', marginTop: 4 }}>
                  That Actually Get Used.
                </span>
              </h1>

              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 560, marginBottom: 40, fontWeight: 300 }}>
                Fully custom web applications built from scratch—designed around your exact workflow. No templates, no shortcuts, no compromises.
              </p>

              {/* Key stats pills */}
              <div className="hero-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 48 }}>
                {[
                  { icon: <Clock size={15} />, text: '1+ hour saved daily' },
                  { icon: <Database size={15} />, text: 'Everything in one place' },
                  { icon: <Shield size={15} />, text: 'Built in 4-6 days' },
                  { icon: <Zap size={15} />, text: 'Continuous support' },
                ].map((item, i) => (
                  <div key={i} className="stat-pill">
                    <span style={{ color: '#818cf8' }}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 72 }}>
                <a href="#projects" className="cta-primary">
                  See What I've Built <ArrowRight size={16} />
                </a>
                <a href="#contact" className="cta-ghost">
                  Discuss Your Project
                </a>
              </div>
            </div>          
      
            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', maxWidth: 700 }}>
              {[
                { n: '4', label: 'Live Systems Running', sub: 'all used daily' },
                { n: '6', label: 'Day Avg Delivery', sub: 'first meeting to launch' },
                { n: `${age}`, label: 'Years Young', sub: 'coding since 16' },
              ].map((s, i) => (
                <div key={i} style={{ background: '#070a14', padding: '24px 28px', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(99,102,241,0.07)'}
                  onMouseLeave={e => e.currentTarget.style.background = '#070a14'}
                >
                  <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 40, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em', background: 'linear-gradient(135deg,#6366f1,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {s.n}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginTop: 6 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{s.sub}</div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <div className="divider-line" />

        {/* ── PROJECTS ──────────────────────────────── */}
        <section id="projects" style={{ padding: '96px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>

            <div style={{ marginBottom: 64 }}>
              <div className="section-tag">Portfolio</div>
              <h2 className="section-heading" style={{ marginBottom: 16 }}>Live Projects</h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.4)', maxWidth: 520, lineHeight: 1.6 }}>
                Real systems built from scratch for real clients—all live, all used daily.
              </p>
            </div>

            {/* ── PROJECT 1: Practice Management System ── */}
            <div className="project-block">
              <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

                {/* Info */}
                <div>
                  <div className="live-badge" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', color: '#4ade80', marginBottom: 20 }}>
                    <div className="pulse-dot" style={{ background: '#22c55e' }} />
                    Live & Active · Running Since Sept 2025
                  </div>

                  <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem,3vw,2.6rem)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 8 }}>
                    Complete Practice<br />Management System
                  </h3>
                  <p style={{ fontSize: 13, color: '#818cf8', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 20 }}>
                    Dr. Vrushinit Saudagar's Practice
                  </p>

                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 28 }}>
                    Replaces 8+ Excel files with one centralized system. Tracks finances, tasks, and dues automatically—saving 1+ hour every single day.
                  </p>

                  {/* Quote */}
                  <div className="quote-block" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.07), rgba(6,182,212,0.04))', border: '1px solid rgba(34,197,94,0.15)', marginBottom: 28 }}>
                    <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 12 }}>
                      "Very well designed and made. It's very useful—we get all details in one place. This saves time and all the manual work I was doing before."
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#4ade80', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      — Dr. Vrushinit Saudagar, Best Homeopath
                    </div>
                  </div>

                  {/* Before/After */}
                  <div style={{ marginBottom: 28 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 14 }}>What Changed</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <div className="feature-row">
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444', marginTop: 7, flexShrink: 0 }} />
                        <div><span style={{ fontWeight: 600, color: '#fff', fontSize: 14 }}>Before: </span><span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>8+ Excel files, 1.5 hrs daily on manual data entry and calculations.</span></div>
                      </div>
                      <div className="feature-row">
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', marginTop: 7, flexShrink: 0 }} />
                        <div><span style={{ fontWeight: 600, color: '#fff', fontSize: 14 }}>Now: </span><span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>One system, 1+ hour saved daily, all data searchable with auto calculations.</span></div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                    {[
                      { icon: <TrendingUp size={16} />, title: 'Smart Income & Expense Tracking', desc: 'Track every rupee by source & payment mode. Visual charts. Export CA-ready reports in one click.', color: '#6366f1' },
                      { icon: <Bell size={16} />, title: 'Task & Dues Management', desc: 'Daily/yearly tasks with repeat. Dues with 2-day deadline reminders. Everything searchable.', color: '#8b5cf6' },
                      { icon: <FileText size={16} />, title: 'Analytics & Budget Controls', desc: 'Monthly budget alerts at 80%. Real-time net balance. Export any date range instantly.', color: '#06b6d4' },
                    ].map((f, i) => (
                      <div key={i} className="feature-row">
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: `${f.color}18`, border: `1px solid ${f.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color, flexShrink: 0 }}>
                          {f.icon}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, color: '#fff', fontSize: 14, marginBottom: 3 }}>{f.title}</div>
                          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.5 }}>{f.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
                    {['HTML5/CSS3', 'JavaScript (ES6+)', 'MySQL Database', 'Mobile-Responsive', 'Secure Auth', 'Excel Export'].map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', borderRadius: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <Clock size={14} style={{ color: '#22c55e', flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}><span style={{ color: '#fff', fontWeight: 600 }}>Built in 10 days:</span> From initial meeting to live deployment. Used daily for 4+ months.</span>
                  </div>
                </div>

                {/* Carousel */}
                <Carousel
                  screenshots={doctorScreenshots}
                  current={doctorCurrentSlide}
                  setCurrent={setDoctorCurrentSlide}
                  type="doctor"
                  labels={['DASHBOARD', 'INCOME TRACKER', 'EXPENSE MANAGER', 'TASK SYSTEM', 'DUES MANAGER', 'ANALYTICS']}
                  accentColor="#6366f1"
                />
              </div>
            </div>

            {/* ── PROJECT 2: PEM Platform ── */}
            <div className="project-block">
              <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

                {/* Carousel left */}
                <div style={{ order: 1 }}>
                  <Carousel
                    screenshots={pemScreenshots}
                    current={pemCurrentSlide}
                    setCurrent={setPemCurrentSlide}
                    type="pem"
                    labels={['HOMEPAGE', 'DOCTOR PROFILE', 'DOCTOR PROFILE', 'DOCTOR PROFILE', 'COURSE PAGE', 'COURSE PAGE', 'LIVE CLASSES', 'BOOKS LIBRARY', 'GALLERY']}
                    accentColor="#a855f7"
                  />
                </div>

                {/* Info right */}
                <div style={{ order: 2 }}>
                  <div className="live-badge" style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)', color: '#c084fc', marginBottom: 20 }}>
                    <GraduationCap size={13} />
                    Educational Platform · pemhomeopathy.com
                  </div>

                  <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem,3vw,2.6rem)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 8 }}>
                    Personal Evolution<br />Model Platform
                  </h3>
                  <p style={{ fontSize: 13, color: '#a855f7', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 20 }}>
                    Dr. Mahesh Gandhi · PEM Methodology
                  </p>

                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 28 }}>
                    Complete educational website with 30+ custom-coded pages—doctor profiles, full course catalog, and resource library. Built from scratch, no WordPress.
                  </p>

                  <div className="quote-block" style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.08), rgba(99,102,241,0.04))', border: '1px solid rgba(168,85,247,0.18)', marginBottom: 28 }}>
                    <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 12 }}>
                      "At the age of 17, you have made this website—it's insane! It's very best. We are fully convinced and impressed with the work."
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#c084fc', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      — Dr. Gandhi's Team
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
                    {[
                      { icon: <UserCheck size={16} />, title: '8 Doctors', desc: 'Individual detailed profiles' },
                      { icon: <GraduationCap size={16} />, title: '8 Courses', desc: 'Complete curriculum pages' },
                      { icon: <BookOpen size={16} />, title: 'Books Library', desc: 'Publications & resources' },
                      { icon: <Users size={16} />, title: '30+ Pages', desc: 'All interconnected content' },
                    ].map((f, i) => (
                      <div key={i} style={{ padding: '16px', borderRadius: 14, background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.15)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                          <span style={{ color: '#a855f7' }}>{f.icon}</span>
                          <span style={{ fontWeight: 700, color: '#fff', fontSize: 14 }}>{f.title}</span>
                        </div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{f.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                    {[
                      'All content written, designed, and coded by me from scratch',
                      '8 individual doctor profiles with full credentials',
                      'Fully responsive—works perfectly on mobile, tablet, desktop',
                      'Used for course registrations—gets inquiries daily',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>
                        <Check size={15} style={{ color: '#a855f7', flexShrink: 0, marginTop: 1 }} />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
                    {['Custom HTML/CSS', 'JavaScript', 'MySQL', 'Responsive', 'SEO Optimized', 'Fast Loading'].map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <a href="https://pemhomeopathy.com" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 20px', borderRadius: 10, background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.25)', color: '#c084fc', textDecoration: 'none', fontSize: 14, fontWeight: 600, transition: 'all 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(168,85,247,0.2)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(168,85,247,0.12)'}
                  >
                    <Globe size={14} /> Visit Live Site <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* ── PROJECT 3: Dr. Vrushinit Website ── */}
            <div className="project-block">
              <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

                <div>
                 <div className="live-badge" style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', color: '#fbbf24', marginBottom: 20 }}>
  <div className="pulse-dot" style={{ background: '#f59e0b' }} />
  Professional Medical Profile · kovalekiran.com
</div>

                  <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem,3vw,2.6rem)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 8 }}>
                    Dr. Vrushinit Saudagar<br />— Doctor Website
                  </h3>
                  <p style={{ fontSize: 13, color: '#f59e0b', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 20 }}>
                    Professional Profile + Integrated Booking
                  </p>

                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 28 }}>
                    A complete professional website showcasing credentials, expertise, and services—with a fully integrated booking system connecting patients via WhatsApp, email, and direct phone. Patients arrive already informed.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                    {[
                      { icon: <UserCheck size={16} />, title: 'Full Doctor Profile', desc: 'Credentials, expertise, specializations, testimonials—all in one professional page.', color: '#f59e0b' },
                      { icon: <MessageCircle size={16} />, title: 'Triple-Channel Booking', desc: 'Book via WhatsApp, Email, or Phone. Patients pick their method. Zero friction.', color: '#f59e0b' },
                      { icon: <Zap size={16} />, title: 'SEO Optimized', desc: 'Ranks for local searches. Optimized metadata, fast loading, mobile-first design.', color: '#f59e0b' },
                    ].map((f, i) => (
                      <div key={i} className="feature-row">
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b', flexShrink: 0 }}>
                          {f.icon}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, color: '#fff', fontSize: 14, marginBottom: 3 }}>{f.title}</div>
                          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.5 }}>{f.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
                    {['Custom HTML/CSS', 'JavaScript', 'WhatsApp Integration', 'SEO', 'Responsive', 'Fast Loading'].map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  {/* ADD THIS BUTTON */}
<a href="https://kovalekiran.com" target="_blank" rel="noopener noreferrer"
  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 20px', borderRadius: 10, background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', color: '#fbbf24', textDecoration: 'none', fontSize: 14, fontWeight: 600, transition: 'all 0.2s', marginTop: 8 }}
  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,158,11,0.2)' }}
  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(245,158,11,0.12)' }}
>
  <Globe size={14} /> Visit Live Site <ArrowRight size={14} />
</a>
                </div>

                <Carousel
                  screenshots={drWebScreenshots}
                  current={drWebCurrentSlide}
                  setCurrent={setDrWebCurrentSlide}
                  type="drweb"
                  labels={['HOMEPAGE', 'RECENT EVENT', 'ABOUT', 'ACHIEVEMENTS', 'ACHIEVEMENTS',  'SERVICES', 'PATIENTS STORIES', 'CONTACT']}
                  accentColor="#f59e0b"
                />
              </div>
            </div>

            {/* ── PROJECT 4: Godavari Hospital ── */}
            <div className="project-block">
              <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

                {/* Carousel left */}
                <div style={{ order: 1 }}>
                  <Carousel
                    screenshots={hospitalScreenshots}
                    current={hospitalCurrentSlide}
                    setCurrent={setHospitalCurrentSlide}
                    type="hospital"
                    labels={['HOMEPAGE', 'ABOUT', 'LEADING CONSULTANT', 'FACILITIES', 'DOCTORS PANEL', 'WHY GODAVARI', 'PATIENTS STORIES', 'VISIT & CONTACT', 'BOOKING']}
                    accentColor="#ef4444"
                  />
                </div>

                {/* Info right */}
                <div style={{ order: 2 }}>
                 <div className="live-badge" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#f87171', marginBottom: 20 }}>
  <div className="pulse-dot" style={{ background: '#ef4444' }} />
  Hospital Information Portal 
</div>

                  <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem,3vw,2.6rem)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 8 }}>
                    Godavari Multispecialty<br />Hospital
                  </h3>
                  <p style={{ fontSize: 13, color: '#ef4444', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 20 }}>
                    Complete Hospital Information + Booking
                  </p>

                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 28 }}>
                    A comprehensive hospital website covering every department, doctor roster, facilities, and services—with a seamlessly integrated booking system. Patients can find any doctor, any department, and book immediately.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                    {[
                      { icon: <Building2 size={16} />, title: 'Complete Hospital Info', desc: 'All departments, specialties, facilities, and infrastructure presented professionally.' },
                      { icon: <Users size={16} />, title: 'Full Doctor Directory', desc: 'Every specialist listed with profile, qualifications, and consultation schedule.' },
                      { icon: <MessageCircle size={16} />, title: 'Integrated Booking System', desc: 'One-tap booking via WhatsApp, email, or call. Pick any doctor, any department.' },
                    ].map((f, i) => (
                      <div key={i} className="feature-row">
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444', flexShrink: 0 }}>
                          {f.icon}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, color: '#fff', fontSize: 14, marginBottom: 3 }}>{f.title}</div>
                          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.5 }}>{f.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
                    {['Custom HTML/CSS', 'JavaScript', 'WhatsApp Integration', 'SEO', 'Multi-page', 'Responsive'].map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  {/* ADD THIS BUTTON */}
<a href="https://godavarimultispecialityhospital.com" target="_blank" rel="noopener noreferrer"
  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 20px', borderRadius: 10, background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', color: '#f87171', textDecoration: 'none', fontSize: 14, fontWeight: 600, transition: 'all 0.2s', marginTop: 8 }}
  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.2)' }}
  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.12)' }}
>
  <Globe size={14} /> Visit Live Site <ArrowRight size={14} />
</a>
                </div>
              </div>
            </div>

            {/* ── How I Build Differently ── */}
            <div style={{ marginTop: 80, padding: 48, borderRadius: 24, background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.12)' }}>
              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: '#fff', letterSpacing: '-0.02em', marginBottom: 10 }}>How I Build Differently</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 16 }}>Why people choose custom-built over templates</p>
              </div>
              <div className="diff-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
                {[
                  { icon: <Target size={22} />, title: 'Built for Your Workflow', desc: "I spend time understanding exactly how you work—then build the system around YOUR process, not force you into someone else's template.", color: '#6366f1' },
                  { icon: <Zap size={22} />, title: 'Fast Delivery', desc: "Most projects delivered in 4-6 days. I work full-time on your system, continuously communicate progress, and iterate based on your feedback.", color: '#8b5cf6' },
                  { icon: <Shield size={22} />, title: 'Ongoing Support', desc: "After deployment, I'm available for updates, fixes, and improvements. Your system evolves as your needs grow.", color: '#06b6d4' },
                ].map((item, i) => (
                  <div key={i} className="diff-card">
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: `${item.color}18`, border: `1px solid ${item.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, marginBottom: 16 }}>
                      {item.icon}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 17, color: '#fff', marginBottom: 10, fontFamily: "'Clash Display', sans-serif" }}>{item.title}</div>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <div className="divider-line" />

        {/* ── ABOUT ─────────────────────────────────── */}
        <section id="about" style={{ padding: '96px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
            <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

              {/* Left */}
              <div>
                <div className="section-tag">About Me</div>
                <h2 className="section-heading" style={{ marginBottom: 24 }}>
                  How I started<br />
                  <span className="gradient-text">building things.</span>
                </h2>

                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 20 }}>
                  I'm {age} years old and I've been coding since I was 16. I started building for clients through my mentor—a practicing physician who showed me firsthand the tech problems practices face daily.
                </p>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 20 }}>
                  After seeing how they struggled with disconnected systems and manual work, I built my first tool. It worked. They use it every day. So I kept building.
                </p>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 32 }}>
                  I don't use WordPress or templates. Every system I build is custom-coded from scratch—designed specifically for how that client operates. This takes longer, but it means the software fits your workflow perfectly.
                </p>

                <div style={{ marginBottom: 32 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>What I Can Build</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {[
                      'Custom web applications',
                      'Professional websites (any niche)',
                      'Booking systems with WhatsApp',
                      'Educational platforms',
                      'Mobile-responsive designs',
                      'Database design & management',
                      'Secure authentication systems',
                      'Export / reporting features',
                    ].map((skill, i) => (
                      <div key={i} className="about-what-card">
                        <Check size={13} style={{ color: '#6366f1', flexShrink: 0 }} />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ padding: '20px 24px', borderRadius: 14, background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.15)', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                  <span style={{ fontWeight: 700, color: '#fff' }}>My approach: </span>
                  Continuous communication, regular demos, and fast iterations. The goal is to build something you'll actually use every day—not software that sits unused.
                </div>
              </div>

              {/* Right: Skills */}
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>Technical Skills</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[
                    { skill: 'HTML/CSS', level: 8.5 },
                    { skill: 'JavaScript', level: 9.6 },
                    { skill: 'MySQL', level: 8.9 },
                    { skill: 'UI/UX Design', level: 9.4 },
                    { skill: 'Responsive Design', level: 9.6 },
                    { skill: 'API Integration', level: 8.5 },
                    { skill: 'Database Design', level: 8.9 },
                    { skill: 'Problem Solving', level: 9.5 },
                  ].map((item, i) => (
                    <div key={i} className="skill-grid-card">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>{item.skill}</span>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#818cf8', fontFamily: "'DM Mono', monospace" }}>{item.level}</span>
                      </div>
                      <div style={{ height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 2, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${item.level * 10}%`, borderRadius: 2, background: 'linear-gradient(90deg, #6366f1, #06b6d4)' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="divider-line" />

        {/* ── CONTACT ───────────────────────────────── */}
        <section id="contact" style={{ padding: '96px 0' }}>
          <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 28px', textAlign: 'center' }}>

            <div className="section-tag" style={{ justifyContent: 'center' }}>Let's Build Together</div>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>
              Let's Discuss<br /><span className="gradient-text">Your Project</span>
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.4)', marginBottom: 48, lineHeight: 1.65 }}>
              Free consultation to understand your needs—no sales pitch, just exploring if custom software makes sense for you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32, textAlign: 'left' }}>
              {[
                { icon: <Phone size={20} />, label: 'Call or Text', value: '+91 7219632603', href: 'tel:+917219632603', color: '#6366f1', bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.25)' },
                { icon: <MessageCircle size={20} />, label: 'WhatsApp Message', value: 'Quick and convenient', href: 'https://wa.me/917219632603?text=Hi%20Tanay,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.', color: '#22c55e', bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)' },
                { icon: <Mail size={20} />, label: 'Email', value: 'tanay@scaleemailer.com', href: 'mailto:tanay@scaleemailer.com?subject=Project%20Inquiry&body=Hi%20Tanay,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.', color: '#a855f7', bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.2)' },
              ].map((c, i) => (
                <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-row"
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.background = c.bg; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: c.bg, border: `1px solid ${c.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color, flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>{c.label}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{c.value}</div>
                  </div>
                  <ArrowRight size={18} style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap', padding: '20px', borderRadius: 14, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              {['Free consultation', 'No obligations', 'Quick response'].map((g, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                  <Check size={14} style={{ color: '#22c55e' }} /> {g}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────── */}
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '40px 28px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, overflow: 'hidden' }}>
                <Image src='/images/projects/Logo.png' alt="Tanay Shinde Logo" width={36} height={36} className="rounded-lg" />
              </div>
              <div>
                <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, color: '#fff', fontSize: 16 }}>Tanay Shinde</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Web Developer</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>
              <MapPin size={14} style={{ color: '#6366f1' }} />
              Nashik, Maharashtra · Serving across India
            </div>

            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', textAlign: 'right' }}>
              <div>© {new Date().getFullYear()} Tanay Shinde. All rights reserved.</div>
              <div style={{ marginTop: 4 }}>Custom-built · No templates · Fast delivery</div>
            </div>
          </div>
        </footer>
      </div>

      {/* ── ZOOM MODAL ────────────────────────────── */}
      {isZoomOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)', padding: 16 }}>

          <button onClick={() => setIsZoomOpen(false)}
            style={{ position: 'absolute', top: 20, right: 20, width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <XIcon size={20} />
          </button>

          <div style={{ position: 'absolute', top: 20, left: 20, padding: '8px 16px', borderRadius: 8, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', fontSize: 13, fontWeight: 600, color: '#fff', zIndex: 10, fontFamily: "'DM Mono', monospace" }}>
            {zoomSlideIndex + 1} / {allScreenshotSets[currentZoomType]?.length}
          </div>

          {/* Slide title */}
          <div style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
            <div style={{ padding: '8px 18px', borderRadius: 10, background: 'rgba(5,7,15,0.9)', backdropFilter: 'blur(16px)', border: '1px solid rgba(99,102,241,0.35)', fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', color: '#818cf8', fontFamily: "'DM Mono', monospace", whiteSpace: 'nowrap' }}>
              {currentZoomType === 'doctor' && ['DASHBOARD', 'INCOME TRACKER', 'EXPENSE MANAGER', 'TASK SYSTEM', 'DUES MANAGER', 'ANALYTICS'][zoomSlideIndex]}
              {currentZoomType === 'pem' && ['HOMEPAGE', 'DOCTOR PROFILE', 'DOCTOR PROFILE', 'DOCTOR PROFILE', 'COURSE PAGE', 'COURSE PAGE', 'LIVE CLASSES', 'BOOKS LIBRARY', 'GALLERY'][zoomSlideIndex]}
              {currentZoomType === 'drweb' && ['HOMEPAGE', 'RECENT EVENT', 'ABOUT', 'ACHIEVEMENTS', 'ACHIEVEMENTS',  'SERVICES', 'PATIENTS STORIES', 'CONTACT'][zoomSlideIndex]}
              {currentZoomType === 'hospital' && ['HOMEPAGE', 'ABOUT', 'LEADING CONSULTANT', 'FACILITIES', 'DOCTORS PANEL', 'WHY GODAVARI', 'PATIENTS STORIES', 'VISIT & CONTACT', 'BOOKING'][zoomSlideIndex]}
            </div>
          </div>

          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src={currentZoomImage} alt="Zoomed view" width={1400} height={900}
              style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '85vh', borderRadius: 12, boxShadow: '0 40px 120px rgba(0,0,0,0.8)' }}
              priority
            />
          </div>

          {['left', 'right'].map(dir => (
            <button key={dir}
              onClick={dir === 'left' ? prevZoomSlide : nextZoomSlide}
              style={{ position: 'absolute', [dir]: 20, top: '50%', transform: 'translateY(-50%)', width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, transition: 'all 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >
              {dir === 'left' ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
            </button>
          ))}

          <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 10 }}>
            {allScreenshotSets[currentZoomType]?.map((_, idx) => (
              <button key={idx}
                onClick={() => { setZoomSlideIndex(idx); setCurrentZoomImage(allScreenshotSets[currentZoomType][idx]) }}
                style={{ height: 4, width: zoomSlideIndex === idx ? 28 : 10, borderRadius: 2, background: zoomSlideIndex === idx ? '#fff' : 'rgba(255,255,255,0.25)', border: 'none', cursor: 'pointer', transition: 'all 0.25s', padding: 0 }}
              />
            ))}
          </div>

          <div style={{ position: 'absolute', inset: 0, zIndex: -1, cursor: 'pointer' }} onClick={() => setIsZoomOpen(false)} />
        </div>
      )}
                         
      {/* Preload images */}
      <div style={{ display: 'none' }}>
        {[...doctorScreenshots, ...pemScreenshots, ...drWebScreenshots, ...hospitalScreenshots].map((img, i) => (
          <Image key={i} src={img} alt="" width={10} height={10} />
        ))}
      </div>
    </div>
  )
}       