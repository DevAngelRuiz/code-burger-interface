import styled from 'styled-components'

export const Container = styled.div`
background: #FFFFFF;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
border-radius: 20px;
padding: 25px;
display: flex;
justify-content: space-between;
flex-direction: column;

.container-top{
    display: grid; 
    grid-gap: 15px 50px;
    grid-template-areas: 
    'title title'
    'items items-price'
    'tax tax-price';
}
.title {
    grid-area: title;
}
.items {
    grid-area: items;
}
.items-price {
    grid-area: items-price;
}
.tax {
    grid-area: tax;
}
.tax-price {
    grid-area: tax-price;
}
.container-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    font-size: 20px;
    font-weight: 500;
    margin-top: 130px;
}
`
