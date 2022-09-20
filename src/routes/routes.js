import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import PrivateRoute from './private-route'

function MyRoutes () {
  return (
        <Router>
            <Routes>
                <Route element={<Login />} path={paths.Login} />
                <Route element={<Register />} path={paths.Register} />

                <Route path="/" element=
                    {
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    } />

                <Route path={paths.Product} element=
                    {
                        <PrivateRoute>
                            <Products />
                        </PrivateRoute>
                    } />
                <Route path={paths.Cart} element=
                    {
                        <PrivateRoute>
                            <Cart />
                        </PrivateRoute>
                    } />

                <Route path={paths.Order} element=
                    {
                        <PrivateRoute>
                            <Admin />
                        </PrivateRoute>
                    } />

                <Route path={paths.ProductsList} element=
                    {
                        <PrivateRoute>
                            <Admin />
                        </PrivateRoute>
                    } />

                <Route path={paths.NewProduct} element=
                    {
                        <PrivateRoute>
                            <Admin />
                        </PrivateRoute>
                    } />

                <Route path={paths.EditProduct} element=
                    {
                        <PrivateRoute>
                            <Admin />
                        </PrivateRoute>
                    } />

            </Routes>

        </Router>

  )
}

export default MyRoutes
