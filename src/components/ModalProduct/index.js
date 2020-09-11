import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { 
    Container,
    ProductArea, 
    ProductImage,
    ProductInfo,
    ProductDetails,
    ProductQuantityArea,
    ProductButtons,
    ProductName,
    ProductIngredients,
    ProductButton,
    ProductQuantityControl,
    ProductTextControl,
    ProductQuantity,
    ProductPrice
} from './styled';

export default ({ data, setStatus }) => {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(data.price);

    useEffect(() => {
        setQuantity(1);
    }, [data])

    const handleCancelButton = () => {
        setStatus(false);
    }

    const handleDecreaseQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    return(
        <Container>
            <ProductArea>
                <ProductImage src={data.image} />
                <ProductInfo>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQuantityControl onClick={handleDecreaseQuantity} src="/assets/minus.png" />
                                <ProductTextControl>{quantity}</ProductTextControl>
                            <ProductQuantityControl onClick={handleIncreaseQuantity} src="/assets/plus.png" />
                        </ProductQuantity>
                        <ProductPrice>
                            R$ {(data.price * quantity).toFixed(2)}
                        </ProductPrice>
                    </ProductQuantityArea>
                </ProductInfo>
            </ProductArea>
            <ProductButtons>
                <ProductButton onClick={handleCancelButton} small={true} >Cancelar</ProductButton>
                <ProductButton>Adicionar ao carrinho</ProductButton>
            </ProductButtons>
        </Container>
    );
}