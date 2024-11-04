import {useState, useEffect} from 'react';
import {debounce} from '~/utils/debounce';

export const useScrollPosition = (): number => {
  // Initialize state with current scroll position if window is available, or 0 if not
  const [scrollY, setScrollY] = useState<number>(
    typeof window !== 'undefined' ? window.scrollY : 0,
  );

  useEffect(() => {
    // Return early if running on the server where window is not defined
    if (typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Use debounce to limit the rate at which handleScroll is invoked
    const debouncedHandleScroll = debounce(handleScroll, 10);

    window.addEventListener('scroll', debouncedHandleScroll);

    // Immediately update the scroll position upon component mount
    // This is crucial for cases where the user isn't at the top of the page
    handleScroll(); // Invoke handleScroll to set initial scroll position

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, []);

  return scrollY;
};