import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  font-size: 30px;
  .isloading{

  }
`

const Counter = () => {
    const [count, setCount] = React.useState(0);
    const [loading, setLoading] = React.useState(false);

    const raiseNumberHandler = () =>{
      setCount((c) => c + 1);
    };
    
    const dropNumberHandler = () =>{
      setCount((c) => c - 1);
      
    };

    const resetNumberHandler = () => {
      setCount(0);
      // setCount((c) => 0);
    };
    
    const loadingHandler = () => {
      setLoading((c)=> !c);
    }
    
    return (<Root>
        
        {count > 5 && <div>{count}</div>}  
        {loading ? <p style = {{ fontSize: '100px', color:'red' }}>loading.....</p> : <p>ok</p>}
        <button onClick = {raiseNumberHandler}>up</button>

        {/* <button onClick ={() => setCount((c) => c + 1)}>up</button> */}
        <button onClick = {dropNumberHandler}>down</button>
        <button onClick = {resetNumberHandler}>reset</button>
        <button onClick = {loadingHandler}> {loading ? '똥컴이네' : 'OK'} </button>
        
        
    </Root>)

    
}


export default Counter;