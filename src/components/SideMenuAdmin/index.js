import React from 'react'

import ExitToAppIcon from '@mui/icons-material/ExitToApp'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink, LabelLogout } from './styles'

export function SideMenuAdmin () {
  const { logout } = useUser()
  return (
        <Container>
            {/* linha de separação (design): */}
            <hr></hr>
            {listLinks.map(item => (
            <ItemContainer key={item.id} isActive={true}>
<item.icon className="icon"/>
                <ListLink to={item.link}>  {item.label}</ListLink>
            </ItemContainer>
            ))}
            <hr></hr>
            <ItemContainer style={{ position: 'absolute', bottom: '30px' }}>
            <ExitToAppIcon className="icon"/>
            <LabelLogout to='/login' onClick={logout} >Sair</LabelLogout>
            </ItemContainer>

        </Container>
  )
}
