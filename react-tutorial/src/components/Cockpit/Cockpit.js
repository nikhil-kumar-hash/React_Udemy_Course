import React, {useEffect} from 'react';
import './Cockpit.css'
import styled from 'styled-components';


const StyledButton = styled.button `

background-color : ${props => props.alt ? 'red' : 'green'};
color : white;
font : inherit;
border : 1px solid blue;
padding : 8px;
cursor : pointer;

&:hover {
  background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  color : black;
}

`

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect ');
        setTimeout(() =>{
          //  alert('Saved data to cloud!')
        },1000);

        return () => {
            console.log('[Cockpit.js] Cleaning Up Now!!')
        }

    },[])

    let classes = [];
    if(props.persons.length <= 2) classes.push('red')

    if(props.persons.length <= 1) classes.push('bold')

    return (
        <div className="Cockpit">
        <h1>{props.title}</h1>
        <p className={classes.join(' ')}> This is really working</p>
        <StyledButton onClick={props.toggled}> Toggle Display </StyledButton>
       </div>
    );
}

export default cockpit;