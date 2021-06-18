import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  GoogleMap,
  Marker,
  Polyline,
  useJsApiLoader,
} from '@react-google-maps/api'
import ClipLoader from 'react-spinners/ClipLoader'

import { mapOptions, polylineOptions, markerOptions } from './options/options'

const Map = ({ paths, markers }) => {
  const [showSpinner, setShowSpinner] = useState(true)
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  })
  const [map, setMap] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(false), 750)
    return () => clearTimeout(timer)
  }, [])

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


  if (showSpinner) {
    return (
      <ClipContainer>
        <ClipLoader color={'#98CA02'} size={50} />
      </ClipContainer>
    )
  }

  return (
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
      <Polyline path={paths} options={{ ...polylineOptions, paths: paths }} />
    </GoogleMap>
  )
}

export default React.memo(Map)

const ClipContainer = styled.div`
  display: flex;
  height: 200px;
  align-items: center;
  align-self: center;
`
