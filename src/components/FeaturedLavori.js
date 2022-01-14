import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from '../components/GridView'

const FeaturedLavori = () => {
  const { filtered_lavori: lavori, all_lavori } = useFilterContext()

  if (lavori.length !== all_lavori.length) {
    return <GridView lavori={lavori}>prod</GridView>
  }
  return <div></div>
}

export default FeaturedLavori
