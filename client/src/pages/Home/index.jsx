import React from 'react'
import styled from 'styled-components';
import Announcement from '../../components/Announcement/Announcement';
import NavBar from '../../components/NavBar/NavBar';
import Slider from '../../components/Slider/Slider';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`



function Home() {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
    </Container>
  )
}

export default Home;
