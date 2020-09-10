import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
    padding: 10px;
    display: flex;
    align-items: center;
    color: #136713;
    cursor: pointer;
`;

export const ProductImageArea = styled.div`
    width: 100px;
`;

export const ProductImage = styled.img`
    width: 100%;
`;

export const ProductInfoArea = styled.div`    
    flex: 1;
    margin-left: 10px;
    margin-right: 10;
`;

export const ProductName = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #000000;
`;

export const ProductPrice = styled.div`
    font-size: 14px;
    color: #000000;
`;

export const ProductIngredients = styled.div`
    font-size: 14px;
    color: #000000;
`;

export const ProductButtonArea = styled.div`
`;

export const ProductButton = styled.img`
    width: 15px;
`;



