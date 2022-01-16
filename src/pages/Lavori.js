import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'
import { LavoriList, Filters } from '../components'
import { useFilterContext } from '../context/filter_context'

const Lavori = () => {
  const { citta } = useParams()

  const { clearFilter } = useFilterContext()

  useEffect(() => {
    clearFilter()
  }, [])

  return (
    <main>
      <Wrapper className='page'>
        <div className='section-center'>
          <h1 className='title'>I NOSTRI LAVORI</h1>
          <hr className='line' />
          <Filters />
          <LavoriList citta={citta} />
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div``

export default Lavori
