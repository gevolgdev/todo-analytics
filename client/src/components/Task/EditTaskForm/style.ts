import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0; top: 0;
  z-index: 99;
  display: flex;
  background: rgb(0,0,0, 0.8);
  width: 100%;
  height: 100vh;
  `;

export const Content = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--white-color);
  width: 100%;
  height: 60vh;
  padding: 2rem;

  h1 {
    font-size: 1.8rem;
    color: var(--background-color);
    svg {
      margin-right: 5px;
    }
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 7px;
    
    label {
      font-size: 1rem;
      color: var(--detailText-color)
    }
    input {
      border: none;
      background: #cbd5e1;
      border-radius: 4px;
      font-size: 1rem;
      padding: 1rem 0.6rem;
      color: var(--background-color);

      &:focus {
        outline: solid 1px #2089E7;
      }
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  button {
    flex: 1;
    border-radius: 15px;
    font-size: 1rem;
    padding: 1rem 0;
  }
  .add {
    background: #22c55e;
    border: none;
  }
  .cancel {
    background: transparent;
    border: solid 1px #1f2937;
    color: #1f2937;
  }
`;