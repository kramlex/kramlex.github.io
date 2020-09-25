import React from 'react';
import {HeaderDiv} from './styles';
import ToggleSwitch from './ToggleSwitch';
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';


const FadeIn = keyframes`${fadeIn}`
const FadeDiv = styled.div`
  animation: 2500ms ${FadeIn};
`

const Header = ({theme, onToggleTheme}) => {
    return (
        <HeaderDiv>
            <FadeDiv>
                <ToggleSwitch
                    theme={theme}
                    onToggleTheme={onToggleTheme}
                />
            </FadeDiv>

        </HeaderDiv>
    )
}

export default Header
