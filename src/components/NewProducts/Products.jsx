import React from 'react';
import {Button, Row} from 'antd'
import { StyledContainer } from '../../styles/Container.style';
import PageHeader from '../PageHeader/PageHeader';
import ProductCard from './ProductCard';
import CardImg from '../../assets/img/category-oil.svg'
// import { StyledBtn } from './Button.style';
import {btnStyle} from './Button.style'

const Products = (props) => {
    let item = [1,2,3,4,5,6,7,8]
    // const btnStyle = {
    //     margin
    // }
    return (
        <StyledContainer>
            <div className="container">
                <PageHeader title={props.headTitle}/>
                <Row gutter={[20,50]}>
                {
                    item.map((item,index)=> {
                        return(
                            <ProductCard key={index} img={CardImg} title="Антифриз концентрат HEPU 1.5 л/Красный" price="$149"/>
                        )
                    })
                }
                </Row>
                <div style={{width:'100%',display: 'flex',alignItems: 'center', justifyContent: 'center', margin: "40px"}}>
                    <Button className="btn_read_more" style={{width:'100%', maxWidth: "421px"}} size="large" type="primary" ghost>Показать ещё</Button>
                </div>
            </div>
        </StyledContainer>
            
    );
}

export default Products;
