import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, BookOpen, Heart, ArrowRight, CheckCircle, Star, Users, Award, Sparkles, Shield, Zap } from 'lucide-react';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    interests: [] as string[]
  });

  const interests = [
    'Programming', 'Data Science', 'Design', 'Business', 'Marketing', 
    'Cybersecurity', 'Cloud Computing', 'Mobile Development'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    console.log('Signup attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const toggleInterest = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter(i => i !== interest)
        : [...formData.interests, interest]
    });
  };

  const passwordStrength = () => {
    const password = formData.password;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const getStrengthColor = () => {
    const strength = passwordStrength();
    if (strength <= 2) return 'bg-red-500';
    if (strength <= 3) return 'bg-yellow-500';
    if (strength <= 4) return 'bg-blue-500';
    return 'bg-green-500';
  };

  const getStrengthText = () => {
    const strength = passwordStrength();
    if (strength <= 2) return 'Weak';
    if (strength <= 3) return 'Fair';
    if (strength <= 4) return 'Good';
    return 'Strong';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200 rounded-full blur-3xl opacity-30 animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-300 rounded-full blur-2xl opacity-20 animate-bounce-gentle"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-teal-300 rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-emerald-100 rounded-full blur-2xl opacity-25 animate-float delay-500"></div>
      </div>

      <div className="relative flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          
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
                  Start your
                  <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    free learning journey
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Join over 2 million learners who are mastering new skills with our 
                  500+ completely free courses. No credit card required, no hidden costs.
                </p>
              </div>
            </ScrollAnimatedSection>

            {/* Enhanced Feature Highlights */}
            <ScrollAnimatedSection animation="fade-right" delay={200}>
              <div className="space-y-4">
                {[
                  { icon: Heart, text: "500+ courses completely free forever", color: "text-red-500", bg: "bg-red-50" },
                  { icon: Award, text: "Free certificates for all completions", color: "text-yellow-500", bg: "bg-yellow-50" },
                  { icon: Users, text: "Join 2M+ successful learners", color: "text-blue-500", bg: "bg-blue-50" },
                  { icon: Shield, text: "No spam, no ads, no subscriptions", color: "text-green-500", bg: "bg-green-50" },
                  { icon: Zap, text: "Start learning immediately", color: "text-purple-500", bg: "bg-purple-50" }
                ].map((feature, index) => (
                  <ScrollAnimatedSection key={index} animation="fade-left" delay={300 + index * 100}>
                    <div className="flex items-center space-x-4 group hover:scale-105 transition-all duration-300 p-3 rounded-xl hover:bg-white/50">
                      <div className={`${feature.bg} p-3 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                        <feature.icon className={`h-6 w-6 ${feature.color} group-hover:animate-pulse`} />
                      </div>
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  </ScrollAnimatedSection>
                ))}
              </div>
            </ScrollAnimatedSection>

            {/* Success Stories */}
            <ScrollAnimatedSection animation="scale" delay={600}>
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                  <Sparkles className="h-6 w-6 animate-pulse" />
                  <span>Join Our Success Stories</span>
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {[
                    { value: "500+", label: "Free Courses" },
                    { value: "2M+", label: "Students" },
                    { value: "4.9", label: "Rating", icon: Star },
                    { value: "95%", label: "Success Rate" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl font-bold flex items-center justify-center space-x-1">
                        <span className="animate-count-up">{stat.value}</span>
                        {stat.icon && <stat.icon className="h-5 w-5 text-yellow-300 fill-current animate-pulse" />}
                      </div>
                      <div className="text-emerald-100 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-emerald-100 text-sm text-center">
                  "I learned Python and got my dream job - all for free!" - Sarah K.
                </p>
              </div>
            </ScrollAnimatedSection>
          </div>

          {/* Right Side - Signup Form */}
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
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Join NoolNest for Free</h2>
                <p className="text-gray-600">Start learning with 500+ free courses</p>
              </div>

              {/* Form Container */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
                <div className="hidden lg:block text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Join NoolNest for Free</h2>
                  <p className="text-gray-600">Start your learning journey today</p>
                </div>

                {/* Progress Indicator */}
                <ScrollAnimatedSection animation="scale" delay={100}>
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                        currentStep >= 1 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        1
                      </div>
                      <div className={`w-16 h-1 rounded transition-all duration-300 ${
                        currentStep >= 2 ? 'bg-emerald-600' : 'bg-gray-200'
                      }`}></div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                        currentStep >= 2 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        2
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-600">
                      Step {currentStep} of 2: {currentStep === 1 ? 'Account Details' : 'Your Interests'}
                    </p>
                  </div>
                </ScrollAnimatedSection>

                {/* Free Access Badge */}
                <ScrollAnimatedSection animation="scale" delay={200}>
                  <div className="bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 rounded-2xl p-4 mb-6 text-center hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-center space-x-2 text-emerald-700 mb-2">
                      <Heart className="h-5 w-5 animate-heartbeat" />
                      <span className="font-semibold">Forever Free • No Credit Card Required</span>
                    </div>
                    <p className="text-emerald-600 text-sm">Join 2M+ learners • 500+ courses • Free certificates</p>
                  </div>
                </ScrollAnimatedSection>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {currentStep === 1 ? (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <ScrollAnimatedSection animation="fade-up" delay={300}>
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                              First name
                            </label>
                            <div className="relative group">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300" />
                              </div>
                              <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                required
                                value={formData.firstName}
                                onChange={handleChange}
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:shadow-md bg-white/50 backdrop-blur-sm"
                                placeholder="First name"
                              />
                            </div>
                          </div>
                        </ScrollAnimatedSection>

                        <ScrollAnimatedSection animation="fade-up" delay={350}>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                              Last name
                            </label>
                            <input
                              id="lastName"
                              name="lastName"
                              type="text"
                              required
                              value={formData.lastName}
                              onChange={handleChange}
                              className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:shadow-md bg-white/50 backdrop-blur-sm"
                              placeholder="Last name"
                            />
                          </div>
                        </ScrollAnimatedSection>
                      </div>

                      <ScrollAnimatedSection animation="fade-up" delay={400}>
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
                              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:shadow-md bg-white/50 backdrop-blur-sm"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>
                      </ScrollAnimatedSection>

                      <ScrollAnimatedSection animation="fade-up" delay={450}>
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
                              autoComplete="new-password"
                              required
                              value={formData.password}
                              onChange={handleChange}
                              className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:shadow-md bg-white/50 backdrop-blur-sm"
                              placeholder="Create a password"
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
                          {formData.password && (
                            <div className="mt-2">
                              <div className="flex items-center space-x-2">
                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                  <div 
                                    className={`h-2 rounded-full transition-all duration-300 ${getStrengthColor()}`}
                                    style={{ width: `${(passwordStrength() / 5) * 100}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-600">{getStrengthText()}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </ScrollAnimatedSection>

                      <ScrollAnimatedSection animation="fade-up" delay={500}>
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm password
                          </label>
                          <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Lock className="h-5 w-5 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300" />
                            </div>
                            <input
                              id="confirmPassword"
                              name="confirmPassword"
                              type={showConfirmPassword ? 'text' : 'password'}
                              autoComplete="new-password"
                              required
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:shadow-md bg-white/50 backdrop-blur-sm"
                              placeholder="Confirm your password"
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-0 pr-3 flex items-center hover:scale-110 transition-transform duration-300"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                              ) : (
                                <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                              )}
                            </button>
                          </div>
                          {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                            <p className="mt-1 text-sm text-red-600">Passwords do not match</p>
                          )}
                        </div>
                      </ScrollAnimatedSection>

                      <ScrollAnimatedSection animation="fade-up" delay={550}>
                        <div className="flex items-center">
                          <input
                            id="agreeToTerms"
                            name="agreeToTerms"
                            type="checkbox"
                            required
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded transition-colors duration-300"
                          />
                          <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
                            I agree to the{' '}
                            <a href="#" className="text-emerald-600 hover:text-emerald-500 font-medium">
                              Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-emerald-600 hover:text-emerald-500 font-medium">
                              Privacy Policy
                            </a>
                          </label>
                        </div>
                      </ScrollAnimatedSection>
                    </>
                  ) : (
                    <ScrollAnimatedSection animation="fade-up" delay={300}>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                          What would you like to learn? (Optional)
                        </h3>
                        <p className="text-sm text-gray-600 mb-6 text-center">
                          Help us personalize your learning experience
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {interests.map((interest, index) => (
                            <ScrollAnimatedSection key={interest} animation="scale" delay={350 + index * 50}>
                              <button
                                type="button"
                                onClick={() => toggleInterest(interest)}
                                className={`p-3 rounded-xl border-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                                  formData.interests.includes(interest)
                                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                                    : 'border-gray-200 bg-white text-gray-700 hover:border-emerald-300'
                                }`}
                              >
                                {interest}
                              </button>
                            </ScrollAnimatedSection>
                          ))}
                        </div>
                      </div>
                    </ScrollAnimatedSection>
                  )}

                  <ScrollAnimatedSection animation="scale" delay={600}>
                    <div className="flex space-x-4">
                      {currentStep === 2 && (
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="flex-1 py-4 px-4 border-2 border-gray-300 text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 hover:scale-105"
                        >
                          Back
                        </button>
                      )}
                      <button
                        type="submit"
                        disabled={isLoading || (currentStep === 1 && (!formData.agreeToTerms || formData.password !== formData.confirmPassword))}
                        className="group relative flex-1 flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                          {isLoading ? (
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          ) : (
                            <ArrowRight className="h-5 w-5 text-emerald-300 group-hover:text-emerald-200 group-hover:translate-x-1 transition-all duration-300" />
                          )}
                        </span>
                        {isLoading ? 'Creating account...' : currentStep === 1 ? 'Continue' : 'Create free account'}
                      </button>
                    </div>
                  </ScrollAnimatedSection>
                </form>

                <ScrollAnimatedSection animation="fade-up" delay={700}>
                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Already have an account?</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link
                        to="/login"
                        className="w-full flex justify-center py-4 px-4 border-2 border-emerald-600 text-sm font-medium rounded-xl text-emerald-600 bg-white hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                      >
                        <span className="flex items-center space-x-2">
                          <span>Sign in instead</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </ScrollAnimatedSection>
              </div>
            </ScrollAnimatedSection>

            {/* Enhanced Benefits */}
            <ScrollAnimatedSection animation="fade-up" delay={800}>
              <div className="mt-8">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Heart className="h-6 w-6 animate-heartbeat" />
                    <h3 className="text-lg font-semibold">What you get for free:</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-emerald-100">
                    {[
                      { icon: CheckCircle, text: "500+ courses" },
                      { icon: CheckCircle, text: "Free certificates" },
                      { icon: CheckCircle, text: "Community support" },
                      { icon: CheckCircle, text: "No ads or spam" },
                      { icon: CheckCircle, text: "Mobile access" },
                      { icon: CheckCircle, text: "Lifetime access" }
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2 group hover:scale-105 transition-transform duration-300">
                        <benefit.icon className="h-4 w-4 text-emerald-300 group-hover:animate-pulse flex-shrink-0" />
                        <span className="text-sm">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-emerald-400 text-center">
                    <p className="text-emerald-100 text-sm">
                      <strong>100% Free Promise:</strong> No hidden fees, no subscriptions, no credit card required.
                    </p>
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

export default SignupPage;