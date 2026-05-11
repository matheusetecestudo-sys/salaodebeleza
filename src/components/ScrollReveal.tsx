import React, { useEffect, useRef, ReactNode, forwardRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(({ 
  children, 
  className = '', 
  stagger = false,
  delay = 0,
  direction = 'up'
}, forwardedRef) => {
  const internalRef = useRef<HTMLDivElement>(null);

  const setRefs = (node: HTMLDivElement | null) => {
    internalRef.current = node;
    if (typeof forwardedRef === 'function') {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay * 1000);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = internalRef.current?.querySelectorAll('.animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={setRefs} className={`${stagger ? 'stagger-container' : ''} ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            className: `${child.props.className || ''} reveal-${direction}`.trim()
          });
        }
        return child;
      })}
    </div>
  );
});

export default ScrollReveal;
