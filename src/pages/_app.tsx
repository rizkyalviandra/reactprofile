import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ChakraProvider, Spinner } from "@chakra-ui/react"
import { UserProvider as Auth0Provider } from '@auth0/nextjs-auth0'
import { UserProvider } from '../contexts/UserContext'

const AppWithProvider = ({ Component, pageProps }: AppProps): React.ReactElement<AppProps> => {
  return (
    <Auth0Provider>
      <ChakraProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ChakraProvider>
    </Auth0Provider>
  )
}

export default AppWithProvider
