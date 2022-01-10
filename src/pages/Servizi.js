import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { services } from '../utils/constants'
import { Servizio } from '../components'

const Servizi = () => {
  return (
    <Wrapper className='page'>
      <div className='section-center'>
        <h1 className='title'>I NOSTRI SERVIZI</h1>
        <hr className='line' />
        {services.map((service, index) => {
          const { image, title, text } = service
          return <Servizio key={index} servizio={service} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default Servizi
