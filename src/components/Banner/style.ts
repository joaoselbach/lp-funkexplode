import styled from 'styled-components';
import {flexbox, layout, typography, background, space } from 'styled-system';

export const MainBanner = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 80px;
    height: 100vh;
    ${flexbox}
    ${typography}
    ${space};
`;

export const Title = styled.span`
    display: flex;
    flex-direction: column;
    color: #D90D92;
    font-size: 86px;
    font-weight: bold;
    font-family: Gilroy;
    margin-bottom: 24px;
    ${typography}
    ${space}
`;

export const SubTitle = styled.span`
    color: #fff;
    font-size: 86px;
    font-weight: bold;
    font-family: Gilroy;
    ${typography}
`;


export const Description = styled.span`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    max-width: 746px;
    line-height: 125%;
    color: #fff;
    padding: 20px 0px;

    background-size: contain;
    background-repeat: no-repeat;

    ${typography}
    ${layout}
    ${background}
`

export const BtnTitle = styled.span`
    color: #F2CB04;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 125%;
    padding: 20px 0px;

    ${typography}
`

export const BtnTitleGlow = styled.span`
    text-shadow: 0px 0px 8px rgba(242, 203, 4, 0.55);

    ${typography}
`


export const LinkBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  max-width: 210px;
  background-color: #ff9100;
  border-radius: 7px;
  border: 2px solid #ff9100;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  transition: 0.3s;
  padding: 10px 20px;
  gap: 6px;

  ${typography}

  transition: 0.3s;

  :hover {
    transform: scale(1.05);
  }
`;
