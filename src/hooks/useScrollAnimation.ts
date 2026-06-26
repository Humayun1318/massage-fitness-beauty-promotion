// import { useEffect, useState } from 'react';

// export function useScrollAnimation() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setIsVisible(window.scrollY > 80);
//     };

//     onScroll();
//     window.addEventListener('scroll', onScroll);

//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   return isVisible;
// }
import { useEffect, useState } from 'react';

export function useScrollAnimation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return isScrolled;
}
