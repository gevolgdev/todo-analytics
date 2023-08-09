import styled from "styled-components";
import SPACE_IMAGE from '../../assets/background-space.jpg';

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
  background-image: url(${SPACE_IMAGE});
  background-position: center;
  background-size: cover;
  position: relative;
  justify-content: center;
  padding: 0.5rem 0;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(64, 123, 255, 0.5);
    z-index: 0;
  }
  img {
    width: 250px;
    position: relative;
    z-index: 1;
  }

  .menuButton {
    position: absolute;
    left: 15px;
    top: 15px;
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
`;