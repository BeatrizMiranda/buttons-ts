import styled from "styled-components";

export const GifList = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
