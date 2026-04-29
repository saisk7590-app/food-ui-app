/**
 * Format price to currency string
 * @param {number} price - Price value
 * @param {string} currency - Currency symbol (default: $)
 * @returns {string} Formatted price
 */
export const formatPrice = (price, currency = '$') => {
  return `${currency}${price.toFixed(2)}`;
};

/**
 * Calculate total with tax
 * @param {number} subtotal - Subtotal amount
 * @param {number} taxRate - Tax rate as decimal (e.g., 0.1 for 10%)
 * @returns {number} Total with tax
 */
export const calculateTotalWithTax = (subtotal, taxRate = 0.1) => {
  return subtotal * (1 + taxRate);
};

/**
 * Debounce function for search/input
 * @param {function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {function} Debounced function
 */
export const debounce = (func, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Truncate string to specified length
 * @param {string} str - String to truncate
 * @param {number} length - Max length
 * @returns {string} Truncated string
 */
export const truncateString = (str, length = 50) => {
  if (str.length > length) {
    return str.substring(0, length) + '...';
  }
  return str;
};

export default {
  formatPrice,
  calculateTotalWithTax,
  debounce,
  isValidEmail,
  truncateString,
};
