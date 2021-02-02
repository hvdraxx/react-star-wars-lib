import { DataType, ResponseType } from "../types/common.types"

export const getResponse = async (option: string, value: string): Promise<ResponseType> => {
  let url = `https://swapi.dev/api/${option}/?search=${value}`
  
  let response = await fetch(url)
  if (response.ok) {
    let result = await response.json()
    const data = result.results
    return {
      data: await filterItems(data),
      status: response.status
    }
  }
  else {
    return {
      data: [],
      status: response.status,
    }
  }
}

const filterItems = async (data: DataType): Promise<DataType> => {
  const filteredData = await Promise.all(data.map(async item => {

    const propsToDelete = ['url', 'created', 'edited', 'species', 'residents', 'pilots']
    propsToDelete.forEach(prop => {
      delete item[prop]
    });

    if (typeof item.homeworld === 'string' && item.homeworld.length !== 0) {
      const response = await fetch(item.homeworld)
      const result   = await response.json()
      item.homeworld =  result.name
    } 
    else {
      delete item['homeworld']
    }

    if (Array.isArray(item.films) && item.films.length !== 0) {
      item.films = await Promise.all(item.films.map( async filmURL => {
        const response = await fetch(filmURL)
        const result   = await response.json()
        return result.title
      }))
      item.films.join(', ')
    }
    else {
      delete item['films']
    }

    if (Array.isArray(item.starships) && item.starships.length !== 0) {
      item.starships = await Promise.all(item.starships.map( async starshipURL => {
        const response = await fetch(starshipURL)
        const result   = await response.json()
        return result.name
      }))
      item.starships.join(', ')
    }
    else {
      delete item['starships']
    }

    if (Array.isArray(item.vehicles) && item.vehicles.length !== 0) {
      item.vehicles = await Promise.all(item.vehicles.map( async vehicleURL => {
        const response = await fetch(vehicleURL)
        const result   = await response.json()
        return result.name
      }))
      item.vehicles.join(', ')
    }
    else {
      delete item['vehicles']
    }

    Object.entries(item).map(([key]) => {
      if (key.includes('_')) {
        Object.defineProperty(item, key.replace(/_/gi, ' '), Object.getOwnPropertyDescriptor(item, key)!)
        delete item[key]
      }
      return null
    })

    return item
  }))
  
  return filteredData
}
