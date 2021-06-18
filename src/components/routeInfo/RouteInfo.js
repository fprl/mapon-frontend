import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import parseISO from 'date-fns/parseISO'
import differenceInSeconds from 'date-fns/differenceInSeconds'

import { Flex } from '../styled/lib'
import Map from '../map/Map'
import { metersToKm, drivenTime } from './utilities/utilities'

const RouteInfo = ({ vehicleRoute }) => {
  const [isAValidRoute, setIsAValidRoute] = useState(false)
  const [routeInfo, setRouteInfo] = useState({})
  const [markers, setMarkers] = useState({
    start: { lat: null, lng: null },
    end: { lat: null, lng: null },
  })
  const [paths, setPaths] = useState([])

  useEffect(() => {
    if (!vehicleRoute) return

    const routes = vehicleRoute.data.units[0].routes.filter(
      route => route.type === 'route'
    )

    if (routes.length === 0 || !routes[0].decoded_route) {
      setIsAValidRoute(false)
      return
    }

    // work with the first route because of UI
    const firstRoute = routes[0]
    const newPaths = firstRoute.decoded_route.points
    const newMarkers = {
      start: { lat: firstRoute.start.lat, lng: firstRoute.start.lng },
      end: { lat: firstRoute.end.lat, lng: firstRoute.end.lng },
    }
    const drivedSecs = differenceInSeconds(
      parseISO(firstRoute.end.time),
      parseISO(firstRoute.start.time)
    )

    const newRouteInfo = {
      distanceDriven: metersToKm(firstRoute.distance),
      timeDriven: drivenTime(drivedSecs),
      averageSpeed: firstRoute.avg_speed,
    }

    setIsAValidRoute(true)
    setRouteInfo(prevRouteInfo => {
      return { ...prevRouteInfo, ...newRouteInfo }
    })
    setMarkers(prevMarkers => {
      return { ...prevMarkers, ...newMarkers }
    })
    setPaths(prevPaths => {
      return [...newPaths]
    })
  }, [vehicleRoute])


  if (!isAValidRoute && !vehicleRoute) {
    return null
  }

  if (!isAValidRoute) {
    return (
      <Container>
        <InvalidRoute>Please provide another route date.</InvalidRoute>
      </Container>
    )
  }

  return (
    <Container>
      <Map vehicleRoute={vehicleRoute} paths={paths} markers={markers} />
      <DataContainer dir="column">
        <DataWrapper dir="column">
          <DataText>{routeInfo.distanceDriven}</DataText>
          <DataLegend>Km driven</DataLegend>
        </DataWrapper>
        <Divider />
        <DataWrapper dir="column">
          <DataText>{routeInfo.timeDriven}</DataText>
          <DataLegend>Driving Time</DataLegend>
        </DataWrapper>
        <Divider />
        <DataWrapper dir="column">
          <DataText>{routeInfo.averageSpeed}</DataText>
          <DataLegend>Avg speed</DataLegend>
        </DataWrapper>
      </DataContainer>
    </Container>
  )
}

export default RouteInfo

const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 1.5rem;
`

const DataContainer = styled(Flex)`
  justify-content: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;

    gap: 0;
    padding: 1.5rem 5.6rem;
  }
`

const DataWrapper = styled(Flex)`
  align-items: center;

  @media (min-width: 768px) {
    flex-basis: 8.75rem;
  }
`

const Divider = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 1px;
    height: auto;
    border-left: 1px solid #dbdbdb;
  }
`

const DataText = styled.span`
  font-size: var(--text-3xl);
  line-height: 1.2;
`

const DataLegend = styled.p`
  font-size: var(--text-xs);
  line-height: 1.4;
  color: var(--color-text-details);
`

const InvalidRoute = styled(DataLegend)`
  font-size: var(--text-base);
  align-self: center;

  padding: 0.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: var(--text-lg);
    padding: 0;
  }

  @media (min-width: 1024px) {
    font-size: var(--text-2xl);
  }
`
