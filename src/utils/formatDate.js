/**
 * Format an ISO date string to a human-readable date.
 * @param {string} dateStr - ISO date string e.g. "2024-03-15"
 * @param {object} options - Intl.DateTimeFormat options
 */
export function formatDate(dateStr, options = {}) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  })
}
