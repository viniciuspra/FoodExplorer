import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  margin-top: 5rem;
  padding: 0 5.6rem;

  > label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  > a {
    font-family: "Poppins", serif;
    font-size: clamp(1.6rem, 1rem + 1vw, 2rem);
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
  }
`;
