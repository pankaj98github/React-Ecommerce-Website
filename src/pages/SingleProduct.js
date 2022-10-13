import styled from "styled-components";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useProductContext } from "../context/productcontext";
import PageNavigate from "../components/PageNavigate";
import { Container } from "../styles/Container";
import MyImage from "../components/MyImage";
import FormatPrice from "../helper/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import StarRating from "../components/StarRating";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {

  const { getSingleProducts, isSingleLoading, singleProduct } =
    useProductContext();

  const {id} = useParams();

  const {
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image
  } = singleProduct;

  useEffect(() => {
    getSingleProducts(`${API}?id=${id}`);
  }, []);

  if(isSingleLoading){
    return (
      <h2 style={{ textAlign: "center", marginTop: "10rem" }}>
        <img src="../images/Ghost.gif" alt="loading"/>
      </h2>
    );
  }

return (
  <Wrapper>
    <PageNavigate title={name} />
    <Container className="container">
      <div className="grid grid-two-column">
        <div className="product_images">
          <MyImage img={image} />
        </div>
        <div className="product-data">
          <h2>{name}</h2>
          <StarRating stars={stars} reviews={reviews}/>
          <p className="product-data-price">
            MRP : &nbsp;
            <del>
              <FormatPrice price={price + 250000} />
            </del>
          </p>
          <p className="product-data-price product-data-real-price">
            Deal of the Day : <FormatPrice price={price} />
          </p>
          <p>{description}</p>
          <div className="product-data-warranty">
            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Free Delivery</p>
            </div>

            <div className="product-warranty-data">
              <TbReplace className="warranty-icon" />
              <p>30 Days Replacement</p>
            </div>

            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>PK Delivered </p>
            </div>

            <div className="product-warranty-data">
              <MdSecurity className="warranty-icon" />
              <p>2 Year Warranty </p>
            </div>
          </div>
          <div className="product-data-info">
            <p>
              Available : &nbsp;
              <span>{stock ? "In Stock" : "Out of Stock"}</span>
            </p>
            <p>
              Brand : &nbsp;
              <span>{company}</span>
            </p>
            <p>
              Category : &nbsp;
              <span>{category}</span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  </Wrapper>
);

}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
