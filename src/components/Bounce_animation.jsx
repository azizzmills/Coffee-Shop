import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Waiter from './Waiter_button';

const BouncingImage = ({ pic }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  // Intersection Observer API to detect when the image is in viewport
  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when at least 50% of the image is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [imageRef]);

  // React Spring animation for the bouncing effect
  const springProps = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1, transform: 'translateX(0px) translateY(0px)' });
      await next({ transform: 'translateX(-50px) translateY(-50px)' });
      await next({ transform: 'translateX(0px) translateY(0px)' });
    },
    from: { opacity: 0, transform: 'translateX(100px) translateY(-100px)' },
  });

  return (
    <animated.div
      ref={imageRef}       
      style={{ ...springProps, fontStyle: 'italic',
       fontWeight: 600,
       fontSize: '50px'}}
    >
    {pic}
    </animated.div>

  );
};

export default BouncingImage;
