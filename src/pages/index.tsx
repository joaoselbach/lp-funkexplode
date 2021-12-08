import React from 'react'
import Head from 'next/head'

import * as Styled from '../styles/pages/Home'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

import background from '../assets/bg.png'
import mobileBackground from '../assets/bgMobile.png'

import { gql, useQuery } from '@apollo/client'

const Home: React.FC = () => {
  return (
    <>
    <Head>
        <title>Funk Explode</title>
    </Head>

      <Header />
    <Styled.Container backgroundImage={[`url(${mobileBackground})`, `url(${background})`, `url(${background})`]}
    height={['250vh', '200vh', '205vh']}>
      
      <Banner />

      <Contact />
      <Footer />
    </Styled.Container>
    </>
  )
}

export default Home
