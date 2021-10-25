// just debounce
export function Debounce(fn, ms) {
  let timeOut;
  return (...args) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      fn(...args);
    }, ms);
  };
}
