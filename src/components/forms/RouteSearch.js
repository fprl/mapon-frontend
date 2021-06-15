import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Input, Select, Option, Label } from './elements'
import { Grid, Flex } from '../styled/lib'

const RouteSearch = () => {
  return (
    <Form>
      <Vehicule>
        <Label htmlFor="vehicle" required>
          Vehicle number
        </Label>
        <Select name="vehicle" id="vehicle" value="Select vehicle">
          <Option disabled hidden>Select vehicle</Option>
          <Option value="je" children="je" />
          <Option value="jo" children="jo" />
          <Option value="ji" children="ji" />
        </Select>
      </Vehicule>

      <Period as="fieldset">
        <Flex basis={25}>
          <Label as="legend">Period</Label>
        </Flex>

        <Flex basis={75} gap={1}>
          <Flex dir="column">
            <Label htmlFor="from">From</Label>
            <Input id="from" name="from" type="date" />
          </Flex>

          <Flex dir="column">
            <Label htmlFor="to">To</Label>
            <Input id="to" name="to" type="date" />
          </Flex>
        </Flex>
      </Period>
    </Form>
  )
}

export default RouteSearch

const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 2rem;

  padding: 0 1.5rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`

const Vehicule = styled(Grid)`
  grid-template-rows: 1fr 1fr;
  row-gap: 0.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    row-gap: 0rem;
  }

  @media (min-width: 1024px) {
  }
`

const Period = styled(Flex)`
  flex-direction: column;
  gap: 0.5rem;

@media (min-width: 768px) {
  flex-direction: row;
  gap: 0;
}
`
