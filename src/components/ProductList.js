import React from 'react'
import { useProductContext } from '../context/productcontext';
import styled from 'styled-components';
import AllProducts from './AllProducts';

const ProductList = () => {
    const {isLoading, products} = useProductContext();
    if (isLoading) {
      return (
        <h3 style={{ textAlign: "center" }}>
          <img src="../images/Ghost.gif" alt="loading" />
        </h3>
      );
    }
  return (
    <Wrapper>
      <div className='grid grid-three-column'>
        {
            products.map((curEle) => {
                return <AllProducts key={curEle.id} {...curEle}/>
            })
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 7rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 120rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      border-radius: 1rem;
      transition: all 0.2s linear;
    }
    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }
  .card {
    background-color: #fff;
    border-radius: 1rem;
    .card-data {
      padding: 0 2rem;
    }
    .card-data-flex {
      margin: 0.5rem 0;
      color: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
      font-size: 1.5rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default ProductList
