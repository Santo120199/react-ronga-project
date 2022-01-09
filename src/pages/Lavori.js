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

const Wrapper = styled.div``

export default Lavori
