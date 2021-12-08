import styled from 'styled-components';
import {border, flexbox, layout, space, typography } from 'styled-system';

export const MainBanner = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 60px 80px;
    ${space};
    ${flexbox};
`;

export const TitleContainer = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    ${layout};
    ${space};
`

export const Title = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 36px;
    text-transform: uppercase;
    background-color: #F2CB04;
    height: 92px;
    ${typography};
    ${layout};
`

export const SpanTitle = styled.span`
    font-weight: bold;
`

export const Contact = styled.div`
    display: flex;
    justify-content: space-between;

    ${flexbox}
    ${typography}
`

export const ContactTitle = styled.span`
    position: relative;
    color: #fff;
    font-family: Inter;
    font-weight: 200;
    padding: 24px 0px;
    max-width: 700px;
    border-image: linear-gradient(to right, #d90d9257 20%, #d90d9200 90%) 0.5;

    ${border}
    ${layout}
    ${typography}
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    padding: 10px 0px;

    ${typography}
    ${flexbox};
`

export const InputTitle = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    padding: 10px 0px;
    ${typography};
`

export const FormInput = styled.input`
    width: 548px;
    height: 48px;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(50px);
    border-radius: 4px;
    margin-top: 10px;
    border: 1px solid black;
    color: #ffffffcc;
    font-size: 16px;
    font-family: Inter;
    padding-left: 10px;

    ${layout}
    
`

export const LinkBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  gap: 14px;
  padding: 10px 20px;
  margin-top: 14px;
  cursor: pointer;
  text-decoration: none;
  max-width: 210px;
  border-radius: 7px;
  border: 2px solid #ff9100;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  transition: 0.3s;
  background-color: #ff9100;

  ${typography}
  ${flexbox}

  transition: 0.3s;

  :hover {
        transform: scale(1.05);
  }
`;
