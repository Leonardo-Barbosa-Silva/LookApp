import React from 'react'
import styled from 'styled-components';
import Announcement from '../../components/Announcement/Announcement';
import NavBar from '../../components/NavBar/NavBar';
import Slider from '../../components/Slider/Slider';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';




const Container = styled.div`
  width: 100%;
  height: 100%;
`


function Home() {
  const navigate = useNavigate()

  return (
    <Container>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <button 
        onClick={() => navigate('/products')}
        style={{ marginTop: '100px', marginLeft: '100px' }}
      >
        Filter Products Here!
      </button>
      <button 
        onClick={() => navigate('/auth')}
        style={{ marginTop: '100px', marginLeft: '100px', color: 'red' }}
      >
        Logout
      </button>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Home;
