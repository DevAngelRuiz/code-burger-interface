import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled.div`

background: #3c3c3c;
box-shadow: 0px 0px 14px rgba(0,0,0,0.15);
width: 300px;
top: 0;
left: 0;


hr{
    margin: 50px 15px;
}

`
export const ItemContainer = styled.div`
display: flex;
align-items: center;
height: 60px;
background: ${props => props.isActive ? '#565656' : 'none'}; 
border-radius: 3px; 
margin: 8px;

.icon{
    color: #ffffff;
    margin-left: 8px;
}

`
export const ListLink = styled(Link)`
font-size: 16px;
font-weight: normal;
font-style: normal; 
line-height: 19px;
color: #ffffff;
text-decoration: none; 
margin-left: 8px;

`

export const LabelLogout = styled.p`
font-size: 18px;
font-weight: normal;
font-style: normal; 
line-height: 19px;
color: #ffffff;
margin-left: 8px;`
