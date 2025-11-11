import { Menu, X, CheckCircle, Users, TrendingUp, BarChart3, Shield, Zap, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import AuthPage from './AuthPage';

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
  // removed unused search-open state

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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.1)]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between md:justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#home" className="cursor-pointer">
                <img 
                  src="https://ggggg.s3.eu-north-1.amazonaws.com/Logo-removebg-preview+(1).png" 
                  alt="Logo" 
                  className="h-24 md:h-32 lg:h-40 w-auto"
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
              <div className="flex items-center gap-6 ml-4">
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
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      Sign up free
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Search - Centered */}
            <div className="md:hidden flex-1 mx-4">
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
              className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
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

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white" id="discover">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-6">
            Ready to Start Winning?
          </h2>
          <p className="text-base md:text-xl opacity-90 mb-8">
            Join thousands of bettors using bigbets.ai to make smarter, data-driven decisions.
          </p>
          <a href="#pricing">
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-base sm:text-lg">
              Get Started For Free
            </button>
          </a>
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
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; 2025 All rights reserved.</p>
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
