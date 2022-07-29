import React from 'react'
import { Route, Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

function PrivateRoute ({ element, isAdmin, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')
  if (!user) {
    return <Navigate replace to='/login'/>
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate replace to='/'/>
  }
  return (
            <Route {...rest} element={element} />

  )
}

export default PrivateRoute
PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
