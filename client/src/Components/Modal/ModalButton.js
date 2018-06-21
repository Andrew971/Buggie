import styled from "styled-components";

export default styled.button`
  background: ${props => (props.primary ? "transparent" : "transparent")};
  color: ${props => (props.primary ? props.theme.modal.primary : props.theme.modal.color)};
  font-size: 1.2rem;
  margin:  1.2rem 0.2em;
  text-align:center;
  padding: 0.05em 1em;
  border: ${props => (props.primary ? `2px solid ${props.theme.modal.primary}` :`2px solid ${props.theme.modal.secondary}`)};
  border-radius: 50px;
  cursor:pointer;
  &:hover{
    border: ${props => (props.primary ? `2px solid ${props.theme.modal.primary}` : `2px solid ${props.theme.modal.secondary}`)};
  }

  @media (min-width: 660px) {

  }
`;
