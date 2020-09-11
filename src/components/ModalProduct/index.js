import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
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

toast.configure()
export default ({ data, setStatus }) => {
    const dispatch = useDispatch();
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

    const ShowToast = () => {
        toast.info('Produto adicionado ao carrinho!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_PRODUCT',
            payload: {data, quantity}
        });
        setStatus(false);   
        ShowToast();
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
                <ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</ProductButton>
            </ProductButtons>
        </Container>
    );
}