import { createGlobalStyle } from 'styled-components'

import MuseoSans500 from '../fonts/MuseoSans_500.otf'
import MuseoSans500Italic from '../fonts/MuseoSans_500_Italic.otf'
import MuseoSans700 from '../fonts/MuseoSans_700.otf'

const Fonts = createGlobalStyle`

/* museosans-regular */
@font-face {
  font-family: 'MuseoSans';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url(${MuseoSans500}) format('opentype'); /* Chrome 26+, Opera 23+, Firefox 39+ */
}

/* museosans-500-italic */
@font-face {
  font-family: 'MuseoSans';
  font-style: italic;
  font-weight: 500;
  src: local(''),
       url(${MuseoSans500Italic}) format('opentype'); /* Chrome 26+, Opera 23+, Firefox 39+ */
}

/* museosans-700-bold */
@font-face {
  font-family: 'MuseoSans';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url(${MuseoSans700}) format('opentype'); /* Chrome 26+, Opera 23+, Firefox 39+ */
}
`

export default Fonts
