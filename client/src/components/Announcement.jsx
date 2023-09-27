import styled from "styled-components"


const Container = styled.div`
    width: 100%;
    height: 40px;
    color: #fff;
    font-size: 17px;
    letter-spacing: 1px;
    background-color: #008080;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Announcement() {
  return (
    <Container>
        Super Discount! Free shipping orders over $50.
    </Container>
  )
}

export default Announcement;
