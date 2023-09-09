import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 50rem;

  padding: 1rem;
  margin: 0 auto;

  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;

    align-self: flex-start;
    margin-bottom: 3rem;
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Option = styled.div`
  background-color: ${({ selected, theme }) =>
    selected ? theme.COLORS.DARK_800 : ""};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex: 1;

  padding: 1.8rem;

  border: 1px solid #ccc;
  border-radius: ${({ isFirst, isLast }) =>
    isFirst ? "4px 0 0 0" : isLast ? "0 4px 0 0" : "none"};

  cursor: pointer;
`;
