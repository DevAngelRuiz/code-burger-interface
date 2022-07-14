import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import { UserProvider } from './hooks/UserContext'
import MyRoutes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <UserProvider>
            <MyRoutes />
        </UserProvider>
        <ToastContainer />
        <GlobalStyles />

    </>

)
