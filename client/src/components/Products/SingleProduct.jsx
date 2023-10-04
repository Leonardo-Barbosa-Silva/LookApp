import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";



const Container = styled.section`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  padding: 40px;
  background: linear-gradient(#fff, #efefef);
  gap: 50px;

  .image {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dfdfff;
    border-radius: 10px;

    img {
      width: 90%;
      height: 90%;
      object-fit: contain;
    }
  }
`

function SingleProduct({ content }) {

  return (
    <Container>
        <div className="image">
          <img src={content.img} alt=""/>
        </div>
        <div className="text">
          <div className="title">
            <h2>H. Rackham</h2>
          </div>
          <div className="desc">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>
          </div>
          <div className="price">$ 20</div>
          <div className="filters">
            <div className="colors">
              <span>Color:</span>
              <div className="color black"></div>
              <div className="color blue"></div>
              <div className="color grey"></div>
            </div>
            <div className="sizes">
                <span>Sizes:</span>
                <select>
                    <option disabled selected>Size</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
            </div>
          </div>
          <div className="cart">
            <div className="amount">
              <Remove />
              <span>{1}</span>
              <Add />
            </div>
            <button type="button">ADD TO CART</button>
          </div>
        </div>
    </Container>
  )
}

export default SingleProduct
