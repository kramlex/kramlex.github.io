// import React from 'react';
import styled from 'styled-components';
import {device} from '../theme';

export const HeaderDiv = styled.div`
    width: 100%;
    // margin: 20px;
    padding-left: 30px;
    padding-right: 30px;
    //align-items: center;
    display: block;
    @media ${device.mobileL} {
        padding-left: 10px;
        margin: 10px;
        padding-right: 10px;
    }
    @media ${device.tablet} {
        padding-left: 20px;
        margin: 10px;
        padding-right: 20px;
    }
`;


export const ToggleDiv = styled.div`
  margin-top: 30px;
  margin-right: 5px;
  float: right;
  display: flex;
  flex-direction: row;
  @media ${device.tablet} {
    margin-top: 30px;
  }
  @media ${device.mobileL} {
    float: inside;
  }
`;

export const LandingDiv = styled.div`
  width: 60%;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  display: block;
  @media ${device.tablet} {
    //margin-top: 60px;
    //width: 100%;
  }
  padding-right: 10px;
  padding-left: 7px;
  
  //font-family: 'Inconsolata', monospace;
  //font-family: 'Share Tech Mono', monospace;
  font-family: 'Courier Prime', monospace;
  //font-family: 'Spa ce Mono', monospace;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: ${props => props.main ? 50 : 30}px;
    letter-spacing:2px;
    line-height: 1.4;
    color: ${props => props.theme.text};
    border-bottom: ${props => props.main && `1px solid ${props.theme.text}40`};
    padding-bottom: ${props => props.main && '25px'};
    //-webkit-box-shadow: 4px 4px 4px 0px rgba(14, 23, 36, 0.57);
    //-moz-box-shadow:    4px 4px 4px 0px rgba(14, 23, 36, 0.57);
    //box-shadow:         4px 4px 4px 0px rgba(14, 23, 36, 0.57);
    text-shadow: 2px 2px 5px rgba(14, 23, 36, 0.4);
    @media ${device.tablet}{
        font-size: ${props => props.main ? 40 : 30}px;
        letter-spacing: 1.5px;
        line-height: 1.4;
        padding-bottom: ${props => props.main && '15px'};
    }
`