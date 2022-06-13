import React from 'react';
import { StyledContainer } from '../../styles/Container.style';

const Text = (props) => {
    const {heading,text} = props
    return (
        <StyledContainer>
            <div className="container">
                <h1>{heading}</h1>
                <p>{text}</p> 
            </div>
        </StyledContainer>
    );
}

export default Text;
