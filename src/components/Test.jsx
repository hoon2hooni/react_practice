import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    font-weight: bold;

    .main{
        background-color: gray;    
    }
    .submain {
        font-size: 2.5rem;
    }

`;

const Test = () => {
    return (
    <Root>
        <h1 className = "main">테스트 중입니다 </h1>
        <p className = "sub-main">리엑트 참 재밌네;;</p>
    </Root>);
};

export default Test;