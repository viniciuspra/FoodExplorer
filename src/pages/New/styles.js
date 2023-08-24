import styled from "styled-components";
import { media } from "../../configs/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > h1 {
    font-family: "Poppins", serif;
    font-size: 3.2rem;
    font-weight: 400;
    margin: 3.5rem 3.2rem 0;
  }
  
  > a:nth-child(2) {
    margin: 2.4rem;
  }

  ${media.greaterThan('mobile')`
    > a:nth-child(2) {
      margin: 2.4rem 4rem;
    }
  `}

  ${media.greaterThan('desktop')`
    > h1 {
      margin: 3.5rem 10rem 0;
    }
    > a:nth-child(2) {
      margin: 2.4rem 10rem;
    }
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-top: 2.4rem;
  padding: 0 2.4rem;

  ${media.greaterThan('mobile')`
    padding: 0 4rem;
  `}

  ${media.greaterThan('desktop')`
    display: grid;
    gap: 2.4rem;
    margin: 2.4rem 10rem;
    padding: 0;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "image name category"
      "ingredients ingredients price"
      "description description description"
      ". . button";

    > button {
      grid-area: button;
    }
  `}

  > label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.6rem;

    ${media.greaterThan('desktop')`
      &:nth-child(1) {
        grid-area: image;
      }

      &:nth-child(2) {
        grid-area: name;
      }

      &:nth-child(3) {
        grid-area: category;
      }

      &:nth-child(4) {
        grid-area: ingredients;
      }

      &:nth-child(5) {
        grid-area: price;
      }

      &:nth-child(6) {
        grid-area: description;
      }
    `}
    
    .input-currency {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.WHITE};

      width: 100%;
      height: 4rem;
      padding: 0 1rem;

      border-radius: 0.6rem;
      border: 0;

      font-size: 1.4rem;
      outline: none;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      }
    }

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
  gap: 1rem;
  padding: 1.2rem 1rem 1.2rem 2rem;
  
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

export const ImagePreview = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

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

  > img {
    width: 7rem;

    &:hover {
      opacity: 0.8;
      transition: 200ms;
    }
  }
`