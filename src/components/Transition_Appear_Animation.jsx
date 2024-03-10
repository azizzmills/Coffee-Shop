import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Transition_Appear_Animation.css'
import Flatwhite from '../images/Americano.jpeg'

const ScrollAnimation = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.75 } // Adjust threshold as needed
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup observer
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  // Define the spring animation
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0%)' : 'translateX(-100%)' },
    config: { tension: 150, friction: 12 },
  });

  return (
    <div className="scroll-animation-container" ref={targetRef}>
      <animated.div style={{...animationProps, fontStyle: 'italic',
        fontWeight: 600,
        fontSize: '50px'}} className="scroll-animation-image">
        {props.children}
      </animated.div>
    </div>
  );
};

export default ScrollAnimation;
