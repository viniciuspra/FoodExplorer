import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  > main {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 2.8rem 10rem;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 2rem;
    border-radius: 2rem;
  }

  th {
    text-align: start;
    font-size: 1.6rem;
  }

  td {
    font-size: 1.4rem;
    font-weight: normal;
  }
  
  th,
  td {
    padding: 1rem 3rem;
    border: 3px solid ${({ theme }) => theme.COLORS.DARK_1000};
    position: relative;
  }

  tbody tr:nth-child(even) {
    background-color: ${({ theme }) => theme.COLORS.DARK_500};
  }

  thead th:nth-child(1) {
    width: 15rem;
  }
  thead th:nth-child(2) {
    width: 10rem;
  }
  thead th:nth-child(4) {
    width: 18rem;
  }

  .status-pendente::before {
    content: '';
    width: 1rem;
    height: 1rem;
    
    background-color: red;
    border-radius: 50%;

    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .status-preparando::before {
    content: '';
    width: 1rem;
    height: 1rem;

    background-color: orange;
    border-radius: 50%;

    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .status-entregue::before {
    content: '';
    width: 1rem;
    height: 1rem;

    background-color: green;
    border-radius: 50%;

    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .custom-select, option {
    width: 12rem;
    height: 4rem;

    font-size: 1.4rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    border-radius: 0.1rem;
    outline: none;

    padding: 1rem;
  }

  .empty-order {
    text-align: center;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 100%;
  }
`;
