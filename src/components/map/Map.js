import React, { useCallback, useEffect, useState } from 'react'
import { GoogleMap, Marker, Polyline, useJsApiLoader } from '@react-google-maps/api'

import { mapOptions, polylineOptions, markerOptions } from './options/options'

const Map = ({ paths, markers }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  })
  const [map, setMap] = useState(null)

  useEffect(() => {
    // center map on change
    if (!map) return
    const bounds = new window.google.maps.LatLngBounds()
    for (var i = 0; i < paths.length; i++) {
      bounds.extend(paths[i])
    }
    map.fitBounds(bounds)
  })

  const onLoad = useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

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
      <Polyline path={paths} options={{ ...polylineOptions, paths: paths}} />
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(Map)
