import React from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../api/apollo'

import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ApolloProvider client={apolloClient} >
        <Component {...pageProps} />
        <GlobalStyle />
      </ApolloProvider>
    </>
  )
}

export default MyApp
