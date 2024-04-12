const handleThrottle = <T extends any[]>(
  func: (...args: T) => void,
  timeDelay: number
) => {
  let lastCall = 0;
  return function (...args: T) {
    const now = new Date().getTime();
    if (now - lastCall >= timeDelay) {
      func(...args);
      lastCall = now;
    }
  };
};

/* const handleDebounce = <T extends any[]>(
  func: (...args: T) => void,
  timeDelay: number
) => {
  return function (...args: T) {
    setTimeout(() => {
      func(...args);
    }, timeDelay);
  };
}; */

export { handleThrottle };
