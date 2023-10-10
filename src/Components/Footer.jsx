import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div> <MDBFooter className='text-center text-light bg-secondary'>
    <MDBContainer className='pt-4'>
      <section className='mb-4'>
        <MDBBtn
          rippleColor="dark"
          color='dark'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fab fa-facebook-f text-light fs-4' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='dark'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-twitter text-light fs-4' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='dark'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-google text-light fs-4' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='dark'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-instagram text-light fs-4' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='dark'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-linkedin text-light fs-4' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='dark'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-github text-light fs-4' />
        </MDBBtn>
      </section>
    </MDBContainer>

    <div className='text-center text-light p-3 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2023 Copyright:
      <a className='text-light' href='#'>
        Counter.com
      </a>
    </div>
  </MDBFooter></div>
  )
}

export default Footer