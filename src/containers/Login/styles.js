import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div` 
    width: 100wh;
    height: 100vh;
    background: url('${Background}');
    display: flex;
    justify-content: center;
    align-items: center;

`
export const LoginImage = styled.img` 
height: 70%;

`
export const ContainerItens = styled.div` 
    background: #373737;
    border-radius: 0 10px 10px 0;
    height: 70%;
    padding: 25px 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
h1{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    padding: 119px 0 39px 0;
    text-align: center;
}
form{
    display: flex;
    flex-direction: column;
}


`
export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 14px;
    color: #FFFFFF;
    margin-bottom: 5px;
    margin-top: 40px;
    

`

export const Input = styled.input` 
    width: 391.42px;
    height: 38.32px;
    background: #FFFFFF;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    
    border: none;
    padding-left: 10px;
    border: ${props => (props.error ? '2px solid #cc1717' : 'none')};

`

export const ErrorMessage = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #cc1717;
    margin-top: 2px;




`
export const SignInLink = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin-top: 10px;
a{
    cursor:pointer;
    text-decoration: underline;


}

`
