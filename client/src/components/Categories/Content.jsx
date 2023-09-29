import styled from "styled-components"



const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`


function Content({ content }) {
  return (
    <Container>
      <div className="image">
        <img src={content.img} alt=""/>
      </div>
      <div className="title">
        <h2>{content.title}</h2>
        <button type="button">Shop Now</button>
      </div>
    </Container>
  )
}

export default Content
