import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: #384045;
    --color-text-inverse: white;

    --color-bg: white;
    --color-bg-gray: #F4F4F4;

    --color-border: #DCDEE0;
    --color-shadow: hsl(6, 0%, 92%);
    --color-hover: hsl(6, 0%, 92%);
    
    --color-primary: #98CA02;
    --color-status-success: #69CC8B;
    --color-status-error: #C00000;

    --text-xs: 0.85rem;
    --text-sm: 0.90rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 1.875rem;
    --text-4xl: 2.25rem;

    --spacing-xxs: .15rem;
    --spacing-xs: .5rem;
    --spacing-s: 1rem;
    --spacing-m: 1.5rem;
    --spacing-l: 2rem;

    // tablet
    @media (min-width: 768px) {
      --font-size: 1rem;
    }

    // horizontal tablet
    @media (min-width: 1024px) {
      --font-size: 0.7rem;
    }

    // laptop
    @media (min-width: 1200px) {
    }

    // desktop
    @media (min-width: 1600px) {
    }
  }
  }

  body {
    font-family: "MuseoSans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
	  font-size: 16px;
	  font-weight: 500;
	  color: var(--color-text);
  }

  h1, h2, h3, h4, h5, p { max-width: 70ch; }
`

export default GlobalStyles
