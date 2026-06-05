import React, { useState, useEffect } from "react";

export default function App() {
  // Navigation & Scroll State
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiryType, setEnquiryType] = useState("General Query");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  // Track scroll position for navbar transparency and blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handler for B2B button click to scroll and pre-select enquiry type
  const handleB2BClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEnquiryType("B2B / Wholesale");
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !message) {
      setFormError("Please fill out all required fields.");
      return;
    }
    setFormError("");
    setFormSubmitted(true);

    // Reset fields
    setFullName("");
    setEmail("");
    setPhone("");
    setEnquiryType("General Query");
    setMessage("");

    // Reset success message after 8 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 8000);
  };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen relative font-sans overflow-x-hidden selection:bg-[#C9A84C] selection:text-black">
      {/* CSS Styles injection for Fonts and custom animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        .font-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }
        
        .font-sans {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* Ambient floating particles background */
        @keyframes float-glow-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.25; }
          50% { transform: translateY(-40px) translateX(20px); opacity: 0.45; }
        }
        @keyframes float-glow-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.15; }
          50% { transform: translateY(30px) translateX(-30px); opacity: 0.35; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.15); }
        }
        
        .animate-float-glow-1 {
          animation: float-glow-1 15s ease-in-out infinite;
        }
        .animate-float-glow-2 {
          animation: float-glow-2 20s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
      `}} />

      {/* Gold linear gradient definition for SVGs */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#AA7C11" />
            <stop offset="40%" stopColor="#C9A84C" />
            <stop offset="70%" stopColor="#E6CA73" />
            <stop offset="100%" stopColor="#B08D30" />
          </linearGradient>
          <linearGradient id="goldTextGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#F5E3A6" />
          </linearGradient>
        </defs>
      </svg>

      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] overflow-hidden pointer-events-none z-0">
        {/* Large radial gradient centering from the middle of Hero */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.12)_0%,rgba(10,10,10,0)_70%)] animate-pulse-slow pointer-events-none" />
        
        {/* Ambient floating blurred blobs */}
        <div className="absolute top-[20%] left-[5%] w-64 h-64 md:w-96 md:h-96 bg-[#C9A84C]/5 rounded-full filter blur-[80px] md:blur-[100px] animate-float-glow-1" />
        <div className="absolute top-[40%] right-[5%] w-72 h-72 md:w-[450px] md:h-[450px] bg-[#AA7C11]/3 rounded-full filter blur-[90px] md:blur-[120px] animate-float-glow-2" />
      </div>

      {/* SECTION 1 — STICKY NAVIGATION BAR & TOP BANNER */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Small top banner */}
        <div className="bg-[#111111] border-b border-[#C9A84C]/10 text-center py-2 px-3 text-[10px] sm:text-xs font-medium tracking-wide text-[#CCCCCC]">
          <span className="inline-flex items-center gap-1.5 flex-wrap justify-center">
            <span>🌿 Free shipping on orders above ₹999</span>
            <span className="hidden sm:inline text-[#C9A84C]/40">|</span>
            <span className="text-[#C9A84C] font-semibold">Authentic Certified Shungite from Karelia, Russia</span>
          </span>
        </div>

        {/* Main Sticky Navbar */}
        <nav
          className={`transition-all duration-300 py-3 md:py-4 px-4 sm:px-6 md:px-12 flex items-center justify-between ${
            isScrolled
              ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#C9A84C]/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              : "bg-transparent"
          }`}
        >
          {/* Logo Left */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex items-center group cursor-pointer"
          >
            {/* Hexagon icon */}
            <svg
              className="w-6 h-6 md:w-7 md:h-7 mr-2 md:mr-2.5 transition-transform duration-300 group-hover:rotate-6"
              viewBox="0 0 100 100"
              fill="none"
            >
              <polygon
                points="50,5 90,28 90,72 50,95 10,72 10,28"
                stroke="url(#goldGradient)"
                strokeWidth="8"
                fill="none"
              />
              <polygon
                points="50,22 75,37 75,63 50,78 25,63 25,37"
                stroke="url(#goldGradient)"
                strokeWidth="3"
                fill="rgba(201,168,76,0.1)"
              />
            </svg>
            <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-white group-hover:text-[#C9A84C] transition-colors duration-300">
              Shungite Shield
            </span>
          </a>

          {/* Desktop Nav Links Right */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="text-sm font-medium tracking-wide text-[#CCCCCC] hover:text-[#C9A84C] transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#benefits"
              onClick={(e) => handleNavClick(e, "benefits")}
              className="text-sm font-medium tracking-wide text-[#CCCCCC] hover:text-[#C9A84C] transition-colors duration-300"
            >
              Benefits
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleNavClick(e, "testimonials")}
              className="text-sm font-medium tracking-wide text-[#CCCCCC] hover:text-[#C9A84C] transition-colors duration-300"
            >
              Testimonials
            </a>
            <a
              href="#certifications"
              onClick={(e) => handleNavClick(e, "certifications")}
              className="text-sm font-medium tracking-wide text-[#CCCCCC] hover:text-[#C9A84C] transition-colors duration-300"
            >
              Certifications
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "pricing")}
              className="text-sm font-medium tracking-wide text-[#CCCCCC] hover:text-[#C9A84C] transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-sm font-medium tracking-wide text-[#CCCCCC] hover:text-[#C9A84C] transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "pricing")}
              className="ml-4 px-5 py-2 bg-gradient-to-r from-[#AA7C11] via-[#C9A84C] to-[#E6CA73] hover:from-[#C9A84C] hover:to-[#AA7C11] text-black font-semibold text-xs uppercase tracking-wider rounded transition-all duration-300 shadow-[0_4px_15px_rgba(201,168,76,0.2)] hover:shadow-[0_4px_20px_rgba(201,168,76,0.4)]"
            >
              Shop Now
            </a>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#C9A84C] transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-current rounded-sm transition-all duration-300 origin-left ${
                  mobileMenuOpen ? "rotate-45 translate-x-1" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded-sm transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded-sm transition-all duration-300 origin-left ${
                  mobileMenuOpen ? "-rotate-45 translate-x-1" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Nav Dropdown */}
        <div
          className={`lg:hidden w-full bg-[#0E0E0E]/95 border-b border-[#C9A84C]/20 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-[400px] border-opacity-100" : "max-h-0 border-opacity-0"
          }`}
        >
          <div className="flex flex-col py-6 px-6 gap-4">
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="text-base font-medium text-[#CCCCCC] hover:text-[#C9A84C] py-1 border-b border-white/5 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#benefits"
              onClick={(e) => handleNavClick(e, "benefits")}
              className="text-base font-medium text-[#CCCCCC] hover:text-[#C9A84C] py-1 border-b border-white/5 transition-colors duration-300"
            >
              Benefits
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleNavClick(e, "testimonials")}
              className="text-base font-medium text-[#CCCCCC] hover:text-[#C9A84C] py-1 border-b border-white/5 transition-colors duration-300"
            >
              Testimonials
            </a>
            <a
              href="#certifications"
              onClick={(e) => handleNavClick(e, "certifications")}
              className="text-base font-medium text-[#CCCCCC] hover:text-[#C9A84C] py-1 border-b border-white/5 transition-colors duration-300"
            >
              Certifications
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "pricing")}
              className="text-base font-medium text-[#CCCCCC] hover:text-[#C9A84C] py-1 border-b border-white/5 transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-base font-medium text-[#CCCCCC] hover:text-[#C9A84C] py-1 transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "pricing")}
              className="w-full text-center mt-2 py-3 bg-gradient-to-r from-[#AA7C11] via-[#C9A84C] to-[#E6CA73] text-black font-semibold uppercase tracking-wider rounded text-sm transition-all duration-300 shadow-[0_4px_15px_rgba(201,168,76,0.2)]"
            >
              Shop Now
            </a>
          </div>
        </div>
      </header>

      {/* SECTION 2 — HERO SECTION */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center pt-28 pb-12 md:pb-16 px-4 sm:px-6 md:px-12 text-center relative z-10"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Subtly glowing badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#1A1A1A] border border-[#C9A84C]/30 text-[10px] md:text-xs tracking-widest text-[#C9A84C] uppercase font-semibold mb-6 md:mb-8 shadow-[0_0_15px_rgba(201,168,76,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-ping" />
            Empowering Modern Wellness
          </div>

          {/* Large Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight md:leading-none mb-6">
            Protect Your Energy.
            <span className="block mt-2 bg-gradient-to-r from-[#C9A84C] via-[#F5E3A6] to-[#C9A84C] bg-clip-text text-transparent">
              Shield Your Space.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-sm sm:text-lg md:text-xl text-[#CCCCCC] max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10">
            Genuine Karelian Shungite — scientifically studied for EMF absorption,
            water purification, and energetic protection. Trusted by wellness practitioners
            across India and the BRICS region.
          </p>

          {/* Two CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md mb-12 md:mb-16">
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "pricing")}
              className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-gradient-to-r from-[#AA7C11] via-[#C9A84C] to-[#E6CA73] hover:from-[#C9A84C] hover:to-[#AA7C11] text-black font-bold tracking-wide rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(201,168,76,0.25)] hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transform hover:-translate-y-0.5 text-center"
            >
              Shop Now
            </a>
            <a
              href="#benefits"
              onClick={(e) => handleNavClick(e, "benefits")}
              className="w-full sm:w-auto px-8 py-3.5 md:py-4 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 font-bold tracking-wide rounded-md transition-all duration-300 transform hover:-translate-y-0.5 text-center"
            >
              Learn More
            </a>
          </div>

          {/* 3 Trust Badges (Horizontal Row on Mobile) */}
          <div className="w-full border-t border-[#C9A84C]/15 pt-6 md:pt-8">
            <div className="grid grid-cols-3 gap-2 sm:gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 py-2">
                <span className="text-xl sm:text-2xl">🔬</span>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider text-white uppercase text-center sm:text-left">
                  Lab Tested
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 py-2 border-x border-[#C9A84C]/15">
                <span className="text-xl sm:text-2xl">🌍</span>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider text-white uppercase text-center sm:text-left flex flex-col sm:flex-row sm:gap-1">
                  <span>Karelia,</span> <span className="hidden sm:inline">Russia</span>
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 py-2">
                <span className="text-xl sm:text-2xl">✅</span>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider text-white uppercase text-center sm:text-left">
                  Authentic
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PRODUCT FEATURE HIGHLIGHTS */}
      <section id="features" className="py-12 md:py-20 px-4 sm:px-6 md:px-12 bg-[#0A0A0A] relative z-10 border-t border-[#C9A84C]/10">
        <div className="max-w-6xl mx-auto">
          {/* Section Headings */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Why Shungite Shield?
            </h2>
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#CCCCCC] leading-relaxed">
              Every product is crafted from genuine Type II Shungite — the only carbon-based mineral known to contain fullerenes.
            </p>
            <div className="w-16 md:w-20 h-1 bg-[#C9A84C] mx-auto mt-4 md:mt-6" />
          </div>

          {/* Feature Cards Grid (2x3 on mobile, 3x2 on desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-[#1A1A1A] p-4 sm:p-6 md:p-8 rounded-lg border-t-2 md:border-t-4 border-[#C9A84C] shadow-md hover:shadow-[0_10px_30px_rgba(201,168,76,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#C9A84C]/10 rounded-full flex items-center justify-center text-base sm:text-lg md:text-2xl mb-4 sm:mb-6 border border-[#C9A84C]/20 group-hover:bg-[#C9A84C]/25 transition-all duration-300">
                ⚡
              </div>
              <h3 className="font-serif text-sm sm:text-lg md:text-xl font-bold text-white mb-2 md:mb-3">EMF Protection</h3>
              <p className="font-sans text-[10px] sm:text-xs md:text-sm text-[#CCCCCC] leading-relaxed">
                Shungite's unique carbon structure absorbs and neutralises electromagnetic radiation from phones, WiFi routers, and electronic devices.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1A1A1A] p-4 sm:p-6 md:p-8 rounded-lg border-t-2 md:border-t-4 border-[#C9A84C] shadow-md hover:shadow-[0_10px_30px_rgba(201,168,76,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#C9A84C]/10 rounded-full flex items-center justify-center text-base sm:text-lg md:text-2xl mb-4 sm:mb-6 border border-[#C9A84C]/20 group-hover:bg-[#C9A84C]/25 transition-all duration-300">
                💧
              </div>
              <h3 className="font-serif text-sm sm:text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Water Purification</h3>
              <p className="font-sans text-[10px] sm:text-xs md:text-sm text-[#CCCCCC] leading-relaxed">
                Place Shungite stones in water for 48 hours to mineralise and purify — a practice used in Russia for centuries.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1A1A1A] p-4 sm:p-6 md:p-8 rounded-lg border-t-2 md:border-t-4 border-[#C9A84C] shadow-md hover:shadow-[0_10px_30px_rgba(201,168,76,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#C9A84C]/10 rounded-full flex items-center justify-center text-base sm:text-lg md:text-2xl mb-4 sm:mb-6 border border-[#C9A84C]/20 group-hover:bg-[#C9A84C]/25 transition-all duration-300">
                🧘
              </div>
              <h3 className="font-serif text-sm sm:text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Energy Balancing</h3>
              <p className="font-sans text-[10px] sm:text-xs md:text-sm text-[#CCCCCC] leading-relaxed">
                Used in meditation and healing practices to ground energy, reduce stress, and create protective energetic fields.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#1A1A1A] p-4 sm:p-6 md:p-8 rounded-lg border-t-2 md:border-t-4 border-[#C9A84C] shadow-md hover:shadow-[0_10px_30px_rgba(201,168,76,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#C9A84C]/10 rounded-full flex items-center justify-center text-base sm:text-lg md:text-2xl mb-4 sm:mb-6 border border-[#C9A84C]/20 group-hover:bg-[#C9A84C]/25 transition-all duration-300">
                🔬
              </div>
              <h3 className="font-serif text-sm sm:text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Scientific Study</h3>
              <p className="font-sans text-[10px] sm:text-xs md:text-sm text-[#CCCCCC] leading-relaxed">
                Shungite's fullerene content has been the subject of Nobel Prize research, documented in peer-reviewed studies.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#1A1A1A] p-4 sm:p-6 md:p-8 rounded-lg border-t-2 md:border-t-4 border-[#C9A84C] shadow-md hover:shadow-[0_10px_30px_rgba(201,168,76,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#C9A84C]/10 rounded-full flex items-center justify-center text-base sm:text-lg md:text-2xl mb-4 sm:mb-6 border border-[#C9A84C]/20 group-hover:bg-[#C9A84C]/25 transition-all duration-300">
                🌿
              </div>
              <h3 className="font-serif text-sm sm:text-lg md:text-xl font-bold text-white mb-2 md:mb-3">100% Natural</h3>
              <p className="font-sans text-[10px] sm:text-xs md:text-sm text-[#CCCCCC] leading-relaxed">
                No synthetic additives, no coatings. Every piece is hand-selected raw or polished Shungite direct from Karelia, Russia.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#1A1A1A] p-4 sm:p-6 md:p-8 rounded-lg border-t-2 md:border-t-4 border-[#C9A84C] shadow-md hover:shadow-[0_10px_30px_rgba(201,168,76,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#C9A84C]/10 rounded-full flex items-center justify-center text-base sm:text-lg md:text-2xl mb-4 sm:mb-6 border border-[#C9A84C]/20 group-hover:bg-[#C9A84C]/25 transition-all duration-300">
                🏠
              </div>
              <h3 className="font-serif text-sm sm:text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Home & Work</h3>
              <p className="font-sans text-[10px] sm:text-xs md:text-sm text-[#CCCCCC] leading-relaxed">
                Ideal for placement near laptops, routers, TVs, and smart meters. Available in pyramid, sphere, and raw chunk forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — BENEFITS SECTION */}
      <section id="benefits" className="py-12 md:py-20 px-4 sm:px-6 md:px-12 bg-[#101010] relative z-10 border-t border-[#C9A84C]/10">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              What Our Customers Experience
            </h2>
            <div className="w-16 md:w-20 h-1 bg-[#C9A84C] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column — Decorative Element */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-44 h-44 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center shadow-[0_0_50px_rgba(201,168,76,0.1)] border border-[#C9A84C]/20 group overflow-hidden">
                {/* Glow ring */}
                <div className="absolute inset-2 rounded-full border border-dashed border-[#C9A84C]/10 animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-6 md:inset-8 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.15)_0%,transparent_70%)] animate-pulse" />
                
                {/* Large gold ⬡ symbol */}
                <svg
                  className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 text-[#C9A84C] relative z-10 transition-transform duration-700 group-hover:scale-105"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <polygon
                    points="50,10 85,30 85,70 50,90 15,70 15,30"
                    stroke="url(#goldGradient)"
                    strokeWidth="4"
                    fill="rgba(10,10,10,0.6)"
                  />
                  <polygon
                    points="50,22 75,37 75,63 50,78 25,63 25,37"
                    stroke="url(#goldGradient)"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                  />
                  {/* Outer glowing nodes */}
                  <circle cx="50" cy="10" r="4" fill="#E6CA73" />
                  <circle cx="85" cy="30" r="4" fill="#E6CA73" />
                  <circle cx="85" cy="70" r="4" fill="#E6CA73" />
                  <circle cx="50" cy="90" r="4" fill="#E6CA73" />
                  <circle cx="15" cy="70" r="4" fill="#E6CA73" />
                  <circle cx="15" cy="30" r="4" fill="#E6CA73" />
                </svg>

                {/* Subtitle bottom */}
                <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-center">
                  <span className="font-serif text-[10px] sm:text-xs uppercase tracking-widest text-[#C9A84C] font-semibold">
                    C60 Fullerene Shield
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column — Benefits List */}
            <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Reduced headaches and eye strain from screen exposure",
                  "Better sleep quality when placed near sleeping areas",
                  "Improved focus during long work-from-home sessions",
                  "Energetically cleaner water with improved taste",
                  "A calmer, more grounded feeling throughout the day",
                  "Protection for children and elderly sensitive to EMF",
                  "Aesthetically beautiful — doubles as home décor",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 md:gap-4">
                    <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/35 flex items-center justify-center text-[10px] sm:text-xs text-[#C9A84C] font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="font-sans text-sm sm:text-base text-[#E0E0E0]">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Highlighted Quote Box */}
              <div className="bg-[#1A1A1A] border-l-4 border-[#C9A84C] p-4 sm:p-6 rounded-r-lg relative overflow-hidden shadow-inner">
                <div className="absolute top-0 right-0 text-5xl md:text-6xl text-[#C9A84C]/5 font-serif pointer-events-none select-none">
                  “
                </div>
                <p className="font-serif italic text-xs sm:text-sm md:text-base text-[#E0E0E0] leading-relaxed mb-3 relative z-10">
                  "Shungite is one of the most electrically conductive natural minerals on Earth — a property directly linked to its unique fullerene molecular structure."
                </p>
                <cite className="block font-sans text-[10px] sm:text-xs uppercase tracking-wider text-[#C9A84C] font-semibold not-italic">
                  — Dr. Robert Haag, Mineralogist
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — TRUST AND CREDIBILITY SECTION */}
      <section id="certifications" className="py-12 md:py-20 px-4 sm:px-6 md:px-12 bg-[#0A0A0A] relative z-10 border-t border-[#C9A84C]/10">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Why Trust Shungite Shield?
            </h2>
            <div className="w-16 md:w-20 h-1 bg-[#C9A84C] mx-auto mt-4" />
          </div>

          {/* 4 Trust Cards in a row (2x2 on mobile, 4 in a row on desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
            {/* Trust Card 1 */}
            <div className="bg-[#161616] p-4 sm:p-6 rounded-lg border border-[#C9A84C]/10 flex flex-col items-center text-center group hover:border-[#C9A84C]/35 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300">
                🏆
              </div>
              <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-white mb-1.5 md:mb-2">Certified Authentic</h3>
              <p className="font-sans text-[10px] sm:text-xs md:text-sm text-[#CCCCCC] leading-relaxed">
                Certified Type II Shungite direct from Zazhoginskoye deposit in Karelia, Russia — the world's only significant deposit.
              </p>
            </div>

            {/* Trust Card 2 */}
            <div className="bg-[#161616] p-4 sm:p-6 rounded-lg border border-[#C9A84C]/10 flex flex-col items-center text-center group hover:border-[#C9A84C]/35 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300">
                🔬
              </div>
              <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-white mb-1.5 md:mb-2">Lab Tested</h3>
              <p className="font-sans text-[10px] sm:text-xs md:text-sm text-[#CCCCCC] leading-relaxed">
                Tested for carbon content (min 30% for Type II) and electrical conductivity by independent labs. Certificates on request.
              </p>
            </div>

            {/* Trust Card 3 */}
            <div className="bg-[#161616] p-4 sm:p-6 rounded-lg border border-[#C9A84C]/10 flex flex-col items-center text-center group hover:border-[#C9A84C]/35 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300">
                🌟
              </div>
              <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-white mb-1.5 md:mb-2">5000+ Customers</h3>
              <p className="font-sans text-[10px] sm:text-xs md:text-sm text-[#CCCCCC] leading-relaxed">
                Trusted by wellness practitioners, consultants, yoga studios, and health-conscious families across India and UAE.
              </p>
            </div>

            {/* Trust Card 4 */}
            <div className="bg-[#161616] p-4 sm:p-6 rounded-lg border border-[#C9A84C]/10 flex flex-col items-center text-center group hover:border-[#C9A84C]/35 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300">
                🚚
              </div>
              <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-white mb-1.5 md:mb-2">Fast Delivery</h3>
              <p className="font-sans text-[10px] sm:text-xs md:text-sm text-[#CCCCCC] leading-relaxed">
                Ships from Mumbai warehouse. Delivered within 3–7 business days. Express delivery option available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-12 md:py-20 px-4 sm:px-6 md:px-12 bg-[#101010] relative z-10 border-t border-[#C9A84C]/10">
        <div className="max-w-6xl mx-auto">
          {/* Section Headings */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              What Our Customers Say
            </h2>
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#CCCCCC] leading-relaxed">
              Real experiences from verified buyers across India
            </p>
            <div className="w-16 md:w-20 h-1 bg-[#C9A84C] mx-auto mt-4" />
          </div>

          {/* Testimonials Row (Stacked on mobile, 3-wide on desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-[#1A1A1A] p-6 sm:p-8 rounded-lg border-l-4 border-[#C9A84C] shadow-lg flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(0,0,0,0.4)] transition-all duration-300 group">
              <div>
                {/* Gold Stars */}
                <div className="flex gap-1 text-[#C9A84C] text-base sm:text-lg mb-3 sm:mb-4">
                  {"★".repeat(5)}
                </div>
                <p className="font-sans text-xs sm:text-sm md:text-base text-[#E0E0E0] italic leading-relaxed mb-4 sm:mb-6">
                  "I placed the Shungite pyramid next to my WiFi router two months ago. My teenage son's sleep has genuinely improved and I feel less drained after long laptop sessions."
                </p>
              </div>
              <div className="border-t border-white/5 pt-4">
                <span className="block font-serif text-sm font-bold text-white">
                  Priya M.
                </span>
                <span className="block font-sans text-xs text-[#C9A84C]/80 mt-0.5">
                  Bangalore | Verified Buyer
                </span>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-[#1A1A1A] p-6 sm:p-8 rounded-lg border-l-4 border-[#C9A84C] shadow-lg flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(0,0,0,0.4)] transition-all duration-300 group">
              <div>
                {/* Gold Stars */}
                <div className="flex gap-1 text-[#C9A84C] text-base sm:text-lg mb-3 sm:mb-4">
                  {"★".repeat(5)}
                </div>
                <p className="font-sans text-xs sm:text-sm md:text-base text-[#E0E0E0] italic leading-relaxed mb-4 sm:mb-6">
                  "As an Ayurvedic practitioner I recommend Shungite water to my clients for mineralisation. The quality from Shungite Shield is consistent and the certification gives me confidence."
                </p>
              </div>
              <div className="border-t border-white/5 pt-4">
                <span className="block font-serif text-sm font-bold text-white">
                  Dr. Arvind K.
                </span>
                <span className="block font-sans text-xs text-[#C9A84C]/80 mt-0.5">
                  Pune | Ayurvedic Consultant
                </span>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-[#1A1A1A] p-6 sm:p-8 rounded-lg border-l-4 border-[#C9A84C] shadow-lg flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(0,0,0,0.4)] transition-all duration-300 group">
              <div>
                {/* Gold Stars */}
                <div className="flex gap-1 text-[#C9A84C] text-base sm:text-lg mb-3 sm:mb-4">
                  {"★".repeat(5)}
                </div>
                <p className="font-sans text-xs sm:text-sm md:text-base text-[#E0E0E0] italic leading-relaxed mb-4 sm:mb-6">
                  "Beautiful pieces, fast delivery, and the packaging was premium. I gifted the sphere set to my mother and she loves it. Will definitely reorder."
                </p>
              </div>
              <div className="border-t border-white/5 pt-4">
                <span className="block font-serif text-sm font-bold text-white">
                  Sneha R.
                </span>
                <span className="block font-sans text-xs text-[#C9A84C]/80 mt-0.5">
                  Mumbai | Corporate Wellness Buyer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — PRICING / PRODUCT SECTION */}
      <section id="pricing" className="py-12 md:py-20 px-4 sm:px-6 md:px-12 bg-[#0A0A0A] relative z-10 border-t border-[#C9A84C]/10">
        <div className="max-w-6xl mx-auto">
          {/* Section Headings */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Choose Your Protection
            </h2>
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#CCCCCC] leading-relaxed">
              All products include authenticity certificate + free protective pouch
            </p>
            <div className="w-16 md:w-20 h-1 bg-[#C9A84C] mx-auto mt-4" />
          </div>

          {/* 3 Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-md lg:max-w-5xl mx-auto mb-12 md:mb-16">
            
            {/* Card 1 — Basic Starter Pack */}
            <div className="bg-[#1A1A1A] p-6 sm:p-8 rounded-lg border border-[#C9A84C]/15 shadow-lg flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(201,168,76,0.08)] transition-all duration-300 relative">
              <div className="absolute top-4 right-4 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded">
                Most Popular
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-2 mb-4">Starter Pack</h3>
                
                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-sans text-3xl sm:text-4xl font-bold text-white">₹799</span>
                  <span className="font-sans text-xs sm:text-sm text-[#CCCCCC] line-through">₹1,199</span>
                </div>

                <div className="w-full h-px bg-white/5 mb-6" />

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#CCCCCC]">
                    <span className="text-[#C9A84C] font-semibold text-xs">✓</span>
                    1x Shungite Raw Chunk (50–70g)
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#CCCCCC]">
                    <span className="text-[#C9A84C] font-semibold text-xs">✓</span>
                    1x Shungite Phone Sticker
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#CCCCCC]">
                    <span className="text-[#C9A84C] font-semibold text-xs">✓</span>
                    Authenticity Certificate
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#CCCCCC]">
                    <span className="text-[#C9A84C] font-semibold text-xs">✓</span>
                    Care Guide
                  </li>
                </ul>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="w-full text-center py-3 bg-[#C9A84C] hover:bg-[#B08D30] text-black font-bold tracking-wide rounded transition-all duration-300"
              >
                Order Now
              </a>
            </div>

            {/* Card 2 — Pro Home Protection Set (Highlighted) */}
            <div className="bg-[#1A1A1A] p-6 sm:p-8 rounded-lg border-2 border-[#C9A84C] shadow-[0_0_30px_rgba(201,168,76,0.15)] flex flex-col justify-between hover:shadow-[0_0_40px_rgba(201,168,76,0.25)] transition-all duration-300 relative lg:scale-105 z-10 lg:my-[-4px]">
              <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#AA7C11] via-[#C9A84C] to-[#E6CA73] text-black text-[10px] sm:text-[11px] uppercase tracking-widest font-extrabold px-5 py-1.5 rounded-full shadow-md">
                Best Value
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-4 mb-4">Home Protection Set</h3>
                
                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#C9A84C] via-[#F5E3A6] to-[#C9A84C] bg-clip-text text-transparent">₹1,899</span>
                  <span className="font-sans text-xs sm:text-sm text-[#CCCCCC] line-through">₹2,799</span>
                </div>

                <div className="w-full h-px bg-[#C9A84C]/20 mb-6" />

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-white font-medium">
                    <span className="text-[#C9A84C] font-semibold text-xs">✓</span>
                    1x Shungite Pyramid (200g)
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-white font-medium">
                    <span className="text-[#C9A84C] font-semibold text-xs">✓</span>
                    1x Shungite Sphere (150g)
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#CCCCCC]">
                    <span className="text-[#C9A84C] font-semibold text-xs">✓</span>
                    3x Shungite Water Stones
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#CCCCCC]">
                    <span className="text-[#C9A84C] font-semibold text-xs">✓</span>
                    2x Phone Stickers
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#CCCCCC]">
                    <span className="text-[#C9A84C] font-semibold text-xs">✓</span>
                    Authenticity Certificate
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#CCCCCC]">
                    <span className="text-[#C9A84C] font-semibold text-xs">✓</span>
                    Premium Gift Box
                  </li>
                </ul>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="w-full text-center py-3.5 bg-gradient-to-r from-[#AA7C11] via-[#C9A84C] to-[#E6CA73] hover:from-[#C9A84C] hover:to-[#AA7C11] text-black font-extrabold tracking-wider uppercase rounded shadow-[0_4px_15px_rgba(201,168,76,0.3)] hover:shadow-[0_4px_25px_rgba(201,168,76,0.5)] transition-all duration-300"
              >
                Order Now
              </a>
            </div>

            {/* Card 3 — Enterprise Studio Pack */}
            <div className="bg-[#1A1A1A] p-6 sm:p-8 rounded-lg border border-[#C9A84C]/15 shadow-lg flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(201,168,76,0.08)] transition-all duration-300">
              <div className="absolute top-4 right-4 bg-white/5 border border-white/10 text-white/70 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded">
                B2B Bulk Available
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-2 mb-4">Wellness Studio Pack</h3>
                
                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-sans text-3xl sm:text-4xl font-bold text-white">₹4,499</span>
                  <span className="font-sans text-xs sm:text-sm text-[#CCCCCC] line-through">₹6,500</span>
                </div>

                <div className="w-full h-px bg-white/5 mb-6" />

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#CCCCCC]">
                    <span className="text-[#C9A84C] font-semibold text-xs">✓</span>
                    5x Shungite Pyramids
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#CCCCCC]">
                    <span className="text-[#C9A84C] font-semibold text-xs">✓</span>
                    5x Raw Chunks
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#CCCCCC]">
                    <span className="text-[#C9A84C] font-semibold text-xs">✓</span>
                    10x Phone Stickers
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#CCCCCC]">
                    <span className="text-[#C9A84C] font-semibold text-xs">✓</span>
                    Bulk authenticity certificates
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#CCCCCC]">
                    <span className="text-[#C9A84C] font-semibold text-xs">✓</span>
                    Dedicated account manager
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#CCCCCC]">
                    <span className="text-[#C9A84C] font-semibold text-xs">✓</span>
                    Custom engraving available
                  </li>
                </ul>
              </div>

              <button
                onClick={handleB2BClick}
                className="w-full text-center py-3 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 font-bold tracking-wide rounded transition-all duration-300"
              >
                Contact for B2B
              </button>
            </div>

          </div>

          {/* Subtext Footer */}
          <div className="text-center text-[10px] sm:text-xs md:text-sm text-[#999999] bg-[#111111] py-4 px-6 rounded-lg border border-white/5 max-w-3xl mx-auto">
            💳 Pay via UPI, Net Banking, Cards or Cash on Delivery | 🔄 30-day return policy | 📦 Free shipping above ₹999
          </div>
        </div>
      </section>

      {/* SECTION 8 — ENQUIRY / CONTACT SECTION */}
      <section id="contact" className="py-12 md:py-20 px-4 sm:px-6 md:px-12 bg-[#101010] relative z-10 border-t border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto">
          {/* Section Headings */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Get in Touch
            </h2>
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#CCCCCC] leading-relaxed">
              For B2B wholesale enquiries, bulk orders, or product questions — reach out directly.
            </p>
            <div className="w-16 md:w-20 h-1 bg-[#C9A84C] mx-auto mt-4" />
          </div>

          {/* Form and Submission UI */}
          <div className="bg-[#1A1A1A] border border-[#C9A84C]/15 rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl mb-12 relative">
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8 md:py-12">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#C9A84C]/10 border border-[#C9A84C] rounded-full flex items-center justify-center text-2xl sm:text-3xl mb-6 text-[#C9A84C] animate-bounce">
                  ✓
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#C9A84C] font-medium max-w-md">
                  Thank you! We'll respond within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-8 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#CCCCCC] hover:text-[#C9A84C] transition-colors"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {formError && (
                  <div className="p-3 sm:p-4 bg-red-950/40 border border-red-500/30 text-red-400 text-xs sm:text-sm rounded flex items-center gap-2">
                    <span className="font-bold">⚠️</span> {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Name field (fontsize 16px to prevent iOS zoom) */}
                  <div className="flex flex-col">
                    <label htmlFor="name-input" className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#CCCCCC] mb-1.5 md:mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Priyanjali Sen"
                      required
                      className="bg-[#101010] border border-white/10 rounded px-4 py-2.5 md:py-3 text-white text-base focus:outline-none focus:ring-1 focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-all duration-300"
                    />
                  </div>

                  {/* Email address */}
                  <div className="flex flex-col">
                    <label htmlFor="email-input" className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#CCCCCC] mb-1.5 md:mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. priyanjali@gmail.com"
                      required
                      className="bg-[#101010] border border-white/10 rounded px-4 py-2.5 md:py-3 text-white text-base focus:outline-none focus:ring-1 focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Phone number */}
                  <div className="flex flex-col">
                    <label htmlFor="phone-input" className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#CCCCCC] mb-1.5 md:mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone-input"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      required
                      className="bg-[#101010] border border-white/10 rounded px-4 py-2.5 md:py-3 text-white text-base focus:outline-none focus:ring-1 focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-all duration-300"
                    />
                  </div>

                  {/* Enquiry Type dropdown */}
                  <div className="flex flex-col">
                    <label htmlFor="enquiry-type" className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#CCCCCC] mb-1.5 md:mb-2">
                      Enquiry Type
                    </label>
                    <select
                      id="enquiry-type"
                      value={enquiryType}
                      onChange={(e) => setEnquiryType(e.target.value)}
                      className="bg-[#101010] border border-white/10 rounded px-4 py-2.5 md:py-3 text-white text-base focus:outline-none focus:ring-1 focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-all duration-300 cursor-pointer"
                    >
                      <option value="General Query">General Query</option>
                      <option value="B2B / Wholesale">B2B / Wholesale</option>
                      <option value="Bulk Order">Bulk Order</option>
                      <option value="Product Question">Product Question</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message-input" className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#CCCCCC] mb-1.5 md:mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message-input"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your requirements or ask any questions..."
                    required
                    className="bg-[#101010] border border-white/10 rounded px-4 py-2.5 md:py-3 text-white text-base focus:outline-none focus:ring-1 focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 md:py-4 bg-gradient-to-r from-[#AA7C11] via-[#C9A84C] to-[#E6CA73] hover:from-[#C9A84C] hover:to-[#AA7C11] text-black font-bold uppercase tracking-wider text-xs md:text-sm rounded shadow-[0_4px_15px_rgba(201,168,76,0.2)] hover:shadow-[0_4px_25px_rgba(201,168,76,0.4)] transition-all duration-300"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* 3 Contact Detail Cards (Stacked on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Email Card */}
            <div className="bg-[#1A1A1A] border border-white/5 p-5 sm:p-6 rounded-lg flex items-center gap-4 hover:border-[#C9A84C]/25 transition-all duration-300">
              <span className="text-2xl text-[#C9A84C]">📧</span>
              <div>
                <span className="block text-[10px] uppercase tracking-wider font-bold text-white/50 mb-0.5">
                  Email
                </span>
                <a
                  href="mailto:hello@shungiteshield.in"
                  className="font-sans text-xs sm:text-sm font-semibold text-[#CCCCCC] hover:text-[#C9A84C] transition-colors"
                >
                  hello@shungiteshield.in
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#1A1A1A] border border-white/5 p-5 sm:p-6 rounded-lg flex items-center gap-4 hover:border-[#C9A84C]/25 transition-all duration-300">
              <span className="text-2xl text-[#C9A84C]">📞</span>
              <div>
                <span className="block text-[10px] uppercase tracking-wider font-bold text-white/50 mb-0.5">
                  Call Us
                </span>
                <a
                  href="tel:+919876543210"
                  className="font-sans text-xs sm:text-sm font-semibold text-[#CCCCCC] hover:text-[#C9A84C] transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#1A1A1A] border border-white/5 p-5 sm:p-6 rounded-lg flex items-center gap-4 hover:border-[#C9A84C]/25 transition-all duration-300">
              <span className="text-2xl text-[#C9A84C]">📍</span>
              <div>
                <span className="block text-[10px] uppercase tracking-wider font-bold text-white/50 mb-0.5">
                  Location
                </span>
                <span className="font-sans text-xs sm:text-sm font-semibold text-[#CCCCCC]">
                  Mumbai, India | Ships India-wide
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FOOTER */}
      <footer className="py-12 md:py-16 bg-[#000000] border-t border-[#C9A84C]/15 relative z-10 text-[#CCCCCC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-10 md:mb-12">
            
            {/* Logo and Brand Tagline */}
            <div className="sm:col-span-2 flex flex-col items-start">
              <div className="flex items-center mb-3 md:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" viewBox="0 0 100 100" fill="none">
                  <polygon
                    points="50,5 90,28 90,72 50,95 10,72 10,28"
                    stroke="url(#goldGradient)"
                    strokeWidth="8"
                  />
                </svg>
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white">
                  Shungite Shield
                </span>
              </div>
              <p className="font-serif italic text-xs sm:text-sm text-[#C9A84C] mb-3 md:mb-4">
                "Ancient Stone. Modern Protection."
              </p>
              <p className="font-sans text-[11px] sm:text-xs text-[#999999] leading-relaxed max-w-sm">
                Dedicated to bringing the highest quality, scientifically verified, and direct-sourced Russian Shungite wellness products to health-conscious individuals and spaces in India and the BRICS region.
              </p>
            </div>

            {/* Column 1 — Quick Links */}
            <div>
              <h4 className="font-serif text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3 md:mb-4 border-b border-[#C9A84C]/20 pb-2">
                Quick Links
              </h4>
              <ul className="space-y-2 text-[11px] sm:text-xs">
                <li>
                  <a
                    href="#hero"
                    onClick={(e) => handleNavClick(e, "hero")}
                    className="hover:text-[#C9A84C] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    onClick={(e) => handleNavClick(e, "features")}
                    className="hover:text-[#C9A84C] transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    onClick={(e) => handleNavClick(e, "benefits")}
                    className="hover:text-[#C9A84C] transition-colors"
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    onClick={(e) => handleNavClick(e, "pricing")}
                    className="hover:text-[#C9A84C] transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "contact")}
                    className="hover:text-[#C9A84C] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 — Products */}
            <div>
              <h4 className="font-serif text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3 md:mb-4 border-b border-[#C9A84C]/20 pb-2">
                Products
              </h4>
              <ul className="space-y-2 text-[11px] sm:text-xs">
                <li>
                  <a
                    href="#pricing"
                    onClick={(e) => handleNavClick(e, "pricing")}
                    className="hover:text-[#C9A84C] transition-colors"
                  >
                    Starter Pack
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    onClick={(e) => handleNavClick(e, "pricing")}
                    className="hover:text-[#C9A84C] transition-colors"
                  >
                    Home Protection Set
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    onClick={(e) => handleNavClick(e, "pricing")}
                    className="hover:text-[#C9A84C] transition-colors"
                  >
                    Wellness Studio Pack
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleB2BClick}
                    className="hover:text-[#C9A84C] transition-colors text-left text-[11px] sm:text-xs"
                  >
                    Custom Orders
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3 — Connect */}
            <div>
              <h4 className="font-serif text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3 md:mb-4 border-b border-[#C9A84C]/20 pb-2">
                Connect
              </h4>
              <ul className="space-y-2 text-[11px] sm:text-xs">
                <li>
                  <a href="#" className="hover:text-[#C9A84C] transition-colors flex items-center gap-1.5">
                    <span>📷</span> Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C9A84C] transition-colors flex items-center gap-1.5">
                    <span>💼</span> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C9A84C] transition-colors flex items-center gap-1.5">
                    <span>💬</span> WhatsApp
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#C9A84C]/10 pt-6 md:pt-8 mt-6 md:mt-8 flex flex-col sm:flex-row justify-between items-center text-center gap-4">
            <p className="text-[10px] sm:text-xs text-[#666666]">
              © 2026 Shungite Shield | GO-BRICS Business Lab | All rights reserved
            </p>
            <div className="flex gap-4 text-[10px] sm:text-xs text-[#666666]">
              <a href="#" className="hover:text-[#C9A84C] transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-[#C9A84C] transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
