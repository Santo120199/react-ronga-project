import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from '../components/GridView'

const FeaturedLavori = () => {
  const { filtered_lavori: lavori, all_lavori } = useFilterContext()

  const lavHome = lavori.slice(0, 3)

  /* if (lavori.length !== all_lavori.length) {
    return <GridView lavori={lavori}>prod</GridView>
  } */
  return <GridView lavori={lavHome}></GridView>
}

export default FeaturedLavori
