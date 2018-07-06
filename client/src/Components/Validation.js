import React, { Component } from 'react'
import styled from "styled-components"

const StyledSvg= styled.svg `
    width: ${props=>(props.size?props.size:"1em")};
    height: ${props=>(props.size?props.size:"1em")};
      color:${props =>props.theme.secondary};
      fill: currentColor;
      display: inline-block;
      font-size: 5rem;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      user-select: none;
      flex-shrink: 0;
      margin:auto;

`;

export default class checked extends Component {
  render() {
    return (
      <StyledSvg width="500px" height="500px" viewBox="0 0 500 500" version="1.1">
    <title>checked Icon</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <path style={{fill:'#C2FB3B'}} d="M505.182,113.795l-65.836-65.834c-9.089-9.09-23.827-9.089-32.917,0L256,198.392l-84.594,84.594
	l-65.839-65.839c-4.365-4.365-10.285-6.817-16.459-6.817c-6.173,0-12.094,2.452-16.458,6.818L6.818,282.988
	c-9.09,9.09-9.09,23.827,0,32.917l148.124,148.133c4.363,4.365,10.285,6.817,16.458,6.817c6.174,0,12.094-2.453,16.458-6.817
	l68.141-68.141l249.184-249.184c4.365-4.365,6.818-10.285,6.818-16.458C511.999,124.081,509.547,118.16,505.182,113.795z"/>
<path style={{fill:'#9CDD05'}} d="M154.942,464.039c4.363,4.365,10.285,6.818,16.458,6.818c6.174,0,12.094-2.453,16.458-6.818
	l68.141-68.141V198.394l-84.594,84.594l-65.839-65.839c-4.365-4.365-10.285-6.817-16.458-6.817c-6.173,0-12.094,2.452-16.458,6.818
	L6.818,282.988c-9.09,9.09-9.09,23.827,0,32.917L154.942,464.039z"/>
       
</StyledSvg>
    )
  }
}
