import React from 'react'
import styled from 'styled-components'

const Legalità = () => {
  return (
    <Wrapper>
      <h1 className='cat cat-rating'>
        RATING DI LEGALITA' <span>&#9733; ++</span>
      </h1>
      <p className='cat-descr'>
        Grazie alla correttezza dimostrata negli anni, si è vista attribuire un
        punteggio di "&#9733;++" dall'Autorità Garante della <br />
        Concorrenza e del Mercato <br />
        Questo, poi, nel 2018 le ha permesso di esser selezionata come una tra
        le migliori imprese del territorio dalla <br />
        Cassa Edile Salernitana.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .cat-descr {
    font-family: Libre-Baskerville !important;
  }
  @media screen and (min-width: 320px) and (max-width: 374px) {
    .cat-rating {
      display: flex;
      flex-direction: column;
    }

    .cat-rating span {
      margin-top: 20px;
      justify-content: center;
      text-align: center;
      margin-left: -45px;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 424px) {
    .cat-rating {
      display: flex;
      flex-direction: column;
    }

    .cat-rating span {
      margin-top: 20px;
      justify-content: center;
      text-align: center;
      margin-left: -45px;
    }
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    .cat-rating {
      display: flex;
      flex-direction: column;
    }

    .cat-rating span {
      margin-top: 20px;
      justify-content: center;
      text-align: center;
      margin-left: -45px;
    }
  }
`

export default Legalità
