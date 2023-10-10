import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div> <MDBNavbar light bgColor='secondary'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        <img className='me-3' style={{borderRadius:'50%',border:'3px solid white'}}
          src='https://th.bing.com/th/id/R.705a56f8bae2caeebbf02a066938edbc?rik=2GE5EskOdT0G7g&riu=http%3a%2f%2fs2.favim.com%2forig%2f36%2fanimation-counter-gif-love-numbers-Favim.com-292566.gif&ehk=We9p6O1XFkGTqS5wAoqew2augr3PwLpi4iHMbO3j7Lk%3d&risl=&pid=ImgRaw&r=0'
          height='80'
          alt=''
          loading='lazy'
        />
       <h1 className='text-light'>Counter App</h1>
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header