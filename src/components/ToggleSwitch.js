import React from 'react';
import {ToggleDiv} from './styles';
import CustomToggleSwitch from './other/CustomToggleSwitch';

const ToggleSwitch = ({theme,onToggleTheme}) => {
    const isOn = !(theme === 'light')

    return (
        <ToggleDiv>
            <CustomToggleSwitch
                checked={isOn}
                onToggleTheme={onToggleTheme}
            />
        </ToggleDiv>
    )
}

export default ToggleSwitch

