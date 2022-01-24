import React from 'react'
import styled from 'styled-components'
import { FeaturedLavori, Servizi, FilterHome, Commitenti } from '../components'
import foto from '../assets/annunziata salerno copia.jpg'
import foto1 from '../assets/Firenze, Bargello.jpg'
const Home = () => {
  return (
    <Wrapper className='page'>
      <section className='main page-100'>
        <div className='section-center text'>
          <h2 className='pretitle'>DAL 1945</h2>
          <h1 className='title'>
            Curiamo il nostro <br /> patrimonio
          </h1>
        </div>
      </section>
      <section className='page-100'>
        <div className='section-center'>
          <Servizi />
        </div>
        <div className='section sec'>
          <div className='section-center centrale'>
            <div className='preSfondo'>
              <img src={foto} alt='' />
              <img src={foto1} alt='' />
            </div>
            <div className='sfondo'>
              <p>
                Il nostro desiderio è quello di essere un punto di riferimento
                per il Restauro e la Valorizzazione dei Beni Culturali. <br /><br/>
                <span>Passione, Qualità e Innovazione</span> <br />
                Questo ci permette di salvaguardare il nostro Patrimonio
              </p>
            </div>
          </div>
        </div>
        <div className='section-center'>
          <FilterHome />
          <FeaturedLavori />
          <Commitenti />
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    background: var(--background-image) center center fixed;
    background-size: cover;
  }

  .pretitle {
    text-align: left;
    align-items: left;
    font-family: Libre-Baskerville;
    font-size: 25px;
    letter-spacing: 5px;
    margin-top: 2.5rem;
    color: white;
  }

  .title {
    margin-top: 1rem;
    text-align: left;
    align-items: left;
    margin-bottom: 1rem;
    font-size: 50px;
    font-family: Libre-Baskerville-Bold;
    letter-spacing: 5px;
    color: white;
  }

  .text {
    margin-top: -50px;
  }

  .text p {
    text-align: left;
    align-items: left;
    font-size: 18px;
    font-family: Libre-Baskerville-Italic;
    letter-spacing: 2px;
    color: white;
  }

  .sec {
    background: repeating-linear-gradient(
      rgb(123, 27, 2, 0.6),
      rgb(123, 27, 2, 0.6) 60.9%,
      var(--background) 50.1%,
      var(--background) 100%
    );
    display: flex;
    flex-directio: column;
    flex-wrap: wrap;
  }

  .centrale {
    display: flex;
    flex-directio: column;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .preSfondo {
  }

  .preSfondo img {
    width: 300px;
    height: 400px;
    margin-left: 40px;
  }

  .sfondo {
    width: 300px;
  }

  .sfondo p {
    text-align: center;
    font-family: Libre-Baskerville;
    font-size: 18px;
    margin-right: -40px;
    margin-left: -30px;
  }

  .sfondo span {
    color: var(--clr-granata);
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    .pretitle {
      font-size: 18px;
    }
    .title {
      font-size: 30px;
      letter-spacing: 3px;
    }
    .text p {
      font-size: 14px;
    }

    .sec {
      background: rgb(123, 27, 2, 0.6);
      margin-bottom: 20px;
    }

    .preSfondo {
      display: none;
    }

    .sfondo {
      display: flex;
      justify-content: center;
    }

    .sfondo p {
      font-size: 14px;
      letter-spacing: 2px;
    }
    .centrale {
      justify-content: center;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 992px) {
    .preSfondo img:nth-child(2) {
      display: none;
    }
  }

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    .preSfondo img {
      width: 250px;
      height: 400px;
    }

    .sfondo p {
      font-size: 16px;
    }
  }
`

export default Home
