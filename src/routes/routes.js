import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import PrivateRoute from './private-route'

function MyRoutes () {
  return (
        <Router>
            <Routes>
                <Route element={<Login/>} path="/login" />
                <Route element={<Register/>} path="/cadastro" />

                <Route element={<Home/>} path="/">
                    <Route path="/" element={<PrivateRoute />} />
                </Route>

                <Route element={<Products/>} path="/produtos">
                    <Route path="/produtos" element={<PrivateRoute />} />
                </Route>

                <Route element={<Cart/>} path="/carrinho">
                    <Route path="/carrinho" element={<PrivateRoute />} />
                </Route>

                <Route element={<Admin/>} path="/pedidos">
                    <Route path="/pedidos" element={<PrivateRoute />} />
                </Route>
                <Route element={<Admin/>} path="/lista-pedidos">
                    <Route path="/lista-pedidos" element={<PrivateRoute />} />
                </Route>

                {/* <PrivateRoute element={<Home />} path="/" /> */}
{/* <PrivateRoute path='/' element={<Home />}/> */}
            </Routes>

        </Router>

  )
}

export default MyRoutes
