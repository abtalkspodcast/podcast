import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface AuthPageProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
  onAuthSuccess: (userData: { name: string; email: string }) => void;
}

function AuthPage({ isOpen, onClose, initialMode = 'signup', onAuthSuccess }: AuthPageProps) {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  // Update mode when initialMode changes (when modal reopens)
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      // Reset form when modal opens
      setFormData({
        email: '',
        password: '',
        name: ''
      });
      setShowPassword(false);
    }
  }, [isOpen, initialMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === 'signup') {
      // Save user data to localStorage
      const userData = {
        name: formData.name,
        email: formData.email
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      
      alert('Sign up successful! Please log in.');
      
      // Switch to login mode after signup
      setMode('login');
      setFormData({
        email: formData.email,
        password: '',
        name: ''
      });
    } else {
      // Login mode - retrieve stored data
      const storedData = localStorage.getItem('userData');
      
      if (storedData) {
        const userData = JSON.parse(storedData);
        
        // Simple validation (in real app, you'd validate against backend)
        if (formData.email === userData.email) {
          alert('Login successful!');
          onAuthSuccess(userData);
          onClose();
        } else {
          alert('Invalid credentials. Please try again.');
        }
      } else {
        alert('No account found. Please sign up first.');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialAuth = (provider: string) => {
    console.log(`Authenticating with ${provider}`);
    alert(`${provider} authentication will be implemented`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-black bg-opacity-50">
      <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
        <div className="relative bg-gray-900 rounded-lg sm:rounded-2xl shadow-2xl max-w-6xl w-full overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left side - Background Image */}
            <div 
              className="hidden md:block relative h-full min-h-[600px] bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://ggggg.s3.eu-north-1.amazonaws.com/side-view-radio-microphone-with-copy-space_23-2148808737.jpg)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900"></div>
            </div>

            {/* Right side - Auth Form */}
            <div className="p-6 sm:p-8 md:p-12 relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="max-w-md mx-auto">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {mode === 'signup' ? 'Create an Account' : 'Welcome Back'}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400">
                    {mode === 'signup' 
                      ? 'Effortless podcasting 3x the speed, none of the hassle!' 
                      : 'Log in to continue your betting journey'}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  {mode === 'signup' && (
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required={mode === 'signup'}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                        placeholder="Enter your name"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors pr-10 sm:pr-12 text-sm sm:text-base"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-base sm:text-lg"
                  >
                    {mode === 'signup' ? 'Sign Up' : 'Log In'}
                  </button>
                </form>

                {/* Divider */}
                <div className="my-4 sm:my-6 flex items-center">
                  <div className="flex-1 border-t border-gray-700"></div>
                  <span className="px-4 text-gray-400 text-sm">OR</span>
                  <div className="flex-1 border-t border-gray-700"></div>
                </div>

                {/* Social Auth Buttons */}
                <div className="space-y-2 sm:space-y-3">
                  <button
                    onClick={() => handleSocialAuth('Apple')}
                    className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 text-white rounded-lg hover:bg-gray-750 transition-colors font-medium flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    Continue with Apple
                  </button>
                </div>

                {/* Toggle between login/signup */}
                <div className="mt-4 sm:mt-6 text-center text-gray-400 text-sm sm:text-base">
                  {mode === 'signup' ? (
                    <p>
                      Already have an account?{' '}
                      <button
                        onClick={() => setMode('login')}
                        className="text-blue-500 hover:text-blue-400 font-medium"
                      >
                        Log in
                      </button>
                    </p>
                  ) : (
                    <p>
                      Don't have an account?{' '}
                      <button
                        onClick={() => setMode('signup')}
                        className="text-blue-500 hover:text-blue-400 font-medium"
                      >
                        Sign up
                      </button>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
