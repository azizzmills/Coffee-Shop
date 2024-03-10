import React, { useRef, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import Waiter from './Waiter_button';

const ScrollImage = ({ pic }) => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const opacity = isVisible ? 1 : 0; // Set opacity based on visibility
  const translateY = isVisible ? 0 : Math.min(0, Math.max(-20, (scrollPosition - 500) / 10)); // Set translateY based on visibility

  const imageAnimation = useSpring({
    opacity: opacity,
    transform: `translateY(${translateY}px)`, // Apply translateY based on visibility
    config: { duration: 500 },
  });

  return (
    <Container className='d-flex justify-content-center align-items-center'>      
      <animated.div ref={imageRef} style={{...imageAnimation, fontStyle: 'italic',
        fontWeight: 600,
        fontSize: '280%'}} >
        {pic}
      </animated.div>
    </Container>
  );
};

export default ScrollImage;



