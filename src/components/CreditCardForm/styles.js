import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 3rem;
`;

export const Form = styled.form`
  display: grid;
  grid-template-areas: "credit credit" "expiring cvc" "button button";
  align-items: center;
  justify-content: center;
  gap: 3rem;

  max-width: 35rem;
  margin: 0 auto;

  > label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  > label > div {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    border: 1px solid #fff;
  }
  > label:nth-child(1) {
    grid-area: credit;
  }
  > label:nth-child(2) {
    grid-area: expiring;
  }
  > label:nth-child(3) {
    grid-area: cvc;
  }

  > button {
    grid-area: button;
  }
`;
