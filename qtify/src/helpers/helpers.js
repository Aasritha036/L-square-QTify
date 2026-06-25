export const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

// ✅ ADD THIS FUNCTION
export const truncate = (str, n) => {
  if (!str) return "";
  return str.length > n ? str.slice(0, n) + "..." : str;
};