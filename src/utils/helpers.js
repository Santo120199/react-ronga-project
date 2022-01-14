export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  return ['tutti', ...new Set(unique)]
}

export const getUniqueValuesHome = (data, type) => {
  let unique = data.map((item) => item[type])
  return [...new Set(unique)]
}
