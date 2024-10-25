import { useRef, useEffect } from 'react';
export const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
  
    useEffect(() => {
      const { current } = element;
      if (current) {
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        const timeout = setTimeout(() => {
          current.style.opacity = 1;
        }, delay * 1000);
        return () => clearTimeout(timeout); 
      }
    }, [duration, delay]);
  
    return { ref: element, style: { opacity: 0 } }; 
  };