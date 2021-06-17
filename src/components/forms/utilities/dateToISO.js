export function dateToISO(date, type) {
  const toOrFrom = type === 'from' ? 'T00:00:00Z' : 'T23:59:59Z'
  const dateISO = date.toISOString().slice(0, 10) + toOrFrom  // "YYYY-MM-DD > deleted T04:00:00.000Z"
  return dateISO
}
