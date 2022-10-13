import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PageNavigate = ({title}) => {
  return (
    <Wrapper>
        <NavLink to="/" style={{color:"blue"}}>Home</NavLink> / {title}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 10rem;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;
  a {
    font-size: 3.2rem;
  }
`;

export default PageNavigate
