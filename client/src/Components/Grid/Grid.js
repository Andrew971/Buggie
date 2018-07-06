import styled,{css} from "styled-components";
import {media} from './breakpoint'

const containerDevice = (device) => css`
  ${media[device]`
    display:${props=>props.display?props.display:'grid'};
    flex-wrap: ${props=>props.wrap?props.wrap:'nowrap'};
    flex-direction:${props=>props.direction?props.direction:'column'};
    align-items: ${props=>props.alignItems?props.alignItems:'flex-start'};
    justify-content:${props=>props.justify?props.justify:'space-evenly'};
    ${props=>props.grid
      ?css`grid-template-columns:${props=>`repeat(${props.grid}, 1fr)`};`
      :css`grid-template-columns: ${props=>props.autoFit?'repeat(auto-fit, minmax(12rem, 1fr))':'repeat(auto-fill, minmax(13rem, 1fr))'} ;`
    }
  `}
`;


const containerControlled = (props,device) =>{
  const { display,
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
    gridTemplateColumns } = props
  return css`
    ${media[device]`
      display:${display?display:'grid'};
      flex-wrap:${flexWrap?flexWrap:'nowrap'};
      flex-direction:${flexDirection?flexDirection:'column'};
      align-items:${alignItems?alignItems:'flex-start'};
      justify-content:${justifyContent?justifyContent:'space-evenly'};
      grid-template-columns:${gridTemplateColumns?gridTemplateColumns:'repeat(auto-fill, minmax(15rem, 1fr))'};
    `}
  `
}


const itemsControlled = (props,device) =>{
  const { display,
    width,
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
    textAlign,
    gridColumns } = props
  return css`
    ${media[device]`
      display:${display?display:'flex'};
      width:${width?width:'100%'};
      flex-wrap:${flexWrap?flexWrap:'nowrap'};
      flex-direction:${flexDirection?flexDirection:'column'};
      align-items:${alignItems?alignItems:'flex-start'};
      justify-content:${justifyContent?justifyContent:'center'};
      text-align:${textAlign?textAlign:'justify'};
      grid-columns:${gridColumns?gridColumns:'span 1'};
    `}
  `
}

const itemsDevice = (device) => css`
  ${media[device]`
    display:${props=>props.display?props.display:'flex'};
    width:${props=>props.width?props.width:'100%'};
    flex-wrap: ${props=>props.wrap?props.wrap:'nowrap'};
    flex-direction:${props=>props.direction?props.direction:'column'};
    align-items: ${props=>props.alignItems?props.alignItems:'flex-start'};
    justify-content:${props=>props.justify?props.justify:'center'};
    text-align:${props=>props.text?props.text:'justify'};
    grid-column:${props=>props.span?`span ${props.span}`:'span 1'};
  `}
`;



const propsChecking = (gridType,props,device)=>{
  if(typeof props === 'object'){
    return gridType === "container"
      ?containerControlled(props,device)
      :itemsControlled(props,device);
  }
  else if(typeof props === 'boolean'){
    return gridType === "container"
      ?containerDevice(device)
      :itemsDevice(device);
  }
}


const Container = css`
  display: grid;
  grid-gap: 3rem;
  justify-items: center;
  align-items: center;
  ${props=>props.grid
    ?css`grid-template-columns:${props=>`repeat(1, 1fr)`};`
    :css`grid-template-columns: ${props=>props.autoFit?'repeat(auto-fit, minmax(15rem, 1fr))':'repeat(auto-fill, minmax(15rem, 1fr))'};`
  }

  ${props=>props.xs&&propsChecking('container',props.xs,'phone')};
  ${props=>props.md&&propsChecking('container',props.md,'tablet')};
  ${props=>props.lg&&propsChecking('container',props.lg,'laptop')};
  ${props=>props.xl&&propsChecking('container',props.xl,'desktop')};
`;

const Items = css`
  justify-self:center;
  align-self: center;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
  width:100%;
  height:100%;
  grid-column:span 1;

  h1,h2,h3,h4,h5,h6{
    margin-top:2rem;
  }

  p{
  /* word-wrap: break-word; */
    text-align:justify;
  }

  ${props=>props.xs&&propsChecking('items',props.xs,'phone')};
  ${props=>props.md&&propsChecking('items',props.md,'tablet')};
  ${props=>props.lg&&propsChecking('items',props.lg,'laptop')};
  ${props=>props.xl&&propsChecking('items',props.xl,'desktop')};
 
`;



export default styled.div`
  ${props=>props.container&&Container};
  ${props=>props.items&&Items};

`;
