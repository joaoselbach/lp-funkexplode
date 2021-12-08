import styled from 'styled-components';
import {grid, background, flexbox, layout, space, typography } from 'styled-system';

export const MainBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36vh;
    margin-top: 80px;
    ${layout}
    ${space}
    ${flexbox}
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    ${space}
    ${flexbox}
`;

export const SocialMedia = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    ${flexbox}
`

export const FooterLogo = styled.div`
    height: 102px;
    width: 140px;
    color: #fff;

    background-size: contain;
    background-repeat: no-repeat;

    ${typography}
    ${layout}
    ${background}
    ${space}
`

export const IconTitle = styled.div`
    color: #fff;
    font-weight: bold;
    font-size: 26px;
    align-items: flex-start;
    padding-bottom: 34px;

    ${space}
    ${typography}
`

export const Link = styled.a`
    cursor: pointer;
    text-decoration: none;

    ${space}
`

export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const Copyright = styled.div`
    display: flex;
    justify-content: center;
`

export const CopyrightTitle = styled.span`
    color: #fff;
    font-size: 12;
    font-family: Inter;
    text-align: center;
    margin-top: 30px;
    ${typography}
    ${space}
`

export const Facebook = styled.div`
    ${layout}
`

export const Instagram = styled.div`
    ${layout}
`

export const Youtube = styled.div`
    ${layout}
`

export const Spotify = styled.div`
    ${layout}
`

export const Soundcloud = styled.div`
    ${layout}
`