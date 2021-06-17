export function metersToKm(meters) {
  return parseFloat((meters / 1000).toFixed(1))
}

export function drivenTime(secondsDriven) {
  const secondsLeft = secondsDriven
  let result = ''
  const seconds = secondsLeft % 60
  const minutes = parseInt(secondsLeft / 60) % 60
  let hours = parseInt(secondsLeft / 3600)

  function addLeadingZeroes(time) {
    return time < 10 ? `0${time}` : time
  }

  result =
    hours > 0
      ? (result += `${hours}h ${addLeadingZeroes(minutes)}m`)
      : (result += `${addLeadingZeroes(minutes)}m`)

  return result
}
