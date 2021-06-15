import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${p => p.dir ? 'column' : 'row'};

  flex-basis: ${p => p.basis ? `${p.basis}%` : '100%'};
  flex-grow: ${p => p.grow};
  flex-wrap: wrap;

  gap: ${p => p.gap ? p.gap + 'rem' : null};

  @media (min-width: 768px) {
  flex-wrap: nowrap;
  }
`

export const Grid = styled.div`
  display: grid;
  min-height: 2rem;
`
