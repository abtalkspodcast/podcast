import { Link } from 'react-router-dom';

export default function Episode126() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Back to Home Button - Fixed Top Left */}
      <Link to="/" className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 bg-white text-blue-600 hover:text-blue-700 font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all group">
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </Link>

      {/* Episode Hero - Matches Episode 127's improved structure */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1600&q=80)'}}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-3 text-blue-100 mb-6">
            <span className="font-semibold text-lg">Episode 126</span>
            <span className="text-blue-200">•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              52 min
            </span>
            <span className="text-blue-200">•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
              Nov 12, 2025
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            NFL Analytics Deep Dive
          </h1>
          <p className="text-lg md:text-xl text-blue-50 mb-10 leading-relaxed max-w-3xl">
            Expert analysis on NFL betting trends, key statistics, and how to identify value bets in the current season.
          </p>
          
          {/* Audio Player */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <button className="w-14 h-14 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center hover:scale-105">
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
                  <span>52:00</span>
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Episode Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Join us for an in-depth analysis of NFL betting analytics. We break down advanced statistics, team performance metrics, and the key indicators that separate winning bets from losing ones in professional football betting.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What You'll Learn</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Advanced NFL statistics that matter for betting</li>
                <li>How to analyze team matchups using data</li>
                <li>Understanding betting lines and finding value</li>
                <li>Weather impact on game outcomes</li>
                <li>Injury reports and their betting implications</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h3>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <p className="text-gray-800">
                  "Successful NFL betting isn't about picking winners - it's about finding value in the odds and understanding the statistical edges that books often overlook."
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Topics Covered</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">DVOA Analysis</h4>
                  <p className="text-gray-600">Defense-adjusted value over average and its betting applications</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">EPA & Success Rate</h4>
                  <p className="text-gray-600">Expected points added and why it matters</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Line Movement</h4>
                  <p className="text-gray-600">Reading and understanding betting line changes</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Props & Totals</h4>
                  <p className="text-gray-600">Finding value in player props and game totals</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Resources Mentioned</h3>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#" className="text-blue-600 hover:text-blue-700">Pro Football Reference</a></li>
                <li><a href="#" className="text-blue-600 hover:text-blue-700">Football Outsiders DVOA</a></li>
                <li><a href="#" className="text-blue-600 hover:text-blue-700">NFL Next Gen Stats</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
