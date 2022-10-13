import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PageNavigate = ({title}) => {
  return (
    <Wrapper>
        <NavLink to="/">Home</NavLink>&nbsp; / {title}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 6rem;
  width: 80%;
  margin-top: 1.5rem;
  background-color: rgb(140 130 246);
  border-radius: 0px 30px 30px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;
  a {
    font-size: 3rem;
    color: white;
  }
`;

export default PageNavigate;
