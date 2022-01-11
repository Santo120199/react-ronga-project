import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'

import { Dettagli, LavoroImages } from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import data from '../data'

const Lavoro = () => {
  const { id } = useParams()
  const { lavoro, fetchLavoro } = useProductsContext()

  useEffect(() => {
    fetchLavoro(id)
  }, [id])

  const { name, storia, restauro, img1, imgD, images } = lavoro

  return (
    <Wrapper className='page'>
      <div className='section-center'>
        <h1 className='title titleCap'>{name}</h1>
        <div className='main-work'>
          <img src={img1} alt='' />
          <div className='main-text'>
            <h1 className='storia'>STORIA</h1>
            <p>{storia}</p>
            <h1 className='storia'>RESTAURO</h1>
            <p>{restauro}</p>
          </div>
        </div>
        <hr className='line' />
        <Dettagli lavoro={lavoro} />
        <LavoroImages images={images} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .titleCap {
    text-transform: uppercase;
  }

  .main-work {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-left: 120px;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .main-work img {
    width: 500px;
    height: 400px;
  }
  .main-text {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 30px;
  }

  .main-text p {
    justify-content: center;
    margin-right: 150px;
    font-size: 16px;
    margin-top: 5px;
    font-family: Gotham-Book;
    margin-bottom: 20px;
  }
  .storia {
    font-family: Gotham-Medium;
    font-size: 20px;
    letter-spacing: 5px;
    margin-top: 0;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    .main-work {
      margin-left: 0;
      justify-content: center;
    }

    .main-work img {
      width: 300px;
      height: 200px;
    }

    .storia {
      text-align: center;
      font-size: 18px;
      margin-top: 10px;
    }

    .main-text {
      width: 100%;
      margin: 0;
    }

    .main-text p {
      margin: 15px 15px 15px 15px;
      font-size: 14px;
    }
  }
`

export default Lavoro
