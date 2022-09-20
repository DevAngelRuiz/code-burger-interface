import React from 'react'
import { useNavigate } from 'react-router-dom'

import ExitToAppIcon from '@mui/icons-material/ExitToApp'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink, LabelLogout } from './styles'

export function SideMenuAdmin () {
  const { logout } = useUser()
  const navigate = useNavigate()
  const logoutUser = () => {
    logout()
    navigate('/login')
  }
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
            <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
            <ExitToAppIcon className="icon"/>
            <LabelLogout to='/login' onClick={logoutUser} >Sair</LabelLogout>
            </ItemContainer>

        </Container>
  )
}
