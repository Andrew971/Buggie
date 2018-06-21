import styled from "styled-components";

export default styled.div`
background-color: #fefefe;
margin: 10vh auto; /* 10% from the top and centered */
padding: 2rem;
border: 1px solid #888;
width: 100%; /* Could be more or less, depending on screen size */

@media (min-width: 660px) {
  padding: 2rem 5rem;
  width: 80%; /* Could be more or less, depending on screen size */

}
  `;
