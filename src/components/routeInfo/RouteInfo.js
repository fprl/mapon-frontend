import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Flex } from '../styled/lib'

const RouteInfo = () => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      {isVisible ? (
        <Container>
          <Map />
          <DataContainer dir="column">
            <DataWrapper dir="column">
              <DataText>128</DataText>
              <DataLegend>Km driven</DataLegend>
            </DataWrapper>
            <Divider />
            <DataWrapper dir="column">
              <DataText>3h 20m</DataText>
              <DataLegend>Driving Time</DataLegend>
            </DataWrapper>
            <Divider />
            <DataWrapper dir="column">
              <DataText>1h 5m</DataText>
              <DataLegend>Driving Time</DataLegend>
            </DataWrapper>
          </DataContainer>
        </Container>
      ) : null}
    </>
  )
}

export default RouteInfo

const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 1.5rem;
`

const Map = styled.div`
  height: 12.5rem;
  background-color: gray;
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
    border-left: 1px solid #DBDBDB;
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
