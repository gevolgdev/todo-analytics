import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 3rem 2rem;

  h1 {
    font-size: 2rem;
    color: white;
  }

  .tasks {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .task {
      font-family: 'Inter Tight', sans-serif;
      font-size: 1rem;
      color: white;
      background: #323644;
      padding: 1rem;
      border-radius: 8px;
    }
  }
`;