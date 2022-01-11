import React from 'react'
import styled from 'styled-components'
import Lavoro from './Lavoro'

const GridView = ({ lavori }) => {
  return (
    <Wrapper>
      <div className='products-container'>
        {lavori.map((lavoro) => {
          return <Lavoro key={lavoro.id} {...lavoro} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-bottom: 20px;
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
    justify-items: center;
  }

  @media screen and (min-width: 320px) and (max-width: 599px) {
    .products-container {
      grid-template-columns: repeat(1, 0fr);
      justify-content: center;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 0fr);
      justify-content: center;
    }
  }

  @media (min-width: 993px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default GridView
