import React from 'react';
import { Container, ProductImageArea, ProductImage, ProductInfoArea, ProductName, ProductPrice, ProductIngredients, ProductButtonArea, ProductButton } from './styled';

export default ({data}) => {
    return (
        <Container>
            <ProductImageArea>
                <ProductImage src={data.image} />
            </ProductImageArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>R$ {data.price}</ProductPrice>
                <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/next.png" />
            </ProductButtonArea>
        </Container>
    );
}