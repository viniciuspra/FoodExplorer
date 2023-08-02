import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  margin: 2.4rem 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  text-align: center;
  font-family: "Poppins", serif;

  color: ${({ theme }) => theme.COLORS.WHITE_300};
  > img {
    max-width: 35rem;
  }

  > h3 {
    font-size: 2.7rem;
    font-weight: 500;
  }
  > p {
    font-size: 1.4rem;
    font-weight: 400;
  }

  > ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    list-style: none;
    font-size: 1.3rem;

    > li {
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      border-radius: 0.4rem;
      margin-top: 1rem;
      padding: 0.3rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin: 4rem 4rem 0;
`