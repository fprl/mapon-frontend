import styled, { css, createGlobalStyle } from 'styled-components';
import "react-datepicker/dist/react-datepicker.css";

const DatePickerStyles = createGlobalStyle`
  .react-datepicker-wrapper input {
    width: 100%;
    border: 1px solid var(--color-border);
    border-radius: 3px;
    padding: 0.5rem;
  }
`;

export default DatePickerStyles
