import { UserProfile, useUser } from '@auth0/nextjs-auth0'
import { Center } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import { useRouter } from 'next/router'
import React from 'react'

const Loading = () => {
  return(
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
}

interface Props {
  user: UserProps
  error?: Error
  loading: boolean
}

interface UserProps extends UserProfile {
  id?: string
}
 
const initialValues: Props = {
  user: {},
  loading: true,
}

const UserContext = React.createContext(initialValues)

const useUserContext = () => {
  const router = useRouter();
  const [data, setData] = React.useState<UserProps>()
  const { user, error, isLoading } = useUser()

  React.useEffect(() => {
    if (!user && !isLoading) {
      router.push('/api/auth/login');
    }
    user && setData(user)
  }, [user, error, isLoading])
  return {
    user: data,
    error,
    loading: isLoading
  }
}

const UserProvider = (props: { children: React.ReactNode }) => {
  const { Provider } = UserContext
  const hookValue = useUserContext()
  const { loading, user } = hookValue
  return (
    <Provider value={hookValue}>
      {loading || !user ? <Loading /> : props.children}
    </Provider>
  )
}

export { UserContext, UserProvider }