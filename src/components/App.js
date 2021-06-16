import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'

import Logo from './logo/Logo'
import RouteReport from './routeReport/RouteReport'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Logo />
        <RouteReport />
      </Container>
    </QueryClientProvider>
  )
}

export default App

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.6rem 2rem;

  gap: 1.6rem;
  min-height: 100vh;

  @media (min-width: 768px) {
    padding-inline: 6rem;
  }

  @media (min-width: 1024px) {
    padding-inline: 9.5rem;
  }
`
