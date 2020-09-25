import React, {useEffect, useState} from 'react';
import {darkTheme, lightTheme} from '../theme'
import {LandingDiv, Title} from './styles';
import Typical from 'react-typical'
import {titleTexts} from '../constant';
import ParallaxLamp from './other/ParallaxLamp';
import {createGlobalStyle, keyframes} from 'styled-components';
import styled from 'styled-components';
import SocialMedia from './other/SocialMedia';
import {fadeIn} from 'react-animations';

const NameStyle = createGlobalStyle`
  .title-name {
    margin: 0;
    :after {
      visibility: ${props => props.isWritten && 'hidden'};
    }
  }
  .title-about {
    :after {
      visibility: ${props => !props.isWritten && 'hidden'};
    }
  }
`

const FadeIn = keyframes`${fadeIn}`
const FadeDiv = styled.div`
  animation: 2500ms ${FadeIn};
`

const Landing = ({theme}) => {
    const [nameIsWritten, setWritten] = useState(false)
    const th = theme==='light' ? lightTheme : darkTheme

    useEffect(() => {
        setTimeout(() => {
            setWritten(true)
        }, 3000)
    },[])

    return (
        <LandingDiv>
            <NameStyle isWritten={nameIsWritten}/>
            <FadeDiv top duration={2500} distance='20px'>
                <ParallaxLamp className={'nonselect'} theme={theme} size={'small'}/>
            </FadeDiv>
            <FadeDiv bottom duration={2500} distance={'40px'}>
                <Title main theme={th} className={'nonselect'}>
                    Hello, my name
                    <Typical className={'title-name'}
                             steps={[2000, 'Mark Dubkov 💘']}
                             loop={1}
                             wrapper={'h2'}
                    />
                </Title>
            </FadeDiv>
            <FadeDiv bottom duration={3000} distance="20px">
                <Typical className={'title-about'}
                         steps={titleTexts}
                         loop={Infinity}
                         wrapper={Title}
                />
            </FadeDiv>
            <FadeDiv bottom duration={3000} distance={'5px'} className={'nonselect'}>
                <SocialMedia/>
            </FadeDiv>

        </LandingDiv>
    )
}

export default Landing
