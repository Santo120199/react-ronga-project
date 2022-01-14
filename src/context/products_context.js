import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import data from '../data'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const formatData = (data) => {
  let tempLavori = data.map((item) => {
    let id = item.sys.id
    let images = item.fields.images.map((image) => image.fields.file.url)
    let lavori = {
      ...item.fields,
      images,
      id,
    }
    return lavori
  })
  return tempLavori
}

const getLavoro = (data, id) => {
  let tempLavoro = data.find((lav) => lav.sys.id === id)
  let images = tempLavoro.fields.images.map((image) => image.fields.file.url)
  const [img1, ...imgD] = images

  let lavoro = {
    ...tempLavoro.fields,
    id,
    img1,
    imgD,
    images,
  }

  return lavoro
}

const initialState = {
  isSidebarOpen: false,
  lavori: [],
  featured_lavori: [],
  lavoro: {},
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  const fetchLavori = (data) => {
    dispatch({ type: GET_PRODUCTS_BEGIN })

    try {
      const lavori = formatData(data)

      const featured_lavori = data.filter(
        (lavoro) => lavoro.fields.featured === true
      )

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: lavori })
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR })
    }
  }

  const fetchLavoro = (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })

    try {
      const lavoro = getLavoro(data, id)

      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: lavoro })
    } catch (error) {}
  }

  useEffect(() => {
    // eslint-disable-next-lines
    fetchLavori(data)
  }, [])

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchLavoro, fetchLavori }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
