import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import styled from "styled-components";

const StarRating = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (curEle, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill className="icon" />
        ) : stars >= number ? (
          <BsStarHalf className="icon" />
        ) : (
          <BsStar className="icon" />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
        <div className="icon-style">
            {ratingStar}
            <p>({reviews} customer reviews)</p>
        </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
 .icon-style{
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
 }

.icon {
    font-size: 2rem;
    color: orange;
}

p{
    margin: 0;
    padding-left: 1.2rem;
}
`;

export default StarRating;
