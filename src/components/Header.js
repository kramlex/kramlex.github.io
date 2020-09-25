import React from 'react';
import {HeaderDiv} from './styles';
import ToggleSwitch from './ToggleSwitch';

const Header = ({theme, onToggleTheme}) => {
    return (
        <HeaderDiv>
            <ToggleSwitch
                theme={theme}
                onToggleTheme={onToggleTheme}
            />
        </HeaderDiv>
    )
}

export default Header
