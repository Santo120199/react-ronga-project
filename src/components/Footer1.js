import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo-nuovo.svg'
const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <div className='content'>
          <div className='top'>
            <div className='logo-details'>
              <img src={logo} alt='' />
            </div>
          </div>

          <div className='link-boxes'>
            <ul className='box'>
              <li className='link_name'>Contatti</li>
              <li>info@impresaronga.com</li>
              <li>impresaronga@pec.it</li>
              <li>P.I.03844930655 </li>
              <li>089 233496</li>
            </ul>
            <ul className='box'>
              <li className='link_name'>Sede Legale</li>
              <li>Via Bastia 2, 85125</li>
              <li>Salerno (SA) - Italy</li>
            </ul>
            <ul className='box'>
              <li className='link_name'>Download</li>
              <li>Brochure</li>
              <li>Area Stampa</li>
            </ul>
            <ul className='box'>
              <li className='link_name'>Social</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
        <div className='bar'>
          <p>COPYRIGHT &copy; {new Date().getFullYear()} | IMPRESARONGA.IT</p>
        </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  footer {
    position: fixed;
    background: @140b5c;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  footer::before {
    content: '';
    position: absolute;
    left: 0;
    top: 100px;
    height: 1px;
    width: 100%;
    background: #afafb6;
  }

  footer .content {
    max-width: 1250px;
    margin: auto;
    padding: 30px 40px 40px 40px;
  }

  footer .content .top {
    display: flex;
    margin-bottom: -20px;
    justify-content: center;
  }
  .logo-details {
    text-align: center;
  }
  .logo-details img {
    width: 20%;
    justify-content: center;
    margin-top: 40px;
  }
  footer .content .link-boxes {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: Gotham-Book;
    margin-bottom: 20px;
  }

  footer .content .link-boxes .box {
    width: calc(100% / 5 - 10px);
  }

  .link_name {
    color: black;
    font-size: 20px !important;
    font-weight: 400 !important;
    text-transform: capitalize !important;

    margin-bottom: 10px;
    position: relative;
  }

  .box li {
    color: #black;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    opacity: 0.8;
    transition: all 0.4s ease;
    position: relative;
  }

  /*Responsive*/
  @media (max-width: 900px) {
    .link-boxes {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 800px) {
    footer {
    }
    footer .content .link-boxes .box {
      width: calc(100% / 2 - 20px);
    }
  }

  @media (max-width: 520px) {
    footer::before {
      top: 145px;
    }
    footer .content .top {
    }
    footer .content .link-boxes .box {
      width: calc(100% / 2 - 10px);
    }
  }

  .bar {
    background-color: var(--clr-granata);
    margin-bottom: 0;
  }
  .bar p {
    text-align: center;
    padding: 20px 20px;
    font-size: 20px;
    color: white;
  }
`

/* 
const Wrapper = styled.footer`
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
`
 */
export default Footer
