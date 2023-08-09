import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  background: var(--gray-color);
  width: 300px;
  height: 100%;
  z-index: 99;
  padding: 2rem 0;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 1.5rem;

    h1 { 
      font-size: 1.5rem;
      color: white;
      span {
        font-weight: 200;
        color: rgba(255, 255, 255, 0.7);

      }
    }
    button {
      position: absolute;
      right: -20px;
      background: var(--gray-color);
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      color: var(--detailText-color);
      font-size: 2rem;
      border-radius: 100px;
      width: 45px;
      height: 45px;
    }
  }

  .mainOptions {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 3rem;
    border-bottom: solid 1px var(--detailText-color);

    .tasksLength {
      display: flex;
      align-items: center;
      justify-content: center;
      border: solid 2px var(--detailText-color);
      border-radius: 5px;
      width: 30px;
      height: 30px;
      margin-left: auto;
      font-size: 1rem;
    }
  }

  .options {
    display: flex;
    flex-direction: column;
  }
`;

export const Option = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1.5rem;
  gap: 1rem;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  background: transparent;
  border: none;

  &:hover {
    background-color: rgba(32, 137, 231, 0.2);
  }
`;