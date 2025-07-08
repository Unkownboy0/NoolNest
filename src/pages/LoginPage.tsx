import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, BookOpen, Heart, ArrowRight, CheckCircle, Star, Users, Award, Sparkles } from 'lucide-react';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    console.log('Login attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200 rounded-full blur-3xl opacity-30 animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-300 rounded-full blur-2xl opacity-20 animate-bounce-gentle"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-teal-300 rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
      </div>

      <div className="relative flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Welcome Content */}
          <div className="hidden lg:block space-y-8">
            <ScrollAnimatedSection animation="fade-right" delay={0}>
              <div className="text-center lg:text-left">
                <Link to="/" className="inline-flex items-center space-x-3 group mb-8">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-3 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <BookOpen className="h-8 w-8 text-white group-hover:animate-pulse" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    NoolNest
                  </span>
                </Link>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Welcome back to
                  <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    free learning!
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Continue your journey with 500+ completely free courses. 
                  No subscriptions, no hidden costs - just quality education for everyone.
                </p>
              </div>
            </ScrollAnimatedSection>

            {/* Feature Highlights */}
            <ScrollAnimatedSection animation="fade-right" delay={200}>
              <div className="space-y-4">
                {[
                  { icon: Heart, text: "500+ courses completely free", color: "text-red-500" },
                  { icon: Award, text: "Free certificates upon completion", color: "text-yellow-500" },
                  { icon: Users, text: "Join 2M+ happy learners", color: "text-blue-500" },
                  { icon: Sparkles, text: "No ads, no subscriptions, ever", color: "text-purple-500" }
                ].map((feature, index) => (
                  <ScrollAnimatedSection key={index} animation="fade-left" delay={300 + index * 100}>
                    <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                      <div className="bg-white p-2 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        <feature.icon className={`h-5 w-5 ${feature.color} group-hover:animate-pulse`} />
                      </div>
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  </ScrollAnimatedSection>
                ))}
              </div>
            </ScrollAnimatedSection>

            {/* Success Stats */}
            <ScrollAnimatedSection animation="scale" delay={600}>
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "500+", label: "Free Courses" },
                    { value: "2M+", label: "Students" },
                    { value: "4.9", label: "Rating", icon: Star }
                  ].map((stat, index) => (
                    <div key={index} className="group hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl font-bold flex items-center justify-center space-x-1">
                        <span className="animate-count-up">{stat.value}</span>
                        {stat.icon && <stat.icon className="h-5 w-5 text-yellow-300 fill-current animate-pulse" />}
                      </div>
                      <div className="text-emerald-100 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <ScrollAnimatedSection animation="fade-left" delay={0}>
              {/* Mobile Header */}
              <div className="lg:hidden text-center mb-8">
                <Link to="/" className="inline-flex items-center space-x-2 group mb-6">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-3 rounded-xl group-hover:scale-105 transition-transform">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    NoolNest
                  </span>
                </Link>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
                <p className="text-gray-600">Sign in to continue your free learning journey</p>
              </div>

              {/* Form Container */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
                <div className="hidden lg:block text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
                  <p className="text-gray-600">Sign in to access your free courses</p>
                </div>

                {/* Free Access Badge */}
                <ScrollAnimatedSection animation="scale" delay={200}>
                  <div className="bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 rounded-2xl p-4 mb-6 text-center hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-center space-x-2 text-emerald-700 mb-2">
                      <Heart className="h-5 w-5 animate-heartbeat" />
                      <span className="font-semibold">Free Access to 500+ Courses</span>
                    </div>
                    <p className="text-emerald-600 text-sm">No payment required • No subscriptions • Forever free</p>
                  </div>
                </ScrollAnimatedSection>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <ScrollAnimatedSection animation="fade-up" delay={300}>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email address
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:shadow-md bg-white/50 backdrop-blur-sm"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </ScrollAnimatedSection>

                  <ScrollAnimatedSection animation="fade-up" delay={400}>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300" />
                        </div>
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          autoComplete="current-password"
                          required
                          value={formData.password}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-12 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:shadow-md bg-white/50 backdrop-blur-sm"
                          placeholder="Enter your password"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center hover:scale-110 transition-transform duration-300"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>
                  </ScrollAnimatedSection>

                  <ScrollAnimatedSection animation="fade-up" delay={500}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="rememberMe"
                          name="rememberMe"
                          type="checkbox"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                          className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded transition-colors duration-300"
                        />
                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm">
                        <a href="#" className="font-medium text-emerald-600 hover:text-emerald-500 transition-colors duration-300 hover:scale-105 inline-block">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                  </ScrollAnimatedSection>

                  <ScrollAnimatedSection animation="scale" delay={600}>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        {isLoading ? (
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        ) : (
                          <ArrowRight className="h-5 w-5 text-emerald-300 group-hover:text-emerald-200 group-hover:translate-x-1 transition-all duration-300" />
                        )}
                      </span>
                      {isLoading ? 'Signing in...' : 'Sign in to start learning free'}
                    </button>
                  </ScrollAnimatedSection>
                </form>

                <ScrollAnimatedSection animation="fade-up" delay={700}>
                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">New to NoolNest?</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link
                        to="/signup"
                        className="w-full flex justify-center py-4 px-4 border-2 border-emerald-600 text-sm font-medium rounded-xl text-emerald-600 bg-white hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                      >
                        <span className="flex items-center space-x-2">
                          <span>Create free account</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </ScrollAnimatedSection>
              </div>
            </ScrollAnimatedSection>

            {/* Trust Indicators */}
            <ScrollAnimatedSection animation="fade-up" delay={800}>
              <div className="mt-8 text-center">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Heart className="h-6 w-6 animate-heartbeat" />
                    <h3 className="text-lg font-semibold">Our Free Promise</h3>
                  </div>
                  <p className="text-emerald-100 text-sm leading-relaxed">
                    Join millions of learners who trust NoolNest for completely free, 
                    high-quality education. No credit card required, no hidden fees, 
                    no subscriptions - just pure learning.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-emerald-400">
                    {[
                      { icon: CheckCircle, text: "No Ads" },
                      { icon: CheckCircle, text: "No Fees" },
                      { icon: CheckCircle, text: "No Limits" }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center space-y-1 group hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-4 w-4 text-emerald-300 group-hover:animate-pulse" />
                        <span className="text-xs text-emerald-200">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;