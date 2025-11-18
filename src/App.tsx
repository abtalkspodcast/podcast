import { Menu, X, CheckCircle, Users, TrendingUp, BarChart3, Shield, Zap, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import AuthPage from './AuthPage';
import ChristmasSnowfall from './components/ChristmasSnowfall';
import ShootingStars from './components/ShootingStars';
import './styles/christmas-theme.css';
import './styles/christmas-page-enhancements.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeroContent, setShowHeroContent] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0.2);
  const [heroParallax, setHeroParallax] = useState(0);
  const [typedLine1, setTypedLine1] = useState('');
  const [typedLine2, setTypedLine2] = useState('');
  const [showLine2, setShowLine2] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isAuthPageOpen, setIsAuthPageOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');
  const [searchQuery, setSearchQuery] = useState('');
  const [userData, setUserData] = useState<{ name: string; email: string } | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [christmasThemeEnabled] = useState(true); // Toggle this to enable/disable Christmas theme
  const [discoverBgPosition, setDiscoverBgPosition] = useState(0);
  // removed unused search-open state

  // Add Christmas theme class to body
  useEffect(() => {
    if (christmasThemeEnabled) {
      document.body.classList.add('christmas-theme');
    } else {
      document.body.classList.remove('christmas-theme');
    }
    return () => {
      document.body.classList.remove('christmas-theme');
    };
  }, [christmasThemeEnabled]);

  // Check if user is logged in on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const handleAuthSuccess = (data: { name: string; email: string }) => {
    setUserData(data);
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setUserData(null);
    setShowUserMenu(false);
    alert('Logged out successfully!');
  };

  const line1Text = "Analytics That Drive Results";
  const line2Text = "Our platform processes millions of data points to provide you with actionable insights and winning strategies.";

  // Enhanced search functionality
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const searchLower = searchQuery.toLowerCase();
      
      // Define searchable content with keywords for each section
      const searchIndex = [
        {
          id: 'home',
          keywords: ['home', 'ai', 'powered', 'betting', 'analytics', 'platform', 'smarter', 'bets', 'real-time', 'insights', 'predictions', 'winning', 'potential', 'free']
        },
        {
          id: 'podcasting',
          keywords: ['podcast', 'betting', 'newbie', 'professional', 'bettor', 'journey', 'goals', 'bigbets', 'create', 'publish', 'bets', 'phone', 'app', 'capture', 'live', 'tracking', 'strategies', 'platform', 'audience', 'smart']
        },
        {
          id: 'advertisers',
          keywords: ['features', 'advertis', 'win', 'advanced', 'analytics', 'statistics', 'historical', 'data', 'trend', 'analysis', 'real-time', 'insights', 'odds', 'line', 'movements', 'market', 'ai', 'predictions', 'machine', 'learning', 'algorithms', 'community', 'expert', 'share', 'bankroll', 'management', 'budget', 'optimize', 'verified', 'results', 'performance', 'metrics', 'tracked']
        },
        {
          id: 'analytics',
          keywords: ['analytics', 'drive', 'results', 'data', 'points', 'actionable', 'insights', 'winning', 'strategies', 'historical', 'performance', 'analysis', 'sports', 'statistical', 'modeling', 'probability', 'calculations', 'customizable', 'dashboards', 'reporting', 'tools', 'mobile', 'optimized', 'betting', 'go']
        },
        {
          id: 'enterprise',
          keywords: ['enterprise', 'trusted', 'winning', 'bettors', 'users', 'improved', 'performance', 'testimonials', 'reviews', 'michael', 'chen', 'sarah', 'johnson', 'david', 'martinez', 'roi', 'game-changer', 'data-driven', 'decisions', 'confidence', 'easy', 'understand', 'supportive']
        },
        {
          id: 'pricing',
          keywords: ['pricing', 'price', 'plan', 'cost', 'free', 'pro', 'enterprise', 'basic', 'analytics', 'predictions', 'week', 'community', 'access', 'advanced', 'unlimited', 'ai-powered', 'priority', 'support', 'custom', 'models', 'api', 'dedicated', 'account', 'manager', 'trial', 'contact', 'sales']
        },
        {
          id: 'discover',
          keywords: ['discover', 'start', 'winning', 'ready', 'join', 'thousands', 'using', 'bigbets', 'smarter', 'data-driven', 'decisions', 'get', 'started', 'free']
        }
      ];

      // Find all matching sections
      const matches = searchIndex.filter(section => 
        section.keywords.some(keyword => keyword.includes(searchLower) || searchLower.includes(keyword))
      );

      if (matches.length > 0) {
        // Scroll to the first match
        document.getElementById(matches[0].id)?.scrollIntoView({ behavior: 'smooth' });
        
        // Show all matches if more than one
        if (matches.length > 1) {
          const sectionNames = matches.map(m => m.id.charAt(0).toUpperCase() + m.id.slice(1)).join(', ');
          setTimeout(() => {
            alert(`Found "${searchQuery}" in: ${sectionNames}\n\nScrolled to: ${matches[0].id.charAt(0).toUpperCase() + matches[0].id.slice(1)}`);
          }, 500);
        }
      } else {
        alert(`No results found for "${searchQuery}"\n\nTry searching for: betting, analytics, pricing, features, plans, predictions, AI, enterprise, or free`);
      }
      
      setSearchQuery('');
    }
  };

  // Typing effect for line 1
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= line1Text.length) {
        setTypedLine1(line1Text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setShowLine2(true);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Typing effect for line 2
  useEffect(() => {
    if (!showLine2) return;
    
    let index = 0;
    const timer = setInterval(() => {
      if (index <= line2Text.length) {
        setTypedLine2(line2Text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [showLine2]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Hero parallax effect - slower scroll
      setHeroParallax(window.scrollY * 0.5);
      
      // Discover section background parallax - horizontal movement
      const discoverSection = document.getElementById('discover');
      if (discoverSection) {
        const rect = discoverSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        
        // Calculate horizontal movement based on scroll position
        if (sectionTop < windowHeight && sectionTop > -rect.height) {
          const scrollPercent = (windowHeight - sectionTop) / (windowHeight + rect.height);
          // Move from left (-20%) to right (20%) as user scrolls through the section
          const bgPosition = (scrollPercent - 0.5) * 40; // Range: -20% to 20%
          setDiscoverBgPosition(bgPosition);
        }
      }
      
      // Calculate scroll progress for parallax effect
      const analyticsSection = document.getElementById('analytics');
      if (analyticsSection) {
        const rect = analyticsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        
        // Start revealing when section enters viewport
        if (sectionTop < windowHeight && sectionTop > -rect.height) {
          const progress = Math.min(Math.max((windowHeight - sectionTop) / windowHeight, 0.1), 1);
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeroContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Sync heroParallax to a CSS variable so we can avoid inline style props
  useEffect(() => {
    document.documentElement.style.setProperty('--hero-translate', `${heroParallax}px`);
  }, [heroParallax]);

  // Sync analytics bg transform to CSS variable driven by scrollProgress
  useEffect(() => {
    const val = `${(1 - scrollProgress) * 40 - 20}%`;
    document.documentElement.style.setProperty('--analytics-translate', val);
  }, [scrollProgress]);

  return (
    <div className="min-h-screen bg-white">
      {/* Christmas Theme Elements */}
      {christmasThemeEnabled && (
        <>
          <div className="christmas-lights"></div>
          <div className="christmas-lights-bottom"></div>
          <ChristmasSnowfall />
          <ShootingStars />
        </>
      )}
      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.1)]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between md:justify-between items-center h-16">
            <div className="flex items-center gap-2">
              {/* Christmas Tree - Left side of logo */}
              {christmasThemeEnabled && (
                <div className="christmas-tree-container">
                  <svg width="35" height="45" viewBox="0 0 40 50" className="w-7 h-9 md:w-8 md:h-10 drop-shadow-lg">
                    <defs>
                      <radialGradient id="treeGlow">
                        <stop offset="0%" stopColor="#ffd700" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
                      </radialGradient>
                      <filter id="treeShadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.3"/>
                      </filter>
                    </defs>
                    {/* Tree trunk */}
                    <rect x="17" y="38" width="6" height="8" fill="#8B4513" stroke="#654321" strokeWidth="0.5"/>
                    {/* Tree layers - bottom to top */}
                    <path d="M20 38 L8 38 L14 28 L6 28 L20 10 L34 28 L26 28 L32 38 Z" fill="#0f8a5f" stroke="#0a5f42" strokeWidth="1" filter="url(#treeShadow)"/>
                    {/* Star on top */}
                    <path d="M20 8 L21 11 L24 11 L22 13 L23 16 L20 14 L17 16 L18 13 L16 11 L19 11 Z" fill="#ffd700" stroke="#f4a300" strokeWidth="0.5"/>
                    {/* Ornaments (small circles) */}
                    <circle cx="20" cy="15" r="1.5" fill="#c41e3a"/>
                    <circle cx="25" cy="20" r="1.5" fill="#ffd700"/>
                    <circle cx="15" cy="20" r="1.5" fill="#c41e3a"/>
                    <circle cx="20" cy="25" r="1.5" fill="#ffd700"/>
                    <circle cx="18" cy="32" r="1.5" fill="#c41e3a"/>
                    <circle cx="22" cy="32" r="1.5" fill="#ffd700"/>
                    {/* Glow effect */}
                    <circle cx="20" cy="25" r="15" fill="url(#treeGlow)"/>
                  </svg>
                </div>
              )}
              
              <a href="#home" className="cursor-pointer relative inline-block">
                {christmasThemeEnabled && (
                  <div className="absolute -top-8 md:-top-10 lg:-top-12 left-1/2 transform -translate-x-1/2 z-50">
                    <svg width="120" height="60" viewBox="0 0 100 50" className="w-20 h-10 md:w-28 md:h-14 lg:w-32 lg:h-16 drop-shadow-2xl">
                      {/* Santa Hat - positioned to look like it's on the logo */}
                      <defs>
                        <radialGradient id="santaGlowMain">
                          <stop offset="0%" stopColor="#ffd700" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
                        </radialGradient>
                        <filter id="shadowMain">
                          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.6"/>
                        </filter>
                        <linearGradient id="hatShine" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ff1a3d" stopOpacity="1"/>
                          <stop offset="100%" stopColor="#c41e3a" stopOpacity="1"/>
                        </linearGradient>
                      </defs>
                      {/* Main hat triangle - bigger and more visible */}
                      <path d="M50 2 L90 45 L10 45 Z" fill="url(#hatShine)" stroke="#8B0000" strokeWidth="2.5" filter="url(#shadowMain)"/>
                      {/* White fur trim at bottom - thicker */}
                      <ellipse cx="50" cy="45" rx="42" ry="7" fill="#ffffff" stroke="#d0d0d0" strokeWidth="1.5"/>
                      <ellipse cx="50" cy="44" rx="42" ry="5" fill="#f5f5f5"/>
                      {/* White pompom at tip - larger */}
                      <circle cx="50" cy="2" r="10" fill="#ffffff" stroke="#d0d0d0" strokeWidth="1.5" filter="url(#shadowMain)"/>
                      <circle cx="50" cy="2" r="8" fill="#fafafa"/>
                      {/* Bright glow effects */}
                      <circle cx="50" cy="2" r="15" fill="url(#santaGlowMain)"/>
                      {/* Extra highlights for 3D effect */}
                      <path d="M40 20 Q50 15 60 20 L55 30 Q50 27 45 30 Z" fill="#ff4d6a" opacity="0.4"/>
                      <ellipse cx="50" cy="45" rx="42" ry="3" fill="#fff" opacity="0.6"/>
                    </svg>
                  </div>
                )}
                <img 
                  src="https://ggggg.s3.eu-north-1.amazonaws.com/Logo-removebg-preview+(1).png" 
                  alt="Logo" 
                  className="h-24 md:h-32 lg:h-40 w-auto relative z-10"
                />
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="#podcasting" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}>Podcasting</a>
              <a href="#advertisers" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}>Advertisers</a>
              <a href="#enterprise" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}>Enterprise</a>
              <a href="#pricing" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}>Pricing</a>
              <a href="#analytics" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}>Resources</a>
              <span className={`${isScrolled ? 'text-gray-400' : 'text-gray-500'}`}>|</span>
              <a href="#discover" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}>Discover</a>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {/* Santa Sticker */}
              {christmasThemeEnabled && (
                <div className="animate-bounce-slow">
                  <span className="text-4xl drop-shadow-lg">🎅</span>
                </div>
              )}
              
              <form onSubmit={handleSearch} className="relative">
                <input 
                  type="text" 
                  placeholder="Search" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`px-4 py-2 rounded-lg border focus:outline-none focus:border-green-500 w-48 transition-colors backdrop-blur-sm ${
                    isScrolled 
                      ? 'bg-white/20 text-gray-900 border-gray-300 placeholder:text-gray-600' 
                      : 'bg-white/10 text-white border-white/30 placeholder:text-gray-300'
                  }`}
                />
              </form>
              
              {/* Conditional rendering: Show avatar if logged in, otherwise show auth buttons */}
              {userData ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      isScrolled ? 'bg-green-600 text-white' : 'bg-white text-green-600'
                    }`}>
                      {userData.name.charAt(0).toUpperCase()}
                    </div>
                    <span className={`font-medium ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                      Hello, {userData.name}
                    </span>
                  </button>
                  
                  {/* User dropdown menu */}
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <p className="font-medium text-gray-900">{userData.name}</p>
                        <p className="text-sm text-gray-500 truncate">{userData.email}</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center gap-2"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <button 
                    onClick={() => { setAuthMode('login'); setIsAuthPageOpen(true); }}
                    className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}
                  >
                    Log in
                  </button>
                  <button 
                    onClick={() => { setAuthMode('signup'); setIsAuthPageOpen(true); }}
                    className="px-4 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                  >
                    Sign up free
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Container */}
            <div className="flex items-center md:hidden gap-2">
            {/* Mobile Search - Centered */}
            <div className="flex-1 mx-4">
              <form onSubmit={handleSearch}>
                <input 
                  type="text" 
                  placeholder="Search" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full px-3 py-1.5 rounded-lg border focus:outline-none focus:border-green-500 text-sm transition-colors backdrop-blur-sm ${
                    isScrolled 
                      ? 'bg-white/20 text-gray-900 border-gray-300 placeholder:text-gray-600' 
                      : 'bg-white/10 text-white border-white/30 placeholder:text-gray-300'
                  }`}
                />
              </form>
            </div>

            <button
              className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-4 space-y-3 text-center">
              <a href="#podcasting" className="block text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Podcasting</a>
              <a href="#advertisers" className="block text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Advertisers</a>
              <a href="#enterprise" className="block text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Enterprise</a>
              <a href="#pricing" className="block text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#analytics" className="block text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Resources</a>
              <a href="#discover" className="block text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Discover</a>
              
              {/* Mobile auth section */}
              {userData ? (
                <div className="pt-3 border-t border-gray-700">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
                      {userData.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="text-left">
                      <p className="text-white font-medium">{userData.name}</p>
                      <p className="text-gray-400 text-sm truncate max-w-[150px]">{userData.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                    className="w-full px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <button 
                    onClick={() => { setAuthMode('login'); setIsAuthPageOpen(true); setMobileMenuOpen(false); }}
                    className="block text-gray-300 hover:text-white w-full text-center"
                  >
                    Log in
                  </button>
                  <button 
                    onClick={() => { setAuthMode('signup'); setIsAuthPageOpen(true); setMobileMenuOpen(false); }}
                    className="w-full px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Sign up free
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden" id="home">
        {/* Video Background with Parallax */}
        <video className="hero-parallax absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          // style removed — using CSS variable --hero-translate for transform
        >
          <source src="https://ggggg.s3.eu-north-1.amazonaws.com/3156778-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32 w-full">
          <div className="flex items-center">
            <div className={`max-w-3xl transition-all duration-1000 ${
              showHeroContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Your AI-Powered Betting Analytics Platform
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-white opacity-90 mb-6 sm:mb-8 max-w-2xl">
                Make smarter bets with advanced analytics, real-time insights, and AI-driven predictions. Join thousands of users maximizing their winning potential.
              </p>
              <div className="flex justify-start">
                <a href="#pricing">
                  <button className="px-6 py-3 sm:px-12 sm:py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-semibold text-base sm:text-lg shadow-lg">
                    Get Started For Free
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" id="podcasting">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-6xl font-bold text-gray-900 mb-6">
              From betting newbie to professional bettor
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto">
              For over 10 years, more than 600,000 bettors have launched their betting journey and achieved their goals on bigbets.ai.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Image */}
              <img 
                src="https://pbcdn1.podbean.com/fs1/site/www-v2/images/double/h-feature@2x_resize_2x.webp"
                alt="Professional betting platform"
                className="w-full h-auto"
              />
              
              {/* Animated Waveform Overlay */}
              <div className="flex absolute top-[35.6%] md:top-[35%] left-20 md:left-32 transform -translate-y-1/2 flex items-center gap-0.5 md:gap-1 bg-white rounded-full px-2 py-1.5 md:px-3 md:py-2">
                <div className="w-[1.5px] md:w-1 bg-red-500 rounded-full animate-wave wave-1"></div>
                <div className="w-[1.5px] md:w-1 bg-red-500 rounded-full animate-wave wave-2"></div>
                <div className="w-[1.5px] md:w-1 bg-red-500 rounded-full animate-wave wave-3"></div>
                <div className="w-[1.5px] md:w-1 bg-red-500 rounded-full animate-wave wave-4"></div>
                <div className="w-[1.5px] md:w-1 bg-red-500 rounded-full animate-wave wave-5"></div>
                <div className="w-[1.5px] md:w-1 bg-red-500 rounded-full animate-wave wave-6"></div>
                <div className="w-[1.5px] md:w-1 bg-red-500 rounded-full animate-wave wave-7"></div>
                <div className="w-[1.5px] md:w-1 bg-red-500 rounded-full animate-wave wave-8"></div>
                <div className="w-[1.5px] md:w-1 bg-red-500 rounded-full animate-wave wave-9"></div>
                <div className="w-[1.5px] md:w-1 bg-red-500 rounded-full animate-wave wave-10"></div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-4xl font-bold text-gray-900 mb-6">
                Create and publish your bets like a pro
              </h3>
              <p className="text-sm md:text-lg text-gray-600 mb-8 leading-relaxed">
                Make compelling bets right from your phone with the betting analytics app or capture any moment with professional-quality bigbets.ai live tracking. Publish your predictions and strategies in one ultra-simple, secure platform to grow your audience quickly and easily.
              </p>
              <a href="#" className="text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors inline-flex items-center">
                Start betting smart →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="advertisers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Win
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to give you the edge in sports betting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Dive deep into comprehensive statistics, historical data, and trend analysis to make informed decisions.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Real-Time Insights</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Get instant updates on odds changes, line movements, and market trends as they happen.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">AI Predictions</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Leverage machine learning algorithms trained on millions of data points for accurate predictions.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Community Insights</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Connect with expert bettors, share strategies, and learn from the community.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Bankroll Management</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Track your bets, manage your budget, and optimize your betting strategy with smart tools.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Verified Results</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                All predictions and performance metrics are transparently tracked and verified.
              </p>
            </div>
          </div>
        </div>
      </section>

  <section className="relative py-20 overflow-hidden h-auto md:h-[600px]" id="analytics">
        {/* Background Image - Slides to reveal more on scroll */}
        <div 
          className="absolute w-full bg-[url('https://ggggg.s3.eu-north-1.amazonaws.com/pexels-george-milton-6953765.jpg')] bg-cover bg-top bg-no-repeat top-[-50%] left-0 right-0 h-[200%] analytics-bg"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div>
              <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 min-h-[40px] md:min-h-[60px]">
                {typedLine1}
                <span className="animate-pulse">|</span>
              </h2>
              <p className="text-base md:text-xl text-white opacity-90 mb-6 md:mb-8 min-h-[60px] md:min-h-[100px]">
                {typedLine2}
                {showLine2 && typedLine2.length < line2Text.length && <span className="animate-pulse">|</span>}
              </p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-white mr-2 md:mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white text-sm md:text-lg">Historical performance analysis across all major sports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-white mr-2 md:mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white text-sm md:text-lg">Advanced statistical modeling and probability calculations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-white mr-2 md:mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white text-sm md:text-lg">Customizable dashboards and reporting tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-white mr-2 md:mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white text-sm md:text-lg">Mobile-optimized for betting on the go</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" id="enterprise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Winning Bettors
            </h2>
            <p className="text-base md:text-xl text-gray-600">
              Join thousands of users who have improved their betting performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="User"
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Michael Chen</h4>
                  <p className="text-gray-600 text-sm">Professional Bettor</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                "bigbets.ai has completely transformed my approach to sports betting. The AI predictions are incredibly accurate, and I've seen a 40% improvement in my ROI."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="User"
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Sports Analyst</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                "The analytics dashboard is a game-changer. I can track every metric that matters and make data-driven decisions with confidence."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="User"
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">David Martinez</h4>
                  <p className="text-gray-600 text-sm">Sports Enthusiast</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                "As someone new to betting, bigbets.ai made it easy to understand the data and make smart bets. The community is incredibly supportive too."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-base md:text-xl text-gray-600">
              Start free and upgrade as you grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-2xl hover:scale-105 group flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-white text-gray-900">Free</h3>
              <p className="text-sm md:text-base mb-6 group-hover:text-white group-hover:opacity-90 text-gray-600">Perfect for getting started</p>
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-bold group-hover:text-white text-gray-900">$0</span>
                <span className="group-hover:text-white group-hover:opacity-90 text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center text-sm md:text-base group-hover:text-white text-gray-700">
                  <CheckCircle className="h-5 w-5 mr-2 group-hover:text-white text-green-600" />
                  Basic analytics
                </li>
                <li className="flex items-center text-sm md:text-base group-hover:text-white text-gray-700">
                  <CheckCircle className="h-5 w-5 mr-2 group-hover:text-white text-green-600" />
                  5 predictions per week
                </li>
                <li className="flex items-center text-sm md:text-base group-hover:text-white text-gray-700">
                  <CheckCircle className="h-5 w-5 mr-2 group-hover:text-white text-green-600" />
                  Community access
                </li>
              </ul>
              <a href="#discover" className="block mt-auto">
                <button className="w-full px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold group-hover:bg-white group-hover:text-green-600 border border-green-600">
                  Get Started
                </button>
              </a>
            </div>

            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-2xl hover:scale-105 group relative flex flex-col">
              <div className="absolute top-4 right-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Most Popular
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-white text-gray-900">Pro</h3>
              <p className="text-sm md:text-base mb-6 group-hover:text-white group-hover:opacity-90 text-gray-600">Most popular choice</p>
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-bold group-hover:text-white text-gray-900">$49</span>
                <span className="group-hover:text-white group-hover:opacity-90 text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center text-sm md:text-base group-hover:text-white text-gray-700">
                  <CheckCircle className="h-5 w-5 mr-2 group-hover:text-white text-green-600" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-sm md:text-base group-hover:text-white text-gray-700">
                  <CheckCircle className="h-5 w-5 mr-2 group-hover:text-white text-green-600" />
                  Unlimited predictions
                </li>
                <li className="flex items-center text-sm md:text-base group-hover:text-white text-gray-700">
                  <CheckCircle className="h-5 w-5 mr-2 group-hover:text-white text-green-600" />
                  AI-powered insights
                </li>
                <li className="flex items-center text-sm md:text-base group-hover:text-white text-gray-700">
                  <CheckCircle className="h-5 w-5 mr-2 group-hover:text-white text-green-600" />
                  Priority support
                </li>
              </ul>
              <a href="#discover" className="block mt-auto">
                <button className="w-full px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold group-hover:bg-white group-hover:text-green-600 border border-green-600">
                  Start Free Trial
                </button>
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-2xl hover:scale-105 group flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-white text-gray-900">Enterprise</h3>
              <p className="text-sm md:text-base mb-6 group-hover:text-white group-hover:opacity-90 text-gray-600">For serious bettors</p>
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-bold group-hover:text-white text-gray-900">$199</span>
                <span className="group-hover:text-white group-hover:opacity-90 text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center text-sm md:text-base group-hover:text-white text-gray-700">
                  <CheckCircle className="h-5 w-5 mr-2 group-hover:text-white text-green-600" />
                  Everything in Pro
                </li>
                <li className="flex items-center text-sm md:text-base group-hover:text-white text-gray-700">
                  <CheckCircle className="h-5 w-5 mr-2 group-hover:text-white text-green-600" />
                  Custom AI models
                </li>
                <li className="flex items-center text-sm md:text-base group-hover:text-white text-gray-700">
                  <CheckCircle className="h-5 w-5 mr-2 group-hover:text-white text-green-600" />
                  API access
                </li>
                <li className="flex items-center text-sm md:text-base group-hover:text-white text-gray-700">
                  <CheckCircle className="h-5 w-5 mr-2 group-hover:text-white text-green-600" />
                  Dedicated account manager
                </li>
              </ul>
              <button 
                onClick={() => setIsContactFormOpen(true)}
                className="w-full px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold group-hover:bg-white group-hover:text-green-600 border border-green-600 mt-auto"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden" id="discover">
        {/* Background Image */}
        <div 
          className="absolute w-full bg-[url('https://ggggg.s3.eu-north-1.amazonaws.com/OIP.webp')] bg-cover bg-center bg-no-repeat top-0 left-0 right-0 h-full transition-all duration-700 ease-out"
          style={{ backgroundPositionX: `${50 + discoverBgPosition}%` }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Winning?
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-base md:text-xl opacity-90 mb-8 text-white">
            Join thousands of bettors using bigbets.ai to make smarter, data-driven decisions.
          </p>
          <a href="#pricing">
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-base sm:text-lg shadow-lg">
              Get Started For Free
            </button>
          </a>
        </div>
      </section>

      {/* Latest Episodes Section */}
      <section className="py-20 bg-white" id="episodes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Episodes
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Tune in to our newest episodes and stay ahead of the game
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Episode 1 */}
            <Link to="/episode/127" className="bg-white rounded-2xl overflow-hidden shadow-md group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-green-600 to-green-800 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80)'}}></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg">
                    <svg className="w-8 h-8 text-green-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  NEW
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className="font-semibold">Episode 127</span>
                  <span>•</span>
                  <span>45 min</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  AI-Powered Betting Strategies for 2025
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover how artificial intelligence is revolutionizing sports betting and learn the strategies that top bettors are using to...
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500 font-medium">Nov 15, 2025</span>
                  <button className="text-green-600 font-semibold flex items-center gap-1 hover:bg-transparent">
                    Listen Now →
                  </button>
                </div>
              </div>
            </Link>

            {/* Episode 2 */}
            <Link to="/episode/126" className="bg-white rounded-2xl overflow-hidden shadow-md group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80)'}}></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg">
                    <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className="font-semibold">Episode 126</span>
                  <span>•</span>
                  <span>52 min</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  NFL Analytics Deep Dive
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Expert analysis on NFL betting trends, key statistics, and how to identify value bets in the current season.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500 font-medium">Nov 12, 2025</span>
                  <button className="text-green-600 font-semibold flex items-center gap-1 hover:bg-transparent">
                    Listen Now →
                  </button>
                </div>
              </div>
            </Link>

            {/* Episode 3 */}
            <Link to="/episode/125" className="bg-white rounded-2xl overflow-hidden shadow-md group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-purple-600 to-purple-800 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80)'}}></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg">
                    <svg className="w-8 h-8 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className="font-semibold">Episode 125</span>
                  <span>•</span>
                  <span>38 min</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Bankroll Management Masterclass
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Learn the fundamental principles of bankroll management that separate successful bettors from the rest.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500 font-medium">Nov 8, 2025</span>
                  <button className="text-green-600 font-semibold flex items-center gap-1 hover:bg-transparent">
                    Listen Now →
                  </button>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-lg">
              View All Episodes
            </button>
          </div>
        </div>
      </section>

      {/* Browse by Category Section */}
      <section className="py-20 bg-gray-50" id="categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore episodes tailored to your interests
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Sports Analytics</h3>
              <p className="text-sm text-gray-600">87 episodes</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Betting Strategy</h3>
              <p className="text-sm text-gray-600">64 episodes</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Live Betting</h3>
              <p className="text-sm text-gray-600">52 episodes</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Interviews</h3>
              <p className="text-sm text-gray-600">41 episodes</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">AI & Technology</h3>
              <p className="text-sm text-gray-600">38 episodes</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Beginner's Guide</h3>
              <p className="text-sm text-gray-600">29 episodes</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Market Analysis</h3>
              <p className="text-sm text-gray-600">45 episodes</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Success Stories</h3>
              <p className="text-sm text-gray-600">33 episodes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Hosts Section */}
      <section className="py-20 bg-white" id="hosts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Your Hosts
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Expert analysts bringing you the latest insights and strategies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Host 1 */}
            <div className="bg-white rounded-2xl p-8 text-center group hover:shadow-xl transition-shadow">
              <div className="relative mb-6 inline-block">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto overflow-hidden group-hover:scale-105 transition-transform border-4 border-blue-200 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces" alt="John Davis" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">John Davis</h3>
              <p className="text-blue-600 font-semibold mb-4">Lead Analyst & Host</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                15+ years of experience in sports analytics and betting strategy. Former professional sports statistician.
              </p>
              <div className="flex justify-center items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors group/icon">
                  <svg className="w-5 h-5 text-blue-600 group-hover/icon:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors group/icon">
                  <svg className="w-5 h-5 text-blue-600 group-hover/icon:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Host 2 */}
            <div className="bg-white rounded-2xl p-8 text-center group hover:shadow-xl transition-shadow">
              <div className="relative mb-6 inline-block">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto overflow-hidden group-hover:scale-105 transition-transform border-4 border-blue-200 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces" alt="Sarah Mitchell" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah Mitchell</h3>
              <p className="text-blue-600 font-semibold mb-4">Data Scientist & Co-Host</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI and machine learning expert specializing in predictive modeling for sports betting markets.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors group/icon">
                  <svg className="w-5 h-5 text-blue-600 group-hover/icon:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors group/icon">
                  <svg className="w-5 h-5 text-blue-600 group-hover/icon:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Host 3 */}
            <div className="bg-white rounded-2xl p-8 text-center group hover:shadow-xl transition-shadow">
              <div className="relative mb-6 inline-block">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto overflow-hidden group-hover:scale-105 transition-transform border-4 border-blue-200 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces" alt="Mike Rodriguez" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mike Rodriguez</h3>
              <p className="text-blue-600 font-semibold mb-4">Pro Bettor & Guest Host</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional sports bettor with a proven track record. Shares real-world strategies and insights.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors group/icon">
                  <svg className="w-5 h-5 text-blue-600 group-hover/icon:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors group/icon">
                  <svg className="w-5 h-5 text-blue-600 group-hover/icon:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listener Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100" id="reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Listeners Say
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied listeners who trust AB Talks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "This podcast has completely transformed my approach to sports betting. The AI insights and data-driven strategies have increased my win rate by 40%!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold">
                  TC
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Tom Chen</h4>
                  <p className="text-sm text-gray-600">Professional Bettor</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "As a beginner, I was overwhelmed by betting. This podcast explained everything clearly and helped me build a solid foundation. Highly recommended!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                  EJ
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Emily Johnson</h4>
                  <p className="text-sm text-gray-600">Sports Enthusiast</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The depth of analysis and expert interviews are unmatched. I learn something new every episode. This is a must-listen for any serious bettor."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold">
                  DP
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">David Park</h4>
                  <p className="text-sm text-gray-600">Data Analyst</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-gray-600">
              <span className="text-4xl font-bold text-gray-900">4.9</span>
              <div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm">Based on 12,450+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <svg className="w-16 h-16 mx-auto mb-6 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Never Miss an Episode
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Get weekly betting tips, exclusive content, and early access to new episodes delivered to your inbox
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Join 50,000+ subscribers. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start mb-4">
                <img 
                  src="https://ggggg.s3.eu-north-1.amazonaws.com/Logo__1_-removebg-preview+(1).png" 
                  alt="Logo" 
                  className="h-10 md:h-16 w-auto"
                />
              </div>
              <p className="text-sm">
                Your AI-powered betting analytics platform for smarter decisions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-600 transition-colors">About</a></li>
                <li>
                  <button 
                    onClick={() => setIsContactFormOpen(true)} 
                    className="hover:text-green-600 transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            {christmasThemeEnabled && (
              <div className="mb-6">
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 mb-2 animate-pulse">
                  🎄 Merry Christmas! 🎅
                </p>
                <p className="text-base md:text-lg text-gray-300">
                  Wishing you joy, peace, and wonderful moments this holiday season! ✨
                </p>
              </div>
            )}
            <p className="text-sm text-gray-400">&copy; 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
      
      {/* Auth Page Modal */}
      <AuthPage 
        isOpen={isAuthPageOpen} 
        onClose={() => setIsAuthPageOpen(false)} 
        initialMode={authMode}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
}

export default App;
