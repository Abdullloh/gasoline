import React from 'react';
import {Row} from 'antd'
import { StyledContainer } from '../../styles/Container.style';
import PageHeader from '../PageHeader/PageHeader';
import ProductCard from './ProductCard';
import CardImg from '../../assets/img/category-oil.svg'

const Products = () => {
    let item = [1,2,3,4,5,6,7,8]
    return (
        <StyledContainer>
            <div className="container">
                <PageHeader title="Новые товары"/>
                <Row gutter={[20,50]}>
                {
                    item.map((item,index)=> {
                        return(
                            <ProductCard key={index} img={CardImg} title="Антифриз концентрат HEPU 1.5 л/Красный" price="$149"/>
                        )
                    })
                }
                </Row>
            </div>
        </StyledContainer>
            
    );
}

export default Products;
