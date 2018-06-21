import styled,{css} from "styled-components";
import {media} from './breakpoint'
const ContainerDevice = (device) => css`
${media[device]`
display:${props=>props.display?props.display:'grid'};
flex-wrap: ${props=>props.wrap?props.wrap:'nowrap'};
flex-direction:${props=>props.direction?props.direction:'column'};
align-items: ${props=>props.alignItems?props.alignItems:'flex-start'};
justify-content:${props=>props.justify?props.justify:'space-evenly'};
${props=>props.grid
  ?css`
  grid-template-columns:${props=>`repeat(${props.grid}, 1fr)`};
`
:css`
grid-template-columns: ${props=>props.autoFit?'repeat(auto-fit, minmax(15rem, 1fr))':'repeat(auto-fill, minmax(20rem, 1fr))'} ;
`
}
`}
`;
const ItemsDevice = (device) => css`
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

const Container = css`
display: grid;
grid-gap: 3rem;
${props=>props.grid
  ?css`
  grid-template-columns:${props=>`repeat(1, 1fr)`};
`
:css`
grid-template-columns: ${props=>props.autoFit?'repeat(auto-fit, minmax(15rem, 1fr))':'repeat(auto-fill, minmax(20rem, 1fr))'} ;
`
}

justify-items: center;
align-items: center;

${props=>props.xs&&ContainerDevice('phone')}
${props=>props.md&&ContainerDevice('tablet')}

${props=>props.lg&&ContainerDevice('laptop')}
${props=>props.xl&&ContainerDevice('desktop')}

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

${props=>props.xs&&ItemsDevice('phone')}
${props=>props.md&&ItemsDevice('tablet')}

${props=>props.lg&&ItemsDevice('laptop')}
${props=>props.xl&&ItemsDevice('desktop')}
`;

export default styled.div`
${props=>props.container&&Container}
${props=>props.items&&Items}

`;
