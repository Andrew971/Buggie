import styled from "styled-components";

export default styled.div`
padding:1.2rem;
border: ${props => (`1px solid ${props.theme.modal.primary}`)};
color:${props => (props.theme.modal.primary)};
margin-bottom: 5rem;
text-align:center;
font-size: 1.3rem;
  @media (min-width: 660px) {
    border-radius:5rem;

  }
`;
