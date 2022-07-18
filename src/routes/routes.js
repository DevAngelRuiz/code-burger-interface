import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Products from '../containers/Products'
import Register from '../containers/Register'
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
