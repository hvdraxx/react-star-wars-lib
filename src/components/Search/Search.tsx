import React from 'react'
import { Heading } from './Heading/Heading'
import SearchForm from './SearchForm/SearchForm'
import { Wrapper } from './search.styled'

export const Search = () => {
  return(
    <Wrapper>
      <Heading />
      <SearchForm/>
    </Wrapper>
  )
}