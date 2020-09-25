import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html{
    height: 100%;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  #site-wrapper{
     
  }
  
  body {
    box-shadow:inset 0 0 0 4000px ${props => props.theme.body};
    min-height: 100%;
    color: ${props => props.theme.text};
    // background-color: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  
  .nonselect {
      -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
         -khtml-user-select: none; /* Konqueror HTML */
           -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                      supported by Chrome, Edge, Opera and Firefox */
  }
  
  .nonpevents {
    pointer-events: none
  }
`