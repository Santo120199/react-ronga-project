import React from 'react'
import styled from 'styled-components'
import { FeaturedLavori, Servizi } from '../components'
const Home = () => {
  return (
    <Wrapper className='page'>
      <section className='main page-100'>
        <div className='text'>
          <h2 className='pretitle'>DAL 1945</h2>
          <h1 className='title'>
            Curiamo il nostro <br /> patrimonio
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit.
            Neque, nesciunt.
          </p>
        </div>
      </section>
      <section className='page-100'>
        <Servizi />
        <FeaturedLavori />
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    background: var(--background-image) center center fixed;
    background-size: cover;
  }

  .text {
    margin-left: 50px;
    margin-top: 100px;
  }

  .pretitle {
    text-align: left;
    align-items: left;
    font-family: Mirage;
    font-size: 25px;
    letter-spacing: 5px;
    margin-top: 2.5rem;
    color: white;
  }

  .title {
    margin-top: 2rem;
    text-align: left;
    align-items: left;
    margin-bottom: 1rem;
    font-size: 50px;
    font-family: Mirage;
    letter-spacing: 5px;
    color: white;
  }

  .text p {
    text:align: left;
    align-items: left;
    font-size: 18px;
    font-family: Mirage;
    letter-spacing: 2px;
    color: white;

  }

`

export default Home