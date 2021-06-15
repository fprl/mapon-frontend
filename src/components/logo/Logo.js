import React from 'react'
import styled from 'styled-components'

import logo from '../../assets/mapon-logo.png'

const Logo = () => {
  return <Img src={logo} alt="Mapon logo" />
}

export default Logo

const Img = styled.img`
  width: 156px;
  height: 56px;
`
