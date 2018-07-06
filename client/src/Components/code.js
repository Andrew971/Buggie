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

`;

export default class Code extends Component {
  render() {
    return (
      <StyledSvg width="500px" height="500px" viewBox="0 0 500 500" version="1.1">
    <title>Code Icon</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
            <path d="M0,0 L0,83 L500,83 L500,0 L0,0 Z M302.050781,51.862837 L52.0507812,51.862837 L52.0507812,31.137163 L302.050781,31.137163 L302.050781,51.862837 Z M375,51.862837 L354.199219,51.862837 L354.199219,31.137163 L375,31.137163 L375,51.862837 Z M416.699219,51.862837 L395.898437,51.862837 L395.898437,31.137163 L416.699219,31.137163 L416.699219,51.862837 Z M458.300781,51.862837 L437.5,51.862837 L437.5,31.137163 L458.300781,31.137163 L458.300781,51.862837 Z" id="Shape"></path>
            <path d="M0,500 L500,500 L500,104 L0,104 L0,500 Z M325.976562,215.649729 L340.722656,200.899852 L420.996094,281.193883 L340.722656,361.487913 L325.976562,346.738037 L391.503906,281.193883 L325.976562,215.649729 Z M282.03125,173.060681 L301.367187,180.972866 L207.617187,410.230883 L188.28125,402.318698 L282.03125,173.060681 Z M159.277344,200.899852 L174.023437,215.649729 L108.496094,281.193883 L174.023437,346.738037 L159.277344,361.487913 L79.0039062,281.193883 L159.277344,200.899852 Z" id="Shape"></path>
       
</StyledSvg>
    )
  }
}
