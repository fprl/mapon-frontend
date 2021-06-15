import styled from 'styled-components'

const Label = styled.label`
  font-size: var(--text-xs);
  line-height: 1.4;
  width: 100%;
  
  ${p => p.required ? `
    ::after {
      content: "*";
      color: red;
  ` : null}
`

export default Label
