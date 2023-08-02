import styled from "styled-components";

interface ContainerProps {
  done: string;
};

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  background: var(--gray-color);
  padding: 1.5rem;
  border: ${({ done }) => (done == '0' && 'solid 1px var(--secondary-color)') || (done == '1' && 'solid 1px var(--gray-color)')};
  border-radius: 8px;
  opacity: ${({ done }) => done == '1' && '30%' || done == '0' && 'none'};
  gap: 0.6rem;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 18px;
      height: 18px;
      border: solid 1px white;
      border-radius: 3px;
      background: transparent;
      color: white;
      font-size: 1rem;
    }
    
    .title {
      text-decoration: ${({ done }) => done == '1' && 'line-through' || done == '0' && 'none'};
      font-family: var(--secondary-font);
      font-size: 1.8rem;
      color: white;
    }
  }
  .desc {
    font-family: var(--secondary-font);
    color: rgb(255, 255, 255, 0.7);
    font-weight: 300;
    
    span {
      color: white;
      font-weight: 600;
    }
  }
  .date {
    display: flex;
    gap: 0.5rem; 
    font-family: var(--secondary-font);
    font-size: 0.8rem;
    color: var(--detailText-color);
    /* margin: 1rem 0 0 0; */
  }

  .buttons {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    gap: 1rem;

    button {
      border: none;
      background: transparent;
      padding: 0.5rem 0;
      width: 80px;
      border-radius: 7px;

    }
    .edit {
      color: var(--background-color);
      background: var(--white-color);
    }
    .del {
      color: var(--red-color);
      border: solid 1px var(--red-color);
    }
  }
`;

const shouldForwardProp = (prop: string) => prop !== "done";

export default styled(Container).withConfig({ shouldForwardProp })``;