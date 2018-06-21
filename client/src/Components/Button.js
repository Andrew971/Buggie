import styled from "styled-components";

export default styled.button`
  background: ${props => (props.primary ? "transparent" : "transparent")};
  color: ${props => (props.primary ? props.theme.primary : props.theme.color)};
  font-size: 1.5rem;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: ${props => (props.primary ? `2px solid ${props.theme.primary}` :`2px solid transparent`)};
  border-radius: 50px;
  &:hover{
    border: ${props => (props.primary ? `2px solid ${props.theme.primary}` : `2px solid ${props.theme.color}`)};
  }
`;
