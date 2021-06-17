import React, { useCallback, useEffect, useRef, useState } from 'react'
import { GoogleMap, Marker, Polyline, useJsApiLoader } from '@react-google-maps/api'

import { mapOptions, polylineOptions, markerOptions } from './options/options'

const Map = ({ vehicleRoute }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  })

  const [map, setMap] = useState(null)
  const [markers, setMarkers] = useState({
    start: {lat: null, lng: null},
    end: {lat: null, lng: null}
  })
  const [paths, setPaths] = useState([])

  useEffect(() => {
    // center map
    if (!map) return
    const bounds = new window.google.maps.LatLngBounds()
    for (var i = 0; i < paths.length; i++) {
      bounds.extend(paths[i])
    }
    map.fitBounds(bounds)
  })

  useEffect(() => {
    if (!vehicleRoute) return

    const routes = vehicleRoute.data.units[0].routes.filter(
      route => route.type === 'route'
    )
    const firstRoute = routes[0]
    const newPaths = firstRoute.decoded_route.points
    const newMarkers = {
      start: { lat: firstRoute.start.lat, lng: firstRoute.start.lng },
      end: { lat: firstRoute.end.lat, lng: firstRoute.end.lng },
    }

    setMarkers(prevMarkers => {
      return { ...prevMarkers, ...newMarkers}
    })
    setPaths(prevPaths => {
      return [...newPaths]
    })
  }, [vehicleRoute])

  const onLoad = useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  if (!vehicleRoute) {
    return null
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: 'auto', height: '200px' }}
      center={{ lat: 0, lng: 0 }}
      zoom={10}
      options={mapOptions}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={markers.start} options={markerOptions} />
      <Marker position={markers.end} options={markerOptions} />
      <Polyline id="asdasdasd" path={paths} options={{ ...polylineOptions, paths: paths}} />
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(Map)
