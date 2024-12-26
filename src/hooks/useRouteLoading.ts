import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useRouteLoading() {
  const [isRouteLoading, setIsRouteLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsRouteLoading(true);
    const timer = setTimeout(() => {
      setIsRouteLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return isRouteLoading;
}