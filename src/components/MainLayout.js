import React from 'react';
import styled from 'styled-components';
import Home from './Home';

export const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Main = ({theme, onToggleTheme}) => {
    return (
        <Home
            theme={theme}
            onToggleTheme={onToggleTheme}
        />
    )
}

export default Main
