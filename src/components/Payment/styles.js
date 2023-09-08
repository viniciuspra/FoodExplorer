import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const PaymentOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;  
`;

export const Option = styled.div`
  border: 1px solid #ccc;
  padding: 1.8rem;
  background-color: ${({ selected, theme }) =>
    selected ? theme.COLORS.DARK_800 : ''};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex: 1;
  border-radius: ${({ isFirst, isLast }) =>
    isFirst ? '4px 0 0 0' : isLast ? '0 4px 0 0' : 'none'};

`;