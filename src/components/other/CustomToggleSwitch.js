import React from 'react';
import styled from 'styled-components'

const CustomLayerSwitch = styled.div`
  font-size: ${props => props.size}rem;
& > *:before,
&> *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.l :hover {
  cursor:pointer;
}
.l {
  background-color: rgba(0,0,0,0.7);
  border-radius: 0.75em;
  box-shadow: 0.125em 0.125em 0 0.125em rgba(0,0,0,0.3) inset;
  color: #fdea7b;
  font-size: 5em;
  display: inline-flex;
  align-items: center;
  margin: auto;
  padding: 0.15em;
  width: 3em;
  height: 1.5em;
  transition: background-color 0.1s 0.3s ease-out, box-shadow 0.1s 0.3s ease-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.l:before, .l:after {
  content: "";
  display: block;
}

.l:before {
  background-color: #d7d7d7;
  border-radius: 50%;
  width: 1.2em;
  height: 1.2em;
  transition: background-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
  z-index: 1;
}

.l:after {
  background:
  linear-gradient(transparent 50%, rgba(0,0,0,0.15) 0) 0 50% / 50% 100%,
  repeating-linear-gradient(90deg,#bbb 0,#bbb,#bbb 20%,#999 20%,#999 40%) 0 50% / 50% 100%,
  radial-gradient(circle at 50% 50%,#888 25%, transparent 26%);
  background-repeat: no-repeat;
  border: 0.25em solid transparent;
  border-left: 0.4em solid #d8d8d8;
  border-right: 0 solid transparent;
  transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
  transform: translateX(-22.5%);
  transform-origin: 25% 50%;
  width: 1.2em;
  height: 1em;
}

.l:focus {
  outline: 0;
}
.l:checked {
  background-color: rgba(0,0,0,0.45);
  box-shadow: 0.125em 0.125em 0 0.125em rgba(0,0,0,0.1) inset;
}
.l:checked:before {
  background-color: currentColor;
  transform: translateX(125%)
}
.l:checked:after {
  border-left-color: currentColor;
  transform: translateX(-2.5%) rotateY(180deg);
}
`

const CustomToggleSwitch = ({checked, onToggleTheme}) => {
    return (
        <CustomLayerSwitch size={0.4}>
            <input className="l"
                   type="checkbox"
                   checked={checked}
                   onChange={onToggleTheme}
            />
        </CustomLayerSwitch>
    )
}

export default CustomToggleSwitch
