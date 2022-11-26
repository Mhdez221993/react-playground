import { createContext } from 'react'

const UserContext = createContext('Peter')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }

export default UserContext
