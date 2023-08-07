import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > h1 {
    font-family: "Poppins", serif;
    font-size: 3.2rem;
    font-weight: 400;
    margin: 3.5rem 3.2rem 0;
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-top: 2.4rem;
  padding: 0 3.2rem;

  > label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.6rem;
  }

  .itens {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    gap: 1.6rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    padding: 1rem;

    border-radius: 1rem;
  }

  > label > select, option {
    width: 100%;
    height: 4rem;

    font-size: 1.4rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    border-radius: 1rem;
    outline: none;

    padding: 0 0.5rem;
  }
`;

export const DishImg = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 1rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 3rem;
  
  cursor: pointer;

  > input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: none;
  }

  > span {
    flex: 1;
  }
`

export const ButtonWrapper = styled.div`
  height: 4rem;
  display: flex;
  gap: 1rem;
`