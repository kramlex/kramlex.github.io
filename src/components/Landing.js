import React, {useEffect, useState} from 'react';
import {darkTheme, lightTheme} from '../theme'
import {LandingDiv, Title} from './styles';
import {Fade} from 'react-reveal'
import Typical from 'react-typical'
import {titleTexts} from '../constant';
import ParallaxLamp from './other/ParallaxLamp';
import {createGlobalStyle} from 'styled-components';
import SocialMedia from './other/SocialMedia';

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
            <Fade top duration={2500} distance='20px'>
                <ParallaxLamp className={'nonselect'} theme={theme} size={'small'}/>
            </Fade>
            <Fade bottom duration={2500} distance={'40px'}>
                <Title main theme={th} className={'nonselect'}>
                    Hello, my name
                    <Typical className={'title-name'}
                             steps={[2000, 'Mark Dubkov 💘']}
                             loop={1}
                             wrapper={'h3'}
                    />
                </Title>
            </Fade>
            <Fade bottom duration={3000} distance="20px">
                <Typical className={'title-about'}
                         steps={titleTexts}
                         loop={Infinity}
                         wrapper={Title}
                />
            </Fade>
            <Fade bottom duration={3000} distance={'5px'} className={'nonselect'}>
                <SocialMedia/>
            </Fade>

        </LandingDiv>
    )
}

export default Landing
