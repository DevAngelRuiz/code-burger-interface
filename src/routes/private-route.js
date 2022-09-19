import React from 'react'
import { Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

function PrivateRoute ({ element, children, isAdmin, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')
  if (!user) {
    return <Navigate replace to='/login'/>
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate replace to='/'/>
  }
  return children
}

export default PrivateRoute
PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
