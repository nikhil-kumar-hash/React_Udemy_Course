import React from 'react';
// import './Person.css'
import styled from 'styled-components'

const StyledDiv = styled.div`

width : 60px;
margin: 16px auto;
border : 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

@media (min-width: 500px) {
width : 450px;
}
`
const person = (props) => {

    return (
       // <div className= "Person">
       <StyledDiv>
    <p onClick={props.click}>I'm {props.name} who's {props.age} years old! {props.children}</p>
    <input type="text" onChange ={props.changed} value={props.name}/>
    </StyledDiv>
    )
}

export default person;