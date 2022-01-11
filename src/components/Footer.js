import React from 'react'
import styled from 'styled-components'
import { AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import logo from '../assets/logo nuovo.png'
import Brochure from '../assets/Brochure.pdf'
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
                <a href={Brochure}>Brochure</a>
                <br />
                <a href=''>Area Stampa</a>
              </p>
            </div>
            <div className='footer-col da'>
              <h4>SOCIAL</h4>
              <p className='social'>
                <a href='https://www.instagram.com/salvatore_ronga_srl/?utm_source=ig_profile_share&igshid=174q4l23lnw74'>
                  <AiFillInstagram fontSize='1.8rem' />
                </a>
                <br />
                <a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHrBlZtP1-78wAAAWkuZClwPK_kN6dkiTNsNFGQdqf1hcrgpkaTDgJsxvE1DEueJGXigFtWHgeN24faMA1Rz8KAqr7vE0o0XNTc2HX2u1Fp_TdBUPxzryDtGrMbv0ibW6VKU7o=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsalvatore-ronga-s-r-l%2F'>
                  <AiFillLinkedin fontSize='1.8rem' />
                </a>
                <br />
                <a href='https://www.facebook.com/salvatorerongasrl/'>
                  <AiFillFacebook fontSize='1.8rem' />
                </a>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
  .footer {
    background-color: #f7f6f2;
    font-family: Gotham-Book;
    overflow: hidden;
  }

  .container {
    max-width: var(--max-width);
    width: 90vw;
    margin: 0;
    padding-top: 40px;
    padding-bottom: 10px;
    margin-left: 20px;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-col {
    width: 50%;
    margin-bottom: 20px;
  }

  .log img {
    width: 250px;
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

  .footer-col a {
    color: black;
  }

  .social {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .bar {
    background-color: #600316;
    width: 100%;
  }

  .bar p {
    text-align: center;
    padding: 20px 20px;
    font-size: 20px;
    color: white;
  }

  @media screen and (min-width: 320px) and (max-width: 425px) {
    .container {
      grid-template-columns: repeat(1, 1fr);
    }

    .log img {
      width: 150px;
    }

    .footer-col {
      width: 100%;
      margin-bottom: 10px;
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

  @media screen and (min-width: 426px) and (max-width: 800px) {
    .container {
      grid-template-columns: repeat(2, 0.5fr);
    }

    .log img {
      width: 150px;
    }

    .footer-col {
      width: 100%;
      padding: 20px;
      text-align: center;
    }
  }

  @media screen and (min-width: 801px) and (max-width: 1023px) {
    .container {
      max-width: 1024px;
      text-align: center;
    }
    .footer-col {
      width: 50%;
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
