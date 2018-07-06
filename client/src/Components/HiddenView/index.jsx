import styled,{css} from "styled-components";
import {media} from './breakpoint'


const ItemsDevice = (device) => css`
${media[device]`
  display:none;
`}
`;

export default styled.div`
  display: block;

${props=>props.xs&&ItemsDevice('phone')}
${props=>props.md&&ItemsDevice('tablet')}
${props=>props.lg&&ItemsDevice('laptop')}
${props=>props.xl&&ItemsDevice('desktop')}

`;
