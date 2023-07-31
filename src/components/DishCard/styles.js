import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: clamp(20rem, 12rem + 10vw, 28rem);
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.3rem, 0.2rem + 1vw, 1.2rem);

  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.6rem;

  padding: 2.4rem;

  > img {
    width: clamp(8rem, 4rem + 10vw, 15rem);
  }

  > h2 > a {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: clamp(1.5rem, 0.9rem + 3vw, 2.5rem);
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > span {
    display: flex;
    align-items: center;
    font-size: clamp(1.7rem, 0.6rem + 1vw, 2.5rem);
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  > svg {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }

`