import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to={'/'} style={{textDecoration:'none'}}>
        <Navbar style={{fontFamily: 'Bellefair, serif',backgroundColor:'black'}}>
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://i.postimg.cc/T2ccXnk1/Spoon-fork-food-menu-organic-gold-logo-vector-image-on-Vector-Stock.jpg"
                width="100"
                height="80"
                className="d-inline-block align-top"
              />{' '}
              <b className='fs-1 text-light me-4'>D i n e O n</b>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Link>
    </div>
  )
}

export default Header