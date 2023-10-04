import styled from "styled-components"



const Container = styled.section`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
`


function Filters() {
  return (
    <Container>
        <div className="filters">
            <div className="colors">
                <span>Colors:</span>
                <select>
                    <option disabled selected>Color</option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Yellow</option>
                    <option>Green</option>
                    <option>Purple</option>
                    <option>Pink</option>
                    <option>Blue</option>
                    <option>Orange</option>
                </select>
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
        <div className="sort">
            <span>Sort Products:</span>
            <select>
                <option disabled selected>Sort</option>
                <option>Newest</option>
                <option>Price (ASC)</option>
                <option>Price (DESC)</option>
            </select>
        </div>
    </Container>
  )
}

export default Filters
