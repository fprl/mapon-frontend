import axios from 'axios'
const BASE_URL = process.env.REACT_APP_MAPON_URL
const API_KEY = process.env.REACT_APP_MAPON_API_KEY

async function getVehicles() {
  const res = await axios.get(`${BASE_URL}/unit/list.json?key=${API_KEY}`)
  return res.data
}

async function getVehicleRoute(query) {
  const { unitId, fromDateUTC, toDateUTC } = query

  // const res = await axios.get(`${BASE_URL}/route/list.json?key=${API_KEY}&unit_id=${unitId}&from=${fromDateUTC}&till=${toDateUTC}`)
  // const res = await axios.get(`${BASE_URL}/route/list.json?key=${API_KEY}&unit_id=${unitId}&from=${fromDateUTC}&till=${toDateUTC}&include[]=decoded_route`)
  const res = await axios.get(`${BASE_URL}/route/list.json?key=${API_KEY}&unit_id=${unitId}&from=${fromDateUTC}&till=${toDateUTC}&include=polyline`)
  return res.data
}

export const maponApi = { getVehicles, getVehicleRoute }
