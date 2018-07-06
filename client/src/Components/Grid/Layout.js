import styled,{css} from "styled-components";
import {media} from './breakpoint'

const containerDevice = (device) => css`
  ${media[device]`
    display:${props=>props.display?props.display:'flex'};
    flex-wrap: ${props=>props.wrap?props.wrap:'nowrap'};
    flex-direction:${props=>props.direction?props.direction:'column'};
    align-items: ${props=>props.alignItems?props.alignItems:'flex-start'};
    justify-content:${props=>props.justify?props.justify:'space-evenly'};
  `}
`;

const containerControlled = (props,device) =>{
  const { display,
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
     } = props
  return css`
    ${media[device]`
    display:${display?display:'flex'};
    flex-wrap:${flexWrap?flexWrap:'nowrap'};
    flex-direction:${flexDirection?flexDirection:'column'};
    align-items:${alignItems?alignItems:'flex-start'};
    justify-content:${justifyContent?justifyContent:'space-evenly'};
    `}
  `
}


const itemsDevice = (device) => css`
  ${media[device]`
    display:${props=>props.display?props.display:'flex'};
    width:${props=>props.width?props.width:'100%'};
    flex-wrap: ${props=>props.wrap?props.wrap:'nowrap'};
    flex-direction:${props=>props.direction?props.direction:'column'};
    align-items: ${props=>props.alignItems?props.alignItems:'center'};
    justify-content:${props=>props.justify?props.justify:'center'};
    text-align:${props=>props.text?props.text:'left'};
  `}
`;

const itemsControlled = (props,device) =>{
  const { display,
    width,
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
    textAlign,
     } = props
  return css`
    ${media[device]`
      display:${display?display:'flex'};
      width:${width?width:'100%'};
      flex-wrap:${flexWrap?flexWrap:'nowrap'};
      flex-direction:${flexDirection?flexDirection:'column'};
      align-items:${alignItems?alignItems:'center'};
      justify-content:${justifyContent?justifyContent:'center'};
      text-align:${textAlign?textAlign:'left'};
    `}
  `
}



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
  display: flex;
  flex-wrap: nowrap;
  flex-direction:column;
  align-items: flex-start;
  justify-content:space-evenly;
  flex:1 1 auto;

  ${props=>props.xs&&propsChecking('container',props.xs,'phone')};
  ${props=>props.md&&propsChecking('container',props.md,'tablet')};
  ${props=>props.lg&&propsChecking('container',props.lg,'laptop')};
  ${props=>props.xl&&propsChecking('container',props.xl,'desktop')};
`;

const Items = css`
  display:flex;
  width:100%;
  flex-wrap: nowrap;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  padding:${props=>props.padding?props.padding:'1.5rem'};
  text-align:left;
  
  ${props=>props.xs&&propsChecking('items',props.xs,'phone')};
  ${props=>props.md&&propsChecking('items',props.md,'tablet')};
  ${props=>props.lg&&propsChecking('items',props.lg,'laptop')};
  ${props=>props.xl&&propsChecking('items',props.xl,'desktop')};
`;



export default styled.div`
  ${props=>props.container&&Container};
  ${props=>props.items&&Items};
`;
