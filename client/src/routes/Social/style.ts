import styled from "styled-components";

export const Container = styled.section`

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem;

  .menuButton {
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border: none;
    width: 30px;
    height: 30px;
    font-size: 1.3rem;
    border-radius: 100px;
  }
}
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .8rem;
  border-radius: 7px;
  border: none;
  background: #D7CAFF;
  cursor: pointer;
  max-height: 40px;

  svg {
    font-size: 1.5rem;
    color: #4C4C4C;
  }
  input {
    font-family: 'Inter Tight';
    font-size: 1rem;
    padding: .5rem;
    background: transparent;
    outline: none;
    border: none;
  }
  button {
    display: flex;
    align-items: center;
    opacity: 70%;
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 20px;
`;