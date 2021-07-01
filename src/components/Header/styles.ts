import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 20px;
  border-bottom: 1px solid #eeff4b;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
    cursor: pointer;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: 10px;

    .header-buttons-div {
      display: flex;
      flex-direction: column;
    }
  }

  > div {
    display: flex;
    gap: 16px;

    button {
      height: 40px;
    }
  }
`;
