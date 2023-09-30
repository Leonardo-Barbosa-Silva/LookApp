import React from 'react'
import styled from 'styled-components';
import Announcement from '../../components/Announcement/Announcement';
import NavBar from '../../components/NavBar/NavBar';
import Slider from '../../components/Slider/Slider';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';




const Container = styled.div`
  width: 100%;
  height: 100%;
`


function Home() {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Home;
