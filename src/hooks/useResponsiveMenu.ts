import { useEffect, useState } from 'react';
import { useMediaQuery } from './useMediaQuery';

export function useResponsiveMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  useEffect(() => {
    if (isDesktop) {
      setIsMobileMenuOpen(false);
    }
  }, [isDesktop]);

  return {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isDesktop,
  };
}
