import styled from 'styled-components';

export const Container = styled.div`
    width: 650px;
    padding: 20px;
`;


export const ProductArea = styled.div`
    height: 200px;
    display: flex;
`;

export const ProductImage = styled.img`
    width: 310px;
    border-radius: 10px;
`;

export const ProductInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`;


export const ProductDetails = styled.div`

`;

export const ProductQuantityArea = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
`;

export const ProductButtons = styled.div`
    margin-top: 10px; 
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ProductName = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

export const ProductIngredients = styled.div`
    font-size: 14x;
`;

export const ProductButton = styled.div`
    border: 0;
    background-color: #073C07;
    box-shadow: 4px 5px 0px #D3E9D3;
    color: #FFFFFF;
    font-size: ${props=>props.small ? '13px':'22px'};
    font-weight: bold;
    padding: ${props=>props.small ? '5px 10px':'10px 20px'};;
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
`;

export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    background-color: #073C07;
    border-radius: 8px;
    box-shadow: 4px 5px 0px #D3E9D3;
`;

export const ProductQuantityControl = styled.img`
    height: auto;
    width: 18px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
`;

export const ProductTextControl = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #FFFFFF;
`;
export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: bold;
`;





