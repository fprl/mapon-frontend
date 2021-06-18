import React, { useState } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'


import { Select, Option, Label, DatePickerStyles } from './elements'
import { Grid, Flex } from '../styled/lib'

import { maponApi } from '../../services/maponApi'
import { dateToISO } from './utilities/dateToISO'

const RouteSearch = ({ setVehicleRoute }) => {
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
    const fromDateUTC = dateToISO(fromDate, 'from')
    const toDateUTC = dateToISO(toDate, 'to')
    const searchQuery = { unitId, fromDateUTC, toDateUTC }

    // call Mapon API and get vehicle route
    const vehicleRoute = await maponApi.getVehicleRoute(searchQuery)
    setVehicleRoute(prevVehicleRoute => {
      return { ...prevVehicleRoute, ...vehicleRoute }
    })
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
`

const Period = styled(Flex)`
  flex-direction: column;
  gap: 0.5rem;

@media (min-width: 768px) {
  flex-direction: row;
  gap: 0;
}
`
