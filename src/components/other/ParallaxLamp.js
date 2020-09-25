import React from 'react';
import styled from 'styled-components'
import ParallaxMousemove from 'react-parallax-mousemove'
import {darkTheme, lightTheme} from '../../theme';


const ParallaxContainer = styled.div`
  margin: 0 auto;
  position:relative;
  display: flex;
  justify-content: center;
`

const InnerDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  
  width: ${props => {
    if(props.size === 'large') return '402px'
    else if(props.size === 'medium') return '300px' //395
    else if(props.size === 'small') return '250px' //329
}};
  height: ${props => {
    if(props.size === 'large') return '530px'
    if(props.size === 'medium') return '395px'
    if(props.size === 'small') return '329px'
}};
`

const LayerStyle = ({
    position: 'relative',
})

const LayerImage = styled.img`
  position:absolute;
  left: ${props => {
    if(props.first && props.size === 'large') return '530px'
    if(props.first && props.size === 'medium') return '395px'
    if(props.first && props.size === 'small') return '329px'
}};
  width: ${props => {
    if(props.size === 'large') return '402px'
    else if(props.size === 'medium') return '300px' //395
    else if(props.size === 'small') return '250px' //329
}};
  height: ${props => {
    if(props.size === 'large') return '530px'
    if(props.size === 'medium') return '395px'
    if(props.size === 'small') return '329px'
}};
  left: ${props => {
    if(props.size === 'large') return '-201px'
    else if(props.size === 'medium') return '-150px' //395
    else if(props.size === 'small') return '-125px' //329
}};
  
`

const ParallaxLamp = ({theme, size}) => {
    const lamp = theme==='light' ? lightTheme.lamp : darkTheme.lamp

    let springSettings = {
        stiffness: 50,
        damping: 30
    }

    return (
        <ParallaxContainer className={'parallax-container'}>
            <InnerDiv size={size}>

                {theme !== 'light' &&
                    <ParallaxMousemove.Layer
                        layerStyle={{...LayerStyle, zIndex: '5'}}
                        config={{
                            xFactor: -0.01,
                            yFactor: 0.01,
                            springSettings
                        }}
                    >
                        <LayerImage className={'nonpevents'} size={size} src={lamp.line} alt="Parallax Layer"/>
                    </ParallaxMousemove.Layer>
                }

                <ParallaxMousemove.Layer layerStyle={{...LayerStyle, left: ''}} config={{
                    xFactor: -0.03,
                    yFactor: 0.03,
                    springSettings
                }}>
                    <LayerImage className={'nonpevents'} size={size} src={lamp.lamp} alt="Parallax Layer"/>
                </ParallaxMousemove.Layer>

                {theme !== 'light' &&
                    <ParallaxMousemove.Layer layerStyle={{...LayerStyle}} config={{
                        xFactor: -0.02,
                        yFactor: 0.02,
                        springSettings: springSettings
                    }}>
                        <LayerImage className={'nonpevents'} size={size} src={lamp.text} alt="Parallax Layer"/>
                    </ParallaxMousemove.Layer>
                }
            </InnerDiv>
        </ParallaxContainer>
    )
}

export default ParallaxLamp
