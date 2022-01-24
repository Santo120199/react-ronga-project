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
        <p className='descr'>
          Per la cura del patrimonio artistico e culturale sono richieste
          qualificazioni speciali. Grazie alla nostra esperienza e al nostro
          gruppo di esperti, negli anni abbiamo acquisito prestigiose
          certificazioni che ci permettono offrire i nostri servizi.
        </p>
        <div className='link'>
          <Link to='/certificazioni'>Vedi le certificazioni</Link>
        </div>
        <div className='servizi'>
          <hr className='line' />
          {services.map((service, index) => {
            const { image, title, text } = service
            return <Servizio key={index} servizio={service} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  .descr {
    text-align: center;
    align-items: left;
    font-family: Libre-Baskerville;
    font-size: 15px;
    margin-left: 100px;
    margin-right: 100px;
  }

  .link {
    text-align: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    color: black;
    font-size: 16px;
    font-family: Gotham-Medium;
  }

  .servizi {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (min-width: 320px) and (max-width: 424px) {
    .descr {
      margin: 0;
      font-size: 14px;
    }
    .link {
      font-size: 14px;
    }
  }
`

export default Servizi
