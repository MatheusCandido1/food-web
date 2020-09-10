import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { Container, CategoryArea, CategoryList } from './styled';

import Header from '../../components/Header';

import CategoryItem from '../../components/CategoryItem';

import api from '../../api';
export default () => {
    const [categories, setCategories] = useState([]);
    const [headerSearch, setHeaderSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState(0);
    const history = useHistory();


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

    }, [activeCategory]);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />

            {categories.length > 0 &&
                <>
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
                </>
            }
            
        </Container>
    );
}