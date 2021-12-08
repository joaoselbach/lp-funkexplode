import React from "react";

import { Props } from "./types";
import * as Styled from "./style";

import ArrowIcon from '../../assets/iconArrow.svg';
import gradientBackground from '../../assets/gradientTitle.png'

const Banner = ({}: Props) => {
  return (
    <Styled.MainBanner alignItems={['center', 'center', 'flex-start']}
    textAlign={[ 'center', 'center', 'left' ]}
    p={["0px 40px", "0px 40px", "0px 80px"]}
    id="home">

      <Styled.Title fontSize={[24, 64, 86]} 
      mt={["80px", "0px", "0px"]}
      >
        Funk explode em
        <Styled.SubTitle fontSize={[22, 58, 86]} >
          conteúdos exclusivos?
        </Styled.SubTitle>
      </Styled.Title>

        <Styled.Description fontSize={[20, 28, 32]} 
        backgroundImage={[`url(${gradientBackground})`, 'none', 'none']}>
          Já pensou?! Ter acesso a músicas e videoclipes 
          exclusivos do: MC Luan da BS, MC L Da Vinte,
          MC Kaio e cia.?
        </Styled.Description>

      <Styled.BtnTitle fontSize={[20, 28, 32]} >
        Então, se <Styled.BtnTitleGlow>inscreve</Styled.BtnTitleGlow> aí
      </Styled.BtnTitle>
      
      <Styled.LinkBtn fontSize={[16, 24, 26]} href="#home">
        Saiba mais <ArrowIcon />
      </Styled.LinkBtn>

    </Styled.MainBanner>
  )
};

export default Banner;
