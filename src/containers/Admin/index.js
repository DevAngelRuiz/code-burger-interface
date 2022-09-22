import React from 'react'
import { useLocation } from 'react-router-dom'

import PropTypes from 'prop-types'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import EditProduct from './EditProduct'
import ListOfProducts from './ListOfProducts'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin () {
  const { pathname } = useLocation()

  return (
        <Container>
            <SideMenuAdmin pathname={pathname}/>
            <ContainerItems>
                {pathname === paths.Order && <Orders />}
                {pathname === paths.ProductsList && <ListOfProducts />}
                {pathname === paths.NewProduct && <NewProduct />}
                {pathname === paths.EditProduct && <EditProduct />}

            </ContainerItems>

        </Container>
  )
}
Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
