import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Lavoro = ({ name, images, id, provinciaSigla, citta }) => {
  return (
    <Wrapper className='container'>
      <Link to={`/lavori/${id}`} className='link'>
        <img src={images[0]} alt='' />
      </Link>

      <div className='descr'>
        <div className='nome'>{name}</div>
        <div className='luogo'>
          {citta} ({provinciaSigla})
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    width: 300px !important;
    max-width: 300px;
  }
  img {
    width: 300px;
    height: 250px !important;
    display: block;
    object-fit: cover;
    transition: var(--transition);
  }
  .descr {
    font-family: Gotham-Medium;
    letter-spacing: 2px;
    font-size: 14px;
    word-wrap: break-word;
    margin-top: 1rem;
    max-width: 300px;
  }
  .nome {
    text-transform: uppercase;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    img {
      width: 250px;
      height: 250px !important;
    }
    .descr {
      font-size: 14px;
    }
    .container {
      justify-content: center;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 992px) {
    img {
      width: 300px;
      height: 250px !important;
    }

    .descr {
      font-size: 14px;
    }
  }
`
export default Lavoro
