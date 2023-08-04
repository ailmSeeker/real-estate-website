import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  // MDBInput,
  // MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function FooterSection() {
  return (
    <MDBFooter className='text-center bg-slate-700' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>


        <section className='mb-4'>
          <p>
            <address>Contact Us:</address>
            Email: info@example.com
            Phone: +1 (123) 456-7890

            Address:
            1234 Street Name
            City, State ZIP Code
            Country

            Follow Us:
            Facebook: facebook.com/example
            Twitter: twitter.com/example
            Instagram: instagram.com/example

            © 2023 Your Company. All rights reserved.
          </p>
        </section>

        <section className=''>
          <MDBRow>




          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}