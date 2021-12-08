import React from "react";

import { Props } from "./types";
import * as Styled from "./style";

import FunkLogo from '../../assets/funkexplode.svg'

const Header = ({}: Props) => {
  return (
    <Styled.MainHeader p={["0px 20px", "0px 50px", "0px 60px", "0px 80px"]}>
      <FunkLogo />

      <Styled.NavBar display={['none', 'none', 'flex']}>
          <Styled.Link>
            Nossos artistas
          </Styled.Link>
          <Styled.Link href="#fiquepordentro" >  
            Fique por dentro
          </Styled.Link>
          <Styled.Link>
            Tá chegando
          </Styled.Link>
      </Styled.NavBar>
      <Styled.Btn p={["7px 5px", "7px 10px", "10px 15px", "10px 20px"]}>
        <Styled.BtnLink fontSize={[12, 18, 18]}>
          Compre agora
        </Styled.BtnLink>
      </Styled.Btn>
    </Styled.MainHeader>
  );
};

export default Header;
