import React from "react";

import { Props } from "./types";
import * as Styled from "./style";

import FunkRecords from "../../assets/test.png"

import Facebook from "../../assets/facebook.svg"
import Instagram from "../../assets/instagram.svg"
import Youtube from "../../assets/youtube.svg"
import Spotify from "../../assets/spotify.svg"
import Soundcloud from "../../assets/soundcloud.svg"

const Banner = ({}: Props) => {
  return (
    <>
      <Styled.MainBanner ml={[0, 0, 180]}
      justifyContent={['center', 'center', 'start']} > 

       <Styled.Footer flexDirection={['column', 'column', 'row']} 
       >
         <Styled.FooterLogo backgroundImage={[`url(${FunkRecords})`, `url(${FunkRecords})`, `url(${FunkRecords})`]}
         height={[50, 92, 102]}
         width={[64, 120, 140]}
         p={['0px 0px', '0px 0px', '0px 110px']} />

         <Styled.SocialMedia alignItems={['center', 'center', 'flex-start']} >  
           <Styled.IconTitle fontSize={[16, 24, 24]}
           mt={[16, 16, 0]} >
             Nos siga nas redes:
           </Styled.IconTitle>
           <Styled.Icons>

             <Styled.Link >
               <Facebook width={[20, 28, 33]} />
             </Styled.Link>

             <Styled.Link>
               <Instagram width={[20, 28, 33]} />
             </Styled.Link>

             <Styled.Link>
               <Youtube 
               height={[10, 32, 32]}
              />
             </Styled.Link>

             <Styled.Link>
               <Spotify width={[20, 28, 33]} />
             </Styled.Link>

             <Styled.Link >
               <Soundcloud width={[20, 28, 33]}
               onClick={() => {
                const url = "https://www.facebook.com/funkexploderecords";
                window.open(url, "_blank");
              }}/>
             </Styled.Link>
           </Styled.Icons>
         </Styled.SocialMedia>
       </Styled.Footer>

      </Styled.MainBanner>
      
      <Styled.Copyright>
        <Styled.CopyrightTitle fontSize={[10, 12, 16]} >
          Copyright © 2021 Funk Explode, todos os direitos reservados - 32.002.720/0001-82
        </Styled.CopyrightTitle>
      </Styled.Copyright>
     </>
  ) 
};

export default Banner;
