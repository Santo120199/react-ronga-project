import React from 'react'
import styled from 'styled-components'

const Dettagli = ({ lavoro }) => {
  const { anno, citta, provinciaSigla, commitente, categoria } = lavoro
  console.log(lavoro)

  return (
    <Wrapper>
      <div className='info info-pers'>
        <h2 id='intestazione'>Dettagli</h2>
        <hr className='linea' />
        <p>
          Anno <br />
          <span>{anno}</span> <br />
          Luogo <br />
          <span>
            {citta} {provinciaSigla}
          </span>
        </p>
        <hr className='linea' />
        <p>
          Committente <br />
          <span>{commitente} </span> <br />
          Categoria <br />
          <span>{categoria}</span>
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .linea {
    width: 1;
    size: 400;
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;

  }

  .info p {
    padding-left: 50px;
    font-family: Gotham-Book;
    font-size: 18px;
    font-weight: bold;
  }

  .info p span {
    font-weight: initial;
    text-transform: capitalize;
    font-size: 16px;
  }

  .line-vertical {
    margin-right: 50px;
    margin-left: -50px;
    height: 50px;
    width: 1px;
    margin-bottom: 20px;
  }

  .line-vertical.dett {
    height: 120px;
  }

  .info-pers {
    margin-left: 20px;
  }

  .info-pers hr {
    margin-left: 140px;
  }

  .info-pers span {
    font-size: 18px;
  }
  #intestazione {
    text-transform: uppercase;
    margin-right: 200px;
    font-family: Gotham-Medium;
    font-size: 20px;
    letter-spacing: 5px;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    .info {
      justify-content: center;
      display: flex;
      flex-direction: column;
    }

    .linea {
      display: none;
      margin-top: 20px;
    }

    #intestazione {
      margin: 0;
    }

    .info p {
      padding: 0;
    }
    .info-pers span {
      margin-top: 10px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .info {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .linea {
      display: none;
      margin-top: 20px;
    }

    #intestazione {
      margin: 0;
    }

    .info p {
      padding: 0;
    }
    .info-pers span {
      margin-top: 10px;
    }
  }
`

export default Dettagli
