import React, { createContext, useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

// com o context API ao invés de passar os dados por props, cria-se um context que armazena os dados, facilitando seu acesso (mesma função REUX API)

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async userInfo => {
    setUserData(userInfo)

    await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo))
  }
  // deslogando o cliente
  const logout = async () => {
    await localStorage.removeItem('codeburger:userData')
  }
  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('codeburger:userData')
      if (clientInfo) {
        setUserData(JSON.parse(clientInfo))
      }
    }
    loadUserData()
  }, [])

  return (
        <UserContext.Provider value={{ putUserData, userData, logout }}>
            {children}
        </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with UserContext ')
  }
  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
