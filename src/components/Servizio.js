import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import foto from '../assets/Annunziata/Annunziata Copertina.png'

const Servizio = ({ servizio }) => {
  const { title, image, text } = servizio

  return (
    <Wrapper className='container'>
      <img src={foto} alt='' />
      <div className='servizi'>
        <h1>{title}</h1>
        <p>{text}</p>
        <button>
          <Link to='/lavori'>Scopri i lavori</Link>
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 300px !important;
  max-width: 300px;
  margin: 20px;
  margin-bottom: 30px;

  img {
    width: 300px;
    height: 250px !important;
    display: block;
    object-fit: cover;
    transition: var(--transition);
  }
  .servizi {
    font-family: Gotham-Medium;
    letter-spacing: 2px;
    font-size: 14px !important;
    text-align: center;
    margin-top: 1rem;
    max-width: 300px;
  }

  .servizi h1 {
    font-size: 18px;
    font-family: Gotham-Medium;
  }

  .servizi p {
    font-size: 12px;
  }

  .servizi button {
    margin-top: 10px;
    background: rgb(123, 27, 2, 0.8);
    padding: 5px 20px;
    font-size: 14px;
    border: none;
  }

  @media screen and (min-width: 320px) and (max-width: 424px) {
    width: 250px !important;
    max-width: 250px;
    img {
      width: 250px;
      height: 200px !important;
    }
    .servizi h1 {
      font-size: 14px;
    }
    .servizi p {
      font-size: 10px;
    }
    .servizi button {
      font-size: 12px;
      padding: 5px 15px;
    }
  }

  @media screen and (min-width: 425px) and (max-width: 726px) {
    width: 300px !important;
    max-width: 300px;
  }
`

export default Servizio
