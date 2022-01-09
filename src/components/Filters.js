import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
  const {
    filters: { categoria, type },
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
                className={`${newT === t.toLowerCase() ? 'active' : null}`}
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
    color: black;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    .filtro {
      margin-left: 0;
    }

    .filtro div button {
      font-size: 18px;
    }
  }
`

export default Filters
