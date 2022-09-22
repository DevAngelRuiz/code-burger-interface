import styled from 'styled-components'

export const Container = styled.div`
background: #FFFFFF;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
border-radius: 20px;
padding: 10px;
width: max-content;


`
export const Header = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
padding: 10px;
border-bottom: 1px solid #B5B5B5;

p{
font-style: normal;
font-weight: 400;
font-size: 17px;
color: #9A9A9D;

}

`

export const Body = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
width: max-content;
grid-gap: 15px 15px;
padding: 10px;

img{
    border-radius: 10px;
    width: 120px;
    height: 120px;
}
p{
    font-size: 17px;
    font-weight: 700;
}
.quantity-container{
    display: flex;
    gap: 20px;

    button{
        height: 30px;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
    }
    p{
        margin-top: 5px;
    }

}

`
export const EmptyCart = styled.p`
padding: 20px;
font-weight: bold;
text-align: center; 

`
