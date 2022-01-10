import React from 'react'
import styled from 'styled-components'

const Servizio = ({ servizio }) => {
  const { image, title, text } = servizio

  return (
    <Wrapper>
      <div className='servizio'>
        <img src={image} alt='' />
        <div className='infoServ'>
          <h2>{title}</h2>
        </div>
      </div>
      <hr className='line' />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .servizio {
    display: flex;
    margin-bottom: 20px;
  }
  .servizio img {
    width: 300px;
    height: 300px;
  }

  .servizio .infoServ {
    margin-left: 50px;
  }

  .servizio h2 {
    font-size: 25px;
    font-family: Gotham-Medium;
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  @media screen and (min-width: 320px) and (max-width: 425px) {
    .servizio {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .servizio img {
      width: 250px;
      height: 250px;
    }

    .servizio .infoServ {
      margin-left: 0;
      text-align: center;
      margin-top: 20px;
    }

    .servizio h2 {
      font-size: 16px;
      margin-left: 0;
    }
  }
`

export default Servizio
