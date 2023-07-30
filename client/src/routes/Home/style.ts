import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  h1 {
    font-size: 1.5rem;
    color: var(--detailText-color);
    margin-bottom: 1rem;
  }

  .tasks {
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

export const Image = styled.div`
  display: flex;
  background: rgb(64, 123, 255, 0.3);
  justify-content: center;
  padding: 1rem 0;

  img {
    width: 200px;
  }
`;