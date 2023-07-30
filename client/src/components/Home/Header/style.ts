import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  .texts {
    display: flex;
    flex-direction: column;
    .welcome {
      color: var(--detailText-color);
      margin-bottom: 0.6rem;
    }
    .hello {
      font-size: 1.6rem;
      color: white;
      font-weight: 500;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: var(--secondary-color);
    border: none;
    color: white;
    font-size: 1.3rem;
    border-radius: 100px;
  }
`;