import React,{useState} from 'react';
import {Col,Button} from 'antd'
import { StyledProductCard } from './ProductCardStyle';

const ProductCard = ({img='',title='',price=''}) => {
    const [state,setState] = useState(0)


    const increment = ()=>{
        setState((prev)=> prev + 1)
    }
    const decrement = ()=>{
        if(state > 0){
            setState((prev)=> prev - 1)
        }
    }
    return (
        <Col md={{
            span: 12,
        }}
        lg={{
            span: 6,
        }}
        style={{margin:'auto'}}
        >
        <StyledProductCard>
            <div>
                <img src={img} alt="oilImg" />
            </div>
            <div className="card-body">
                <h3>{title}</h3>
                <h2>{price}</h2>
            </div>
            <div className="card-footer">
                <div>
                    <span onClick={decrement} className="counter">-</span>
                    <span>
                        {state} sht
                    </span>
                    <span onClick={increment} className="counter"> +</span>
                </div>
                <Button type="primary">
                    В корзину
                </Button>
            </div>
        </StyledProductCard>
        </Col>
    );
}

export default ProductCard;
