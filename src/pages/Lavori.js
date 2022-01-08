import React from 'react'
import styled from 'styled-components'
import { LavoriList, Filters } from '../components'

const Lavori = () => {
  return (
    <main>
      <Wrapper className='page'>
        <div className='section-center'>
          <h1 className='title'>I NOSTRI LAVORI</h1>
          <hr className='line' />
          <Filters />
          <LavoriList />
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }

  @media (min-width: 250px) {
    .products {
      justify-content: center;
      grid-template-columns: 150 1fr;
    }
  }

  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
      justify-content: center;
    }
  }
`

export default Lavori
