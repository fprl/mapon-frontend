import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DatePicker from "react-datepicker"

import { Select, Option, Label, DatePickerStyles } from './elements'
import { Grid, Flex } from '../styled/lib'

const RouteSearch = () => {
  const [select, setSelect] = useState('Select vehicle')
  const [fromDate, setFromDate] = useState(new Date())
  const [toDate, setToDate] = useState(new Date())

  function handleSubmit(e) {
    e.preventDefault()
    const searchQuery = {
      select,
      fromDate,
      toDate,
    }

    console.log(searchQuery)
    // call Mapon API
    // if result call Google Maps API
  }


  return (
    <Form id="route-search" onSubmit={handleSubmit}>
      <Vehicule>
        <Label htmlFor="vehicle" required>
          Vehicle number
        </Label>
        <Select name="vehicle" id="vehicle" value={select} onChange={e => setSelect(e.target.value)}>
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
            <>
              <DatePickerStyles />
              <DatePicker
                id="from"
                name="from"
                showPopperArrow={false}
                selected={fromDate}
                onChange={date => setFromDate(date)}
              />
            </>
          </Flex>

          <Flex dir="column">
            <Label htmlFor="to">To</Label>
            <DatePicker
              id="from"
              name="from"
              showPopperArrow={false}
              selected={toDate}
              onChange={date => setToDate(date)}
            />
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

    align-items: center;
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
