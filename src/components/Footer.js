import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo nuovo.png'
const Footer = () => {
  return (
    <Wrapper>
      <footer className='footer'>
        <div className='container'>
          <div className='log'>
            <img src={logo} alt='' />
          </div>
          <div className='row'>
            <div className='footer-col da'>
              <h4>CONTATTI</h4>
              <p>
                info@impresaronga.com
                <br />
                impresaronga@pec.it
                <br />
                P.I. 03844930655
                <br />
                089 233496
              </p>
            </div>
            <div className='footer-col da'>
              <h4>SEDE LEGALE</h4>
              <p>
                Via Bastia 2, 85125
                <br />
                Salerno (SA) - Italy
              </p>
            </div>
            <div className='footer-col da'>
              <h4>DOWNLOAD</h4>
              <p>
                <a href=''>Brochure</a>
                <br />
                <a href=''>Area Stampa</a>
              </p>
            </div>
            <div className='footer-col da'>
              <h4>SOCIAL</h4>
              <p>
                <a href='#'>Instagram</a>
                <br />
                <a href='#'>Linkedin</a>
                <br />
                <a href='#'>Facebook</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div class='bar'>
        <p>COPYRIGHT &copy; 2019 | IMPRESARONGA.IT</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  .footer {
    background-color: #f7f6f2;
    border-top: 1px solid black;
    font-family: Gotham-Book;
    overflow: hidden;
  }

  .container {
    max-width: 1800px;
    margin: auto;
    padding-top: 40px;
    padding-bottom: 10px;
    margin-left: 20px;
    text-align: center;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-col {
    width: 20%;
  }

  .log {
    margin-top: -135px;
    margin-bottom: -100px;
    padding: 0;
    transform: scale(0.6);
  }

  .log img {
    width: 400px;
    padding: 0;
    margin: 0;
  }

  .footer-col h4 {
    font-size: 20px;
    color: black;
    text-transform: capitalize;
  }

  .footer-col p {
    font-size: 16px;
  }

  .bar {
    background-color: #600316;
  }

  .bar p {
    text-align: center;
    padding: 20px 20px;
    font-size: 20px;
    color: white;
  }

  @media screen and (min-width: 320px) and (max-width: 424px) {
    .log {
      transform: scale(0.4);
      margin-left: -20px;
    }
    .footer-col {
      width: 100%;
    }
    .da {
      margin-left: 0;
      padding-bottom: 5px;
    }

    .footer-col h4 {
      font-size: 18px;
    }
    .footer-col p {
      font-size: 14px;
    }
    .bar p {
      font-size: 18px;
    }
  }

  @media (max-width: 767px) {
    .footer-col {
      width: 100%;
      padding: 20px;
      text-align: center;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .container {
      max-width: 1024px;
      text-align: center;
    }
    .footer-col {
      width: 50%;
    }
    .row {
      margin-left: 20px;
    }
    .log {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
    }
  }
`

/* const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
` */

export default Footer
