import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'

const LavoriList = ({ citta }) => {
  const { filtered_lavori: lavori } = useFilterContext()

  if (citta) {
    const lavor = lavori.filter((la) => la.citta === citta)
    console.log(lavor)
    return <GridView lavori={lavor}>product list</GridView>
  }

  return <GridView lavori={lavori}>product list</GridView>
}

export default LavoriList
