import { Col, Row } from 'antd';
import React from 'react';
import { StyledContainer } from '../../styles/Container.style';
import PartnerBodyImage from '../../assets/img/PartnerBodyImage.svg';

const BodyInfo = (props) => {
  const {img} = props
    return (
        <StyledContainer>
          <div className="container">
            <Row>
                <Col
                    style={{width:'100%'}}
                   sm={{
                    span: 24,
                    offset: 0,
                  }}
                  lg={{
                    span: 12,
                    offset: 0,
                  }}>
                        <img src={img} className="partnerImage" alt="PartnerImage" />
                </Col>   
                <Col
                    style={{width:'100%'}}
                   sm={{
                    span: 24,
                    offset: 0,
                  }}
                  lg={{
                    span: 12,
                    offset: 0,
                  }}>
                    <h2>Партнёрская сеть — это выгодно и просто!GASOIL предоставляет магазинам и предпринимателям возможность получить полный комплекс услуг на одной площадке.Вам не надо тратиться на маркетинг, искать различные источники трафика. Мы предоставим вам вышеперечисленные услуги и гарантирукмБлагодаря нативности инструментов средний CTR на площадках наших партнёров — 9%. В некоторых случаях этот показатель достигает </h2>
                </Col>   
            </Row>  
          </div>  
        </StyledContainer>
    );
}

export default BodyInfo;
