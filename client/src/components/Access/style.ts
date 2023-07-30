import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  img {
    width: 140px;
    height: 140px;
  }
  
  h1 {
    font-size: 2.5rem;
    margin: 0 auto 3rem 0;
    color: white;
  }

  .inputs {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .input {
      display: flex;
      flex-direction: column;
      gap: 7px;
      
      label {
        font-size: 1rem;
        color: white;
      }
      input {
        border: none;
        background: #323644;
        border-radius: 4px;
        font-size: 1rem;
        padding: 1rem 0.6rem;
        color: white;

        &:focus {
          outline: solid 1px #2089E7;
        }
      }
    }
  }

  button {
    margin-top: 2rem;
    border: none;
    background: #2089E7;
    outline: none;
    color: white;
    font-size: 1rem;
    text-align: center;
    padding: 1rem;
    width: 100%;
    border-radius: 7px;
  }
`;

export const Links = styled(Link)`
  font-size: 0.8rem;
  margin: 1rem auto 0 0;
  text-decoration: none;
  color: #878F9F;

  strong {
    color: #2089E7;
  }
`