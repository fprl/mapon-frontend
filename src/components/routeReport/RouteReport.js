import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Title, Button } from '../styled/lib'
import RouteSearch from '../forms/RouteSearch'
import RouteInfo from '../routeInfo/RouteInfo'

const RouteReport = () => {
  return (
    <Container>
      <Title>Route report</Title>
      <RouteSearch />
      <RouteInfo />
      <Wrapper>
        <Button type="submit" form="route-search">GENERATE</Button>
      </Wrapper>
    </Container>
  )
}

export default RouteReport

const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 40rem;
  gap: 2rem;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08), 0px 2px 14px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 1rem 1.5rem;

  background-color: var(--color-bg-gray);
`
