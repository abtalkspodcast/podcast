import { Link } from 'react-router-dom';

export default function Episode127() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Back to Home Button - Fixed Top Left */}
      <Link to="/" className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 bg-white text-green-600 hover:text-green-700 font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all group">
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </Link>

      {/* Episode Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80)'}}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-3 text-green-100 mb-6">
            <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">NEW</span>
            <span className="font-semibold text-lg">Episode 127</span>
            <span className="text-green-200">•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              45 min
            </span>
            <span className="text-green-200">•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
              Nov 15, 2025
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            AI-Powered Betting Strategies for 2025
          </h1>
          <p className="text-lg md:text-xl text-green-50 mb-10 leading-relaxed max-w-3xl">
            Discover how artificial intelligence is revolutionizing sports betting and learn the strategies that top bettors are using to maximize their profits.
          </p>
          
          {/* Audio Player */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <button className="w-14 h-14 bg-white text-green-600 rounded-full hover:bg-green-50 transition-all shadow-lg flex items-center justify-center hover:scale-105">
                <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                </svg>
              </button>
              <div className="flex-1 mx-6">
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-white rounded-full"></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-white/80">
                  <span>0:00</span>
                  <span>45:00</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-white/80 hover:text-white transition-colors" title="Playback speed">
                  <span className="text-sm font-semibold">1x</span>
                </button>
                <button className="text-white/80 hover:text-white transition-colors" title="Volume">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Content */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-green-600">Episode Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                In this groundbreaking episode, we dive deep into the world of AI-powered betting strategies that are reshaping the sports betting landscape in 2025. Our experts break down the latest machine learning algorithms and predictive models that professional bettors are using to gain an edge.
              </p>
              
              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-green-600 rounded"></span>
                What You'll Learn
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>How AI algorithms analyze thousands of data points in real-time</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>The best machine learning models for different sports</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Common pitfalls to avoid when using AI betting tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>How to integrate AI insights into your betting strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Real-world case studies of successful AI-powered bettors</span>
                </li>
              </ul>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-green-600 rounded"></span>
                Key Takeaways
              </h3>
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-600 p-8 my-8 rounded-r-xl shadow-md">
                <div className="flex gap-4">
                  <svg className="w-8 h-8 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-gray-800 text-lg italic leading-relaxed">
                    "The future of sports betting isn't about replacing human intuition with AI - it's about augmenting your decision-making process with data-driven insights that were previously impossible to obtain."
                  </p>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-green-600 rounded"></span>
                Topics Covered
              </h3>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 7H7v6h6V7z"/>
                      <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-3">Machine Learning Basics</h4>
                  <p className="text-gray-600 leading-relaxed">Understanding neural networks and how they predict outcomes</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/>
                      <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/>
                      <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-3">Data Collection</h4>
                  <p className="text-gray-600 leading-relaxed">Finding and processing the right data for your models</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-3">Risk Management</h4>
                  <p className="text-gray-600 leading-relaxed">Using AI to optimize your bankroll allocation</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-3">Live Betting</h4>
                  <p className="text-gray-600 leading-relaxed">Real-time AI analysis for in-game betting opportunities</p>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-green-600 rounded"></span>
                Resources Mentioned
              </h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-green-600 group-hover:text-green-700 font-semibold">TensorFlow Betting Models Repository</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-green-600 group-hover:text-green-700 font-semibold">Sports Data API Documentation</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-green-600 group-hover:text-green-700 font-semibold">AI Betting Strategy Whitepaper</span>
                </a>
              </div>
            </div>
          </div>

          {/* Share & Subscribe Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Share This Episode</h3>
              <p className="mb-6 text-green-50">Found this episode valuable? Share it with your network!</p>
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                  </svg>
                  Share
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Never Miss an Episode</h3>
              <p className="mb-6 text-gray-300">Subscribe to get notified about new episodes</p>
              <Link to="/" className="inline-block px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
