import React from 'react'
import styled from 'styled-components'
import rating from '../assets/certificati/Rating-di-Legalità.png'
import Iso2015 from '../assets/certificati/Certificati-ISO-14001-2015.jpg'
import Iso14 from '../assets/certificati/Certificato-ISO-14001.jpg'
import Soa from '../assets/certificati/Certificato-Soa.jpg'
import Iso9001 from '../assets/certificati/ISO-9001.jpg'

const Certificati = () => {
  return (
    <Wrapper>
      <h1 className='cat'>SCARICALI QUI</h1>
      <div className='certificati'>
        <div className='certificato'>
          <a href={rating}>
            <img src={rating} alt='' />
          </a>
          <div className='caption'>
            <span>Rating di Legalità</span>
          </div>
        </div>
        <div className='certificato'>
          <a href={Iso2015}>
            <img src={Iso2015} alt='' />
          </a>
          <div className='caption'>
            <span>ISO 14001-2015</span>
          </div>
        </div>
        <div className='certificato'>
          <a href={Iso14}>
            <img src={Iso14} alt='' />
          </a>
          <div className='caption'>
            <span>ISO 14001</span>
          </div>
        </div>
        <div className='certificato'>
          <a href={Soa}>
            <img src={Soa} alt='' />
          </a>
          <div className='caption'>
            <span>Certicato SOA</span>
          </div>
        </div>
        <div className='certificato'>
          <a href={Iso9001}>
            <img src={Iso9001} alt='' />
          </a>
          <div className='caption'>
            <span>ISO 9001-2015</span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .certificati {
    margin-bottom: 100px;
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: wrap !important;
    justify-content: center;
  }

  .certificato {
    width: 200px;
    height: 350px;
    border: 1px solid black;
    margin-right: 20px !important;
    margin-bottom: 40px;
  }
  .certificato img {
    width: 100%;
    height: 100%;
    trasform: scale(1);
    margin: 0;
    padding: 0;
  }

  .caption {
    height: 50px;
    width: auto;
    font-size: 20px;
    font-family: Times-New-Roman;
    text-align: center;
    box-sizing: border-box;
    transform-style: preserve-3d;
    transform: rotateX(-180deg);
    transform-origin: top;
    z-index: -1;
    position: relative;
    transition: 1s ease;
  }

  .certificato:hover .caption {
    transform: rotateX(0deg);
  }

  @media screen and (min-width: 320px) and (max-width: 374px) {
    .certificati {
      margin-left: 0;
      justify-content: center;
    }

    .certificato {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 424px) {
    .certificati {
      margin-left: 0;
      justify-content: center;
    }

    .certificato {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 425px) and (max-width: 767px) {
    .certificati {
      margin-left: 0;
      justify-content: center;
    }

    .certificato {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 959px) {
    .certificati {
      margin-left: 0;
      justify-content: center;
    }

    .certificato {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 960px) and (max-width: 1023px) {
    .certificati {
      margin-left: 0;
      justify-content: center;
    }

    .certificato {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1099px) {
    .certificati {
      margin-left: 0;
      justify-content: center;
    }

    .certificato {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 1100px) and (max-width: 1200px) {
    .certificati {
      margin-left: 0;
      justify-content: center;
    }

    .certificato {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 1201px) and (max-width: 1299px) {
    certificati {
      margin-left: 0;
      justify-content: center;
    }

    .certificato {
      margin-bottom: 30px;
      margin-left: 20px;
    }
  }

  @media screen and (min-width: 1300px) and (max-width: 1400px) {
    .certificati {
      margin-left: 0;
      justify-content: center;
    }

    .certificato {
      margin-bottom: 30px;
      margin-left: 20px;
    }
  }
`

export default Certificati
