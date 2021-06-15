import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import RouteForm from '../forms/RouteForm'
import Button from '../button/Button'

const RouteReport = () => {
  return (
    <Container>
      <Title>Route report</Title>
      <RouteForm />
      <Wrapper>
        <Button>GENERATE</Button>
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

const Title = styled.h1`
  font-size: var(--text-2xl);
  font-weight: 400;
  line-height: 1.2;

  padding: 2.5rem 1.6rem;
  padding-bottom: 0;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 1rem 1.5rem;

  background-color: var(--color-bg-gray);
`
