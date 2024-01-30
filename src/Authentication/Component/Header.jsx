import React, { useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {auth} from  "../Pages/firebase"
import {onAuthStateChanged, signOut} from 'firebase/auth'

function Header() {
  const location = useLocation();
  const isCurrentPath = (path) => {
    return location.pathname === path;
  };
  const navigate = useNavigate();
  const loginFlag = JSON.parse(localStorage.getItem('loginFlag')) || false;

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if(user) {
        localStorage.setItem("userId", user.email);
        // console.log(`User ${user.email} is signed in.`);
      }else{
        localStorage.setItem("loginFlag",false);
      }
    })
  })

  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      console.log('log Out')
    }).catch((err) => {
      console.log(err)
    })
    localStorage.setItem('loginFlag', false);
    navigate('/');
  }

  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand><Link className='text-reset text-decoration-none text-light' to={'/'}>Authentication</Link></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><Link className='text-reset text-decoration-none text-light' to={'/'}>Home</Link></Nav.Link>
          <Nav.Link><Link className='text-reset text-decoration-none text-light' to={'/about'}>About</Link></Nav.Link>
          <Nav.Link>{loginFlag ? (<><Link className='text-reset text-decoration-none text-light' to={'/products'}>Product</Link></>) : (<></>)}</Nav.Link>
        </Nav>
        {loginFlag ? (
          <>
            <button className='btn btn-outline-light me-3 btn-sm'><Link className='text-reset text-decoration-none text-light' to={'/'} onClick={handleLogout}>Log Out</Link></button>
          </>
        ) : (
          <>
            <button className='btn btn-outline-light me-3 btn-sm'><Link className='text-reset text-decoration-none text-light' to={'/signup'}>Sign Up</Link></button>
            <button className='btn btn-outline-light btn-sm'><Link className='text-reset text-decoration-none text-light' to={'/login'}>Login</Link></button>
          </>
        )
        }
      </Container>
    </Navbar >
  )
}

export default Header