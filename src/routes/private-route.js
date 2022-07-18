import React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'

import PropTypes from 'prop-types'

function PrivateRoute ({ element, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')
  if (!user) {
    return <Navigate to="/login"/>
  }
  return <Routes><Route {...rest} element={element} /></Routes>
}

export default PrivateRoute
PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
