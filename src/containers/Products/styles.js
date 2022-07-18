import styled from 'styled-components'

export const Container = styled.div`
background: #E5E5E5;
`

export const ProductsImg = styled.img`
width: 100%;
`
export const CategoriesMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 20px;
`
export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 10px;
padding: 40px;
justify-items: center;

`

export const CategoryButton = styled.button`
cursor: pointer;
background: none;
border: none; 
border-bottom: ${props => props.isActiveCategory && '2px solid #9758A6'} ;
color: ${props => (props.isActiveCategory ? '#9758A6' : '#9A9A9D')} ;
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 20px;
padding-bottom: 5px;

`
