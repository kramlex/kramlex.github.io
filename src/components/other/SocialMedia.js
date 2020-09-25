import React from 'react';
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {EXTERNAL_LINKS} from '../../constant';
import {device} from '../../theme';

const SocialMediaDiv = styled.div`
  color: ${props => props.main}; 
  display: flex;
  justify-content: center;
  font-size: 2em;
  margin-top: 30px;
  align-items:center;
  text-align: center;
  padding-bottom: 15px;
  padding-top: 15px;
  
  @media ${device.mobileL} {
    border-top: ${props => `1px solid ${props.theme.text}40`};
    padding-top: 15px;
    margin:0;
  }
`
const CustomLink = styled.a`
  
  margin: 15px;
  color: ${props => props.theme.text};
  :hover {
    color: ${props => `${props.theme.text}d8`};
  }
  :active{
    color: ${props => props.theme.text};
  }
  :visited{
    color: ${props => props.theme.text};
  }
  @media ${device.mobileL} {
    margin:4px;
  }
`
const CustomIcon = styled(FontAwesomeIcon)`
//-webkit-box-shadow: 4px 4px 4px 0px rgba(14, 23, 36, 0.57);
//    -moz-box-shadow:    4px 4px 4px 0px rgba(14, 23, 36, 0.57);
//    box-shadow:         4px 4px 4px 0px rgba(14, 23, 36, 0.57);
  cursor:pointer;
  display:inline-block;
  font-size: 3rem;
  height: 2.6rem;
  line-height: 2.6rem;
  margin: 0 5px;
  position: relative;
  text-align: center;
  user-select: none;
  text-decoration: none;  
`

const SocialMedia = () => {
    return (
        <SocialMediaDiv>
            {Object.entries(EXTERNAL_LINKS)
                .map(([key,value]) => {
                    return <CustomLink href={value.link} key={key}>
                        <CustomIcon icon={value.faIcon}/>
                    </CustomLink>
                })
            }
        </SocialMediaDiv>
    )
}

export default SocialMedia
