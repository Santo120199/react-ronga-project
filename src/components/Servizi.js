import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'
import Servizio from './Servizio'

const Servizi = () => {
  return (
    <Wrapper>
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
  margin-top: -40px;
  .titolo {
    text-align: center;
    font-family: Libre-Baskerville-Bold;
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .serviziHome {
    display: grid;
    
    justify-items: center;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 320px) and (max-width: 599px) {
    .serviziHome {
      grid-template-columns: repeat(1, 0fr);
      justify-content: center;
    }
    .titolo {
      font-size: 25px;
      margin-top: -20px;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 992px) {
    .serviziHome {
      grid-template-columns: repeat(2, 0fr);
    }
  }

  @media (min-width: 993px) {
    .serviziHome {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default Servizi
