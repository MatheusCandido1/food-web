import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { 
    CartArea, 
    CartHeader, 
    CartBody, 
    CartIcon, 
    CartText, 
    ProductsArea,
    ProductItem,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductInfoArea,
    ProductControlArea,
    ProductIcon,
    ProductQuantity
} from './styled';

export default () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);

    const [show, setShow] = useState(true);

    const handleCartClick = () => {
        setShow(!show);
    }

    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: {key, type}
        });
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu Carrinho ({products.length})</CartText>
                {show && <CartIcon src="/assets/down.png" /> }

            </CartHeader>
            <CartBody show={show}>
              <ProductsArea>
                  {products.map((item, index) => (
                      <ProductItem key={index}>
                      <ProductImage src={item.image}/>
                      <ProductInfoArea>
                          <ProductName>{item.name}</ProductName>
                          <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
                      </ProductInfoArea>
                      <ProductControlArea>
                        <ProductIcon 
                            src="/assets/minus.png" 
                            onClick={()=>handleProductChange(index, '-')}
                        />
                            <ProductQuantity>{item.quantity}</ProductQuantity>
                        <ProductIcon 
                            src="/assets/plus.png" 
                            onClick={()=>handleProductChange(index, '+')}
                        />
                      </ProductControlArea>
                  </ProductItem>
                  ))}
              </ProductsArea>
            </CartBody>
        </CartArea>
    );
}