import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues } from '../utils/helpers'

const Filters = () => {
  const {
    filters: { type },
    updateFilters,
    all_lavori,
  } = useFilterContext()

  const newT = getUniqueValues(all_lavori, 'type')

  return (
    <Wrapper>
      <div className='filtro'>
        <div>
          {newT.map((t, index) => {
            return (
              <button
                key={index}
                onClick={updateFilters}
                name='type'
                type='button'
                className={`${type === t.toLowerCase() ? 'active' : null}`}
              >
                {t}
              </button>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-bottom: 30px;
  .filtro {
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
    
  }
  .filtro div {
    display: flex;
  }

  .filtro div button {
    background: transparent;
    border: none;
    margin-left: 20px;
    font-family: Gotham-Book;
    font-size: 20px;
    cursor: pointer;
    text-transform: capitalize;
    color: black;
  }

  .active {
    color: var(--clr-granata) !important;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    .filtro {
      margin-left: 10px;
      margin-right: -10px;
    }

    .filtro div button {
      font-size: 18px;
    }
  }
`

export default Filters
