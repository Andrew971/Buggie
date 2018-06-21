import styled,{css} from "styled-components";
import {media} from './breakpoint'

const ContainerDevice = (device) => css`
${media[device]`
display:${props=>props.display?props.display:'flex'};
flex-wrap: ${props=>props.wrap?props.wrap:'nowrap'};
flex-direction:${props=>props.direction?props.direction:'column'};
align-items: ${props=>props.alignItems?props.alignItems:'flex-start'};
justify-content:${props=>props.justify?props.justify:'space-evenly'};
`}
`;
const ItemsDevice = (device) => css`
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

const Container = css`
display: flex;
flex-wrap: nowrap;
flex-direction:column;
align-items: flex-start;
justify-content:space-evenly;
flex:1 1 auto;

${props=>props.xs&&ContainerDevice('phone')}
${props=>props.md&&ContainerDevice('tablet')}

${props=>props.lg&&ContainerDevice('laptop')}
${props=>props.xl&&ContainerDevice('desktop')}
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

${props=>props.xs&&ItemsDevice('phone')}
${props=>props.md&&ItemsDevice('tablet')}

${props=>props.lg&&ItemsDevice('laptop')}
${props=>props.xl&&ItemsDevice('desktop')}
`;

export default styled.div`
${props=>props.container&&Container}
${props=>props.items&&Items}

`;
