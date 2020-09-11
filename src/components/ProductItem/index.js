import React from 'react';
import { Container, ProductImageArea, ProductImage, ProductInfoArea, ProductName, ProductPrice, ProductIngredients, ProductButtonArea, ProductButton } from './styled';

export default ({data, onClick}) => {
    const handleClick = () => {
        onClick(data);
    }

    return (
        <Container onClick={handleClick}>
            <ProductImageArea>
                <ProductImage src={data.image} />
            </ProductImageArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>R$ {data.price.toFixed(2)}</ProductPrice>
                <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/next.png" />
            </ProductButtonArea>
        </Container>
    );
}