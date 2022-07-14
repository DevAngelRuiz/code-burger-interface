import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import PrivateRoute from './private-route'

function MyRoutes () {
  return (
        <Router>
            <Routes>
                <Route element={<Login />} path="/login" />
                <Route element={<Register />} path="/cadastro" />
                <Route exact path='/' element={<PrivateRoute />}>
                    <Route exact path='/' element={<Home />} />
                </Route>
                {/* <PrivateRoute element={<Home />} path="/" /> */}

            </Routes>

        </Router>

  )
}

export default MyRoutes
