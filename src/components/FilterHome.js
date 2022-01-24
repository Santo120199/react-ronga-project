import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValuesHome } from '../utils/helpers'

const FilterHome = () => {
  const {
    filters: { zonaItalia },
    updateFilters,
    all_lavori,
  } = useFilterContext()

  const newR = getUniqueValuesHome(all_lavori, 'zonaItalia')

  return (
    <Wrapper>
      <div className='filtro'>
        <h1 className='titleHome'>I Nostri Lavori</h1>
        <div className='filtro-btn'>
          {newR.map((r, index) => {
            return (
              <button
                key={index}
                onClick={updateFilters}
                name='zonaItalia'
                type='button'
                className={`${zonaItalia === r ? 'attivo' : null}`}
              >
                {r}
              </button>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: -40px;
  .filtro {
    margin-bottom: 20px;
  }

  .titleHome {
    text-align: center;
    font-family: Libre-Baskerville-Bold;
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }

  .filtro-btn {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    margin-top: 30px;
  }
  .filtro button {
    background: rgb(123, 27, 2, 0.6);
    padding: 15px;
    padding-left: 35px;
    padding-right: 35px;
    border: none;
    margin-left: 20px;
    font-family: Gotham-Medium;
    letter-spacing: 2px;
    font-size: 20px;
    cursor: pointer;
    text-transform: capitalize;
    color: black;
  }
  .attivo {
    background: var(--background) !important;
    border: solid rgb(123, 27, 2, 0.6) 2px !important;
  }

  @media screen and (min-width: 320px) and (max-width: 424px) {
    .filtro {
      margin-top: 20px;
    }
    .filtro-btn {
      display: flex;
      flex-directio: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    .filtro button {
      padding: 5px;
      margin-bottom: 5px;
      font-size: 16px;
    }

    .titleHome {
      font-size: 25px;
    }
  }

  @media screen and (min-width: 425px) and (max-width: 992px) {
    .titleHome {
      font-size: 30px;
    }
    .filtro button {
      font-size: 16px;
    }
  }
`

export default FilterHome
