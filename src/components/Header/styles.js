import styled from 'styled-components'

export const Container = styled.div`
height: 72px;
background-color: #FFFFFF;
box-shadow: 2px 3px 5px rgba(0,0,0,0.15);
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-around; 



`
export const ContainerLeft = styled.div`
display: flex;
gap: 30px;

`
export const PageLink = styled.a`
cursor: pointer;
text-decoration: none;
color: ${props => props.isActive ? ' #9758A6' : '#555555'} ;
font-size: 16px;
line-height: 19px;
font-weight: ${props => props.isActive ? 'bold' : 'normal'} ; 

`
export const PageLinkExit = styled.a`
cursor: pointer;
text-decoration: none;
font-weight: 700;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;

color: #9758A6;
`
export const ContainerRight = styled.div`
display: flex;
align-items: center;
gap: 15px;
`
export const Line = styled.div`
height: 40px;
border-right: 0.3px solid #bababa;
`
export const ContainerText = styled.div`
p{

font-weight: 300px;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
color: #555555;
}

`
