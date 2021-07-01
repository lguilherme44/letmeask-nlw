import styled from "styled-components";

export const AsideStyled = styled.aside`
  flex: 7;
  background: #2f323a;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px "Poppins", sans-serif;
    line-height: 42px;
    margin-top: 1rem;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 1rem;
    color: #f8f8f8;
  }
`;
