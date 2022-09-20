import React from 'react'

import PropTypes from 'prop-types'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import EditProduct from './EditProduct'
import ListOfProducts from './ListOfProducts'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin () {
  // { match: { path } }
  // nao ta chegando nada
  return (
        <Container>
            <SideMenuAdmin />
            <ContainerItems>
                <Orders />
                <ListOfProducts />
                {/* <EditProduct/> */}
                {/* {path === paths.Order && <Orders />}
                {path === paths.ProductsList && <ListOfProducts />}
                {path === paths.NewProduct && <NewProduct />} */}
                {/* {path === paths.EditProduct && <EditProduct/>} */}

            </ContainerItems>

        </Container>
  )
}
Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
