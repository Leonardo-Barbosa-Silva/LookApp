import React from 'react'
import styled from 'styled-components';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material';



const Container = styled.div`
    width: 100%;
    height: 80px;
`



function NavBar() {
  return (
    <Container>
      <div className='navbar-content'>
        <div className='search'>
          <div className='lang'>{'EN'}</div>
          <div className='input'>
            <input type='text' />
            <SearchOutlined fontSize='small'/>
          </div>
        </div>
        <div className='logo'>
          <h1>LOOK</h1>
        </div>
        <nav>
          <ul>
            <a><li>REGISTER</li></a>
            <a><li>SIGN IN</li></a>
            <a>
              <li>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </Container>
  )
}

export default NavBar
