import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import { LOAD_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS } from '../actions'
import { useProductsContext } from './products_context'

const initialState = {
  filtered_lavori: [],
  all_lavori: [],
  filters: {
    categoria: 'tutti',
    type: 'tutti',
    citta: 'Italia',
    regione: 'tutti',
    zonaItalia: 'tutti',
  },
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const { lavori } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    // eslint-disable-next-line
    dispatch({ type: LOAD_PRODUCTS, payload: lavori })
  }, [lavori])

  useEffect(() => {
    // eslint-disable-next-line
    dispatch({ type: FILTER_PRODUCTS })
  }, [lavori, state.filters])

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    console.log(name)
    console.log(value)

    if (name === 'type') {
      value = e.target.textContent
    }
    if (name === 'citta') {
      value = e.target.textContent
    }

    if (name === 'regione') {
      value = e.target.textContent
    }

    if (name === 'zonaItalia') {
      value = e.target.textContent
    }

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }

  return (
    <FilterContext.Provider value={{ ...state, updateFilters }}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
