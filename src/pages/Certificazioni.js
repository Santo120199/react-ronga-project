import React from 'react'
import styled from 'styled-components'
import { SOA, Qualità, Legalità, Certificati } from '../components'

const Certificazioni = () => {
  return (
    <>
      <Wrapper className='page'>
        <div className='section-center'>
          <h1 className='title'>LE NOSTRE CERTIFICAZIONI</h1>
          <hr className='line' />
          <SOA />
          <hr className='line' />
          <Qualità />
          <hr className='line' />
          <Legalità />
          <Certificati />
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  .cat {
    margin-top: 40px;
    text-align: center;
    align-items: center;
    margin-bottom: 60px;

    font-size: 30px;
    font-family: Gotham-Medium;
    letter-spacing: 5px;
  }

  .cat-descr {
    text-align: center;
    align-items: left;
    font-family: Gotham-Book;
    font-size: 18px;
    margin-top: -25px;
    margin-bottom: 50px;
  }
  .cat span {
    font-size: 40px;
    margin-left: 30px;
    margin-right: -15px;
  }

  @media screen and (min-width: 320px) and (max-width: 374px) {
    .cat {
      font-size: 28px;
      margin-left: auto;
      margin-right: auto;
      display: block;
      width: 300px;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 424px) {
    .cat {
      font-size: 28px;
      margin-left: auto;
      margin-right: auto;
      display: block;
      width: 300px;
    }
  }
`
export default Certificazioni
