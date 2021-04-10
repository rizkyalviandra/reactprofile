import React from 'react'
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Center, ChakraProvider, Spinner } from "@chakra-ui/react"

const App = ({ Component, pageProps }: AppProps) => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0()

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) loginWithRedirect()
  }, [isLoading, isAuthenticated, loginWithRedirect])

  if (isLoading)
  return (
    <Center h="600px">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  )
  if(isAuthenticated)  return <Component {...pageProps} />

  return null
}

const AppWithProvider = (props: AppProps) => {
  return (
    <Auth0Provider
      domain={`${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}`}
      clientId={`${process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}`}
      redirectUri={`${process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI}`}
    >
      <ChakraProvider>
        <App {...props}/>
      </ChakraProvider>
    </Auth0Provider>
  )
}

export default AppWithProvider
