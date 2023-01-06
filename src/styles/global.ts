import { createGlobalStyle } from 'styled-components'
import appBackground from '@/assets/app-background.svg'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']};
  }

  body {
    height: 100vh;
    color: ${(props) => props.theme['gray-900']};
    background-color: ${(props) => props.theme['gray-100']};
    background-image: url(${appBackground});
    background-repeat: no-repeat;
    background-position: top;
    background-size: contain;
    -webkit-font-smoothing: antialiased;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  input, textarea {
    color: ${(props) => props.theme['gray-700']};
    background-color: ${(props) => props.theme['gray-300']};
    border: 1px solid ${(props) => props.theme['gray-400']};
  }

  input::placeholder, textarea::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }

  button, a {
    border: none;
    background-color: none;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.5)
  }
`
