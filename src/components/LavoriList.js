import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const LavoriList = () => {
  const { filtered_lavori: lavori } = useFilterContext()

  return <GridView lavori={lavori}>product list</GridView>
}

export default LavoriList
