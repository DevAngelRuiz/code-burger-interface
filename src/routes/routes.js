import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Products, Register } from '../containers'
import PrivateRoute from './private-route'

function MyRoutes () {
  return (
        <Router>
            <Routes>
                <Route element={<Login />} path="/login" />
                <Route element={<Register />} path="/cadastro" />

                <Route path="*" element={<Home />}>
                    <Route path="*" element={<PrivateRoute />} />
                </Route>
                <Route path="/produtos" element={<Products />}>
                    <Route path="/produtos" element={<PrivateRoute />} />
                </Route>

                {/* <PrivateRoute element={<Home />} path="/" /> */}

            </Routes>

        </Router>

  )
}

export default MyRoutes
