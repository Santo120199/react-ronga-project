import {
  LOAD_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_lavori: [...action.payload],
      filtered_lavori: [...action.payload],
      filters: { ...state.filters },
    }
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload

    return { ...state, filters: { ...state.filters, [name]: value } }
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_lavori } = state
    const { type, citta, regione, zonaItalia } = state.filters
    let tempLav = [...all_lavori]

    if (type !== 'tutti') {
      tempLav = tempLav.filter((lav) => lav.type === type)
    }
    console.log(citta)
    if (citta !== 'Italia') {
      tempLav = tempLav.filter((lav) => lav.citta === citta)
    }

    if (regione !== 'tutti') {
      tempLav = tempLav.filter((lav) => lav.regione === regione)
    }

    if (zonaItalia !== 'tutti') {
      tempLav = tempLav.filter((lav) => lav.zonaItalia === zonaItalia)
    }

    return { ...state, filtered_lavori: tempLav }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
