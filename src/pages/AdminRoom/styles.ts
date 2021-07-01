import styled, { css } from "styled-components";
import { lighten } from "polished";

import { Button } from "../../components/Button";

export const Container = styled.main`
  max-width: 820px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const ContentHeader = styled.section`
  ${({ theme }) => css`
    margin-top: 6.4rem;
    display: flex;
    align-items: center;
    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 2.4rem;
      font-weight: bold;
      color: ${theme.colors.black};
      margin-right: 1.6rem;
    }
    span {
      padding: 0.8rem 1.6rem;
      font-size: 1.4rem;
      font-weight: 500;
      color: ${theme.colors.background};
      background: ${lighten(0.15, theme.colors.primary)};
      border-radius: 5rem;
    }
  `}
`;

export const ContentBody = styled.section`
  width: 100%;
  margin-top: 2.4rem;
`;

export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    p {
      font-size: 1.4rem;
      font-weight: 500;
      color: ${theme.colors.grayDark};
      a {
        color: ${theme.colors.primary};
        text-decoration: underline;
        margin-left: 0.4rem;
        &:hover {
          color: ${theme.colors.secondary};
        }
      }
    }
  `}
`;

export const UserInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    img {
      width: 3.8rem;
      height: 3.8rem;
      border-radius: 50%;
    }
    strong {
      font-size: 1.4rem;
      font-weight: 500;
      color: ${theme.colors.black};
      margin-left: 0.8rem;
    }
  `}
`;

export const SendQuestionButton = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    margin-left: auto;
    &:not(:disabled):hover {
      background: ${lighten(0.07, theme.colors.primary)};
    }
  `}
`;
