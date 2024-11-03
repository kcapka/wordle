// Debounce function with TypeScript annotations
export function debounce(
    func: (...args: any[]) => void,
    wait: number,
  ): (...args: any[]) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout!);
        func(...args);
      };
      clearTimeout(timeout!);
      timeout = setTimeout(later, wait);
    };
  }
  
  // Example usage:
  // const debouncedHandleScroll = debounce(handleScroll, 10);