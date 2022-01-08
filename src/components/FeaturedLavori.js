import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Lavoro from './Lavoro'

const FeaturedLavori = () => {
  const { featured_lavori: feature } = useProductsContext()
  console.log(feature)

  return (
    <Wrapper className='wrap'>
      <div>
        <h1>Lavori</h1>
      </div>
      <div className='featured'>
        {feature.map((lav) => {
          return <Lavoro key={lav.id} {...lav} className='special' />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-left: 50px;
  .featured {
    display: grid;
    gap: 1rem;
  }
  .special {
    width: 250px !important;
    height: 250px;
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedLavori
