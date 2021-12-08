import React from "react";

import { Props } from "./types";
import * as Styled from "./style";

import borderGradient from '../../assets/contactBorder.png'
import ArrowIcon from '../../assets/iconArrow.svg';


const Banner = ({}: Props) => {
  return (
    <>
      <Styled.TitleContainer mt={[80, 0, 0]} >
        <Styled.Title fontSize={[16, 22, 32]}
        width={[176, 230, 392]}
        height={[42, 64, 92]}
        id="fiquepordentro">
        Fique por dentro
        </Styled.Title>
      </Styled.TitleContainer>
      <Styled.MainBanner flexDirection={["column", "column", "row"]}
      alignItems={["center", "center", "flex-start"]}
      m={["30px 60px", "60px 60px", "60px 80px"]}
      > 
    
          <Styled.ContactTitle 
          fontSize={[14, 28, 44]}
          textAlign={['center', 'center', 'left']}
          borderBottom={['0px solid', '0px solid', '3px solid']} >
            Para ficar por dentro das novidades que vão acontecer, inscreva-se com seu e-mail:
          </Styled.ContactTitle>
    
          <Styled.Form alignItems={['center', 'center', 'none']}>
    
            <Styled.InputTitle fontSize={[14, 16, 18]}>
              Nome:
              <Styled.FormInput width={[222, 500, 500]}
              height={[40, 50, 60]} />
            </Styled.InputTitle>
    
            <Styled.InputTitle fontSize={[14, 16, 18]}>
              Email:
              <Styled.FormInput width={[222, 500, 500]}
              height={[40, 50, 60]}/>
            </Styled.InputTitle>
    
            <Styled.LinkBtn fontSize={[16, 18, 26]} >
              Enviar <ArrowIcon />
            </Styled.LinkBtn>
    
          </Styled.Form>
      </Styled.MainBanner>
    </>
  )  
};

export default Banner;
