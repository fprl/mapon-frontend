import React, { useState, useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import styled from 'styled-components'

import DatePicker from 'react-datepicker'
import { Select, Option, Label, DatePickerStyles } from './elements'
import { Grid, Flex } from '../styled/lib'

import { maponApi } from '../../services/maponApi'

const RouteSearch = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('Select vehicle')
  const [fromDate, setFromDate] = useState(new Date())
  const [toDate, setToDate] = useState(new Date())

  const { data: vehicles, status } = useQuery('vehicles', maponApi.getVehicles)

  async function handleSubmit(e) {
    e.preventDefault()
    if (selectedVehicle === 'Select vehicle') {
      return
    }

    const unitId = vehicles.data.units.filter(
      vehicle => vehicle.number === selectedVehicle
    )[0].unit_id
    const fromDateUTC = fromDate.toISOString().slice(0, 10) + 'T00:00:00Z' // "YYYY-MM-DDT04:00:00.000Z"
    const toDateUTC = toDate.toISOString().slice(0, 10) + 'T23:59:59Z'
    const searchQuery = { unitId, fromDateUTC, toDateUTC }

    // call Mapon API
    const vehicleRoute = await maponApi.getVehicleRoute(searchQuery)
    vehicleRoute && console.log(vehicleRoute.data.units)
  }

  return (
    <Form id="route-search" onSubmit={handleSubmit}>
      <Vehicule>
        <Label htmlFor="vehicle" required>
          Vehicle number
        </Label>
        <Select name="vehicle" id="vehicle" value={selectedVehicle} onChange={e => setSelectedVehicle(e.target.value)}>
          {status === 'success' 
            ? vehicles.data.units.map(vehicle => (
            <Option key={vehicle.number} value={vehicle.number}>
              {vehicle.number}
            </Option>))
            : null
          }
          <Option disabled hidden>Select vehicle</Option>
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
                dateFormat="dd/MM/yyyy"
                showPopperArrow={false}
                calendarStartDay={1}
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
              dateFormat="dd/MM/yyyy"
              showPopperArrow={false}
              calendarStartDay={1}
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
