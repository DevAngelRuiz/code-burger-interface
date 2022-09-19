import React from 'react'

import PropTypes from 'prop-types'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
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
                <NewProduct/>

                {/* {path === paths.Order && <Orders/>}
                {path === paths.ProductsList && <ListOfProducts/>} */}

            </ContainerItems>

        </Container>
  )
}
Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
