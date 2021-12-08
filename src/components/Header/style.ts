import styled from "styled-components";
import { layout, typography, flexbox, space } from "styled-system";

import { StyledProps } from "./types";

export const MainHeader = styled.div<StyledProps>`
  display: flex;
  height: 100px;
  background: #1C0426;
  backdrop-filter: blur(8px);
  align-items: center;
  justify-content: space-between;
  ${layout};
  ${flexbox};
  ${space}
`;

export const Title = styled.span<StyledProps>`
`;

export const NavBar = styled.div`
  display: flex;
  ${layout};
`

export const Btn = styled.a`
  cursor: pointer;
  text-decoration: none;
  background-color: #ff9100;
  border-radius: 7px;
  border: 2px solid #ff9100;
  padding: 10px 20px;
  color: #fff;
  font-weight: bold;
  transition: 0.3s;
  ${layout};
  ${space};

  :hover {
      transform: scale(1.05);
    }
  }
`

export const Link = styled.a`
  position: relative;
  cursor: pointer;
  font-size: 20px;
  margin: 0px 15px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  ${typography}

    &:after{
      content: "";
      position: absolute;
      background: #D90D92;
      height: 3px;
      width: 0;
      left: 0;
      bottom: -5px;
      transition: 0.3s;
    }

    &:hover:after {
      width: 100%;
    }
  }
`

export const BtnLink = styled.span `
  ${typography};
  ${space};
  margin: 0px 10px;
`
