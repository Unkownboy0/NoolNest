import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'slide-up' | 'slide-down';
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  className = ''
}) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} ease-out`;
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'fade-down':
          return `${baseClasses} opacity-0 -translate-y-8`;
        case 'fade-left':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'fade-right':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'scale':
          return `${baseClasses} opacity-0 scale-95`;
        case 'slide-up':
          return `${baseClasses} translate-y-full`;
        case 'slide-down':
          return `${baseClasses} -translate-y-full`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;