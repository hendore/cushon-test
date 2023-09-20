/**
 * Given `amount` in pounds and pence, formats it into a
 * presentable GBP string.
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(amount);
}

/**
 * Given 'date' timestamp, formats a date and time that
 * can be presented.
 */
export function formatTimestamp(ts) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(ts);
}

/**
 * Returns a human readable string describing the level of
 * risk for returns.
 */
export function riskLevelText(risk) {
  switch (risk) {
    case 1:
      return "Low risk";

    case 2:
      return "Medium risk";

    case 3:
      return "High risk";
  }
}
