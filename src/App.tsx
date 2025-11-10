import { Menu, X, Play, CheckCircle, Users, TrendingUp, BarChart3, Shield, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeroContent, setShowHeroContent] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0.2);
  const [heroParallax, setHeroParallax] = useState(0);

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

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-8 w-8 text-green-500" />
                <span className="text-2xl font-bold text-white">bigbets.ai</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="#podcasting" className="text-gray-300 hover:text-white transition-colors">Podcasting</a>
              <a href="#advertisers" className="text-gray-300 hover:text-white transition-colors">Advertisers</a>
              <a href="#enterprise" className="text-gray-300 hover:text-white transition-colors">Enterprise</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#resources" className="text-gray-300 hover:text-white transition-colors">Resources</a>
              <span className="text-gray-600">|</span>
              <a href="#discover" className="text-gray-300 hover:text-white transition-colors">Discover</a>
              <div className="flex items-center gap-3 ml-4">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-green-500 w-48"
                />
                <a href="#login" className="text-gray-300 hover:text-white transition-colors">Log in</a>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                  Sign up free
                </button>
              </div>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-4 space-y-3">
              <a href="#podcasting" className="block text-gray-300 hover:text-white">Podcasting</a>
              <a href="#advertisers" className="block text-gray-300 hover:text-white">Advertisers</a>
              <a href="#enterprise" className="block text-gray-300 hover:text-white">Enterprise</a>
              <a href="#pricing" className="block text-gray-300 hover:text-white">Pricing</a>
              <a href="#resources" className="block text-gray-300 hover:text-white">Resources</a>
              <a href="#discover" className="block text-gray-300 hover:text-white">Discover</a>
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-green-500"
              />
              <a href="#login" className="block text-gray-300 hover:text-white">Log in</a>
              <button className="w-full px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                Sign up free
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        {/* Video Background with Parallax */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: `translateY(${heroParallax}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <source src="https://angular-webpage.s3.eu-north-1.amazonaws.com/assets/videos/3192305-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="flex items-center">
            <div className={`max-w-3xl transition-all duration-1000 ${
              showHeroContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Your AI-Powered Betting Analytics Platform
              </h1>
              <p className="text-xl text-white mb-8">
                Make smarter bets with advanced analytics, real-time insights, and AI-driven predictions. Join thousands of users maximizing their winning potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-base sm:text-lg">
                  Get Started For Free
                </button>
                <button className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold text-base sm:text-lg flex items-center justify-center">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Win
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to give you the edge in sports betting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Dive deep into comprehensive statistics, historical data, and trend analysis to make informed decisions.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant updates on odds changes, line movements, and market trends as they happen.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Predictions</h3>
              <p className="text-gray-600 leading-relaxed">
                Leverage machine learning algorithms trained on millions of data points for accurate predictions.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with expert bettors, share strategies, and learn from the community.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bankroll Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Track your bets, manage your budget, and optimize your betting strategy with smart tools.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Verified Results</h3>
              <p className="text-gray-600 leading-relaxed">
                All predictions and performance metrics are transparently tracked and verified.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden" id="analytics" style={{ height: '600px' }}>
        {/* Background Image - Slides to reveal more on scroll */}
        <div 
          className="absolute w-full"
          style={{
            backgroundImage: 'url(https://www.blueridge.edu/wp-content/uploads/2019/12/ftr-office-administration-dsc_8224-862x485.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            height: '200%',
            top: '-50%',
            left: 0,
            right: 0,
            transform: `translateY(${(1 - scrollProgress) * 40 - 20}%)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Analytics That Drive Results
              </h2>
              <p className="text-xl text-white opacity-90 mb-8">
                Our platform processes millions of data points to provide you with actionable insights and winning strategies.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white text-lg">Historical performance analysis across all major sports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white text-lg">Advanced statistical modeling and probability calculations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white text-lg">Customizable dashboards and reporting tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white text-lg">Mobile-optimized for betting on the go</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Sports Analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Winning Bettors
            </h2>
            <p className="text-xl text-gray-600">
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
              <p className="text-gray-700 leading-relaxed">
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
              <p className="text-gray-700 leading-relaxed">
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
              <p className="text-gray-700 leading-relaxed">
                "As someone new to betting, bigbets.ai made it easy to understand the data and make smart bets. The community is incredibly supportive too."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Start free and upgrade as you grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <p className="text-gray-600 mb-6">Perfect for getting started</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Basic analytics
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  5 predictions per week
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Community access
                </li>
              </ul>
              <button className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-green-600 hover:text-green-600 transition-colors font-semibold">
                Get Started
              </button>
            </div>

            <div className="bg-green-600 p-8 rounded-2xl shadow-xl transform scale-105">
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <p className="text-white opacity-90 mb-6">Most popular choice</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$49</span>
                <span className="text-white opacity-90">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-white mr-2" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-white mr-2" />
                  Unlimited predictions
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-white mr-2" />
                  AI-powered insights
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-white mr-2" />
                  Priority support
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Free Trial
              </button>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For serious bettors</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$199</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Everything in Pro
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  API access
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Dedicated account manager
                </li>
              </ul>
              <button className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-green-600 hover:text-green-600 transition-colors font-semibold">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Winning?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of bettors using bigbets.ai to make smarter, data-driven decisions.
          </p>
          <button className="px-6 py-3 sm:px-8 sm:py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-base sm:text-lg">
            Get Started For Free
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <span className="text-xl font-bold text-white">bigbets.ai</span>
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
                <li><a href="#" className="hover:text-green-600 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; 2025 bigbets.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
