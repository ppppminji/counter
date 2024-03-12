import React, { useState } from 'react';
import styled from 'styled-components';

const Button=styled.button`
    background: pink;
    border-radius: 3px;
    border: 2px solid #ddd;
    margin: 0 15px;
    padding: 15px 40px;
    font-size: 30px;
    color: deeppink;
`
const Container=styled.div`
    width: 500px;
    height: 300px;
    margin: 50px auto;
    padding: 30px 60px;
    border: 5px solid #deb887;
    background: #bc8f8f;
`

const Counter = () => {
    const [count, setCount] = useState(0);
       
    const onIncrease = () => {
        setCount(count+1);
    }
    const onDecrease = () => {
        setCount(count-1);
    }
    return (
        <Container>
            <h1>{count}</h1>
            <Button onClick={onDecrease}>-</Button>
            <Button onClick={onIncrease}>+</Button>
        </Container>
    );
};

export default Counter;