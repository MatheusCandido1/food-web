import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { 
    Container, 
    CategoryArea, 
    CategoryList, 
    ProductArea, 
    ProductList,
    ProductPaginationArea,
    ProductPaginationItem
} from './styled';

import Header from '../../components/Header';

import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';


import api from '../../api';
export default () => { 
    const history = useHistory();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [headerSearch, setHeaderSearch] = useState('');
    const [pages, setPages] = useState(0);

    const [activeCategory, setActiveCategory] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeSearch, setActiveSearch] = useState('');


    const getProducts = async () => {
        const params = new URLSearchParams()
        if(activeCategory !== 0)
            params.append('category', activeCategory)
        if(currentPage > 0)
            params.append('page', currentPage)
        if(activeSearch != '')
            params.append('search', activeSearch)

        api.get('products', {
            params: params,
        }).then(response => {
           const { result } = response.data;
           setProducts(result.data);
           setPages(result.pages);
           setCurrentPage(result.page);
       });
   }; 

    useEffect(() => {
        const getCategories = async () => {
            api.get('categories').then(response => {
                const { result } = response.data;
                setCategories(result);
                ReactTooltip.rebuild();
            })
        };  
        getCategories();

    }, []);

    useEffect(() => {
        
   

        getProducts();
    }, [activeCategory]);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />

            {categories.length > 0 &&
                    <CategoryArea>
                        Selecione uma categoria
                        <CategoryList>
                            <CategoryItem 
                            data={{
                                id:0, 
                                name:'Todas as categorias', 
                                image:'/assets/food-and-restaurant.png'
                            }} 
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                            />
                            {categories.map((item, index) => (
                                <CategoryItem 
                                    key={index} 
                                    data={item} 
                                    activeCategory={activeCategory}
                                    setActiveCategory={setActiveCategory}
                                />
                            ))}
                        </CategoryList>
                    </CategoryArea>
            }

            {products.length > 0 &&
            <ProductArea>
                <ProductList>
                    {products.map((item, index) => (
                        <ProductItem 
                            key={index}
                            data={item}
                        />
                    ))}
                </ProductList>
            </ProductArea>
            }

            {pages > 0 &&
                <ProductPaginationArea>
                    {Array(currentPage).fill(0).map((item,index) => (
                        <ProductPaginationItem 
                            key={index} 
                            active={currentPage}
                            current={index+1}
                            onClick={()=>setCurrentPage(index+1)}
                        >
                            {index + 1}
                        </ProductPaginationItem>
                    ))}
                </ProductPaginationArea>
            }   
        </Container>
    );
}