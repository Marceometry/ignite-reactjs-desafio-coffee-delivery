import { createGlobalStyle } from 'styled-components'

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
    color: ${(props) => props.theme['gray-900']};
    background-color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
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
