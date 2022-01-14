import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'
import Servizio from './Servizio'

const Servizi = () => {
  return (
    <Wrapper className='section-center'>
      <h1 className='titolo'>Servizi</h1>
      <div className='serviziHome'>
        {services.slice(0, 3).map((servizio, index) => {
          return <Servizio key={index} servizio={servizio} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .titolo {
    text-align: center;
    font-family: Libre-Baskerville;
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 5px;
  }
  .serviziHome {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (min-width: 320px) and (max-width: 424px) {
    .titolo {
      font-size: 25px;
      margin-top: -20px;
    }
  }
`

export default Servizi
