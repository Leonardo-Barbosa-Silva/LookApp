import React from 'react'
import styled from 'styled-components';
import Announcement from '../../components/Announcement';
import NavBar from '../../components/NavBar';
import Slider from '../../components/Slider';


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
    </Container>
  )
}

export default Home;
