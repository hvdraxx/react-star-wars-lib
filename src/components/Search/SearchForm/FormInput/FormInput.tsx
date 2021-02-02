import React from 'react'
import { FormInputProps } from '../../../../types/search.types'
import { Input, Wrapper } from './formInput.styled'

export const FormInput = ({handleValue, value}: FormInputProps) => {

  const valueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleValue(event.target.value)
  }

  return(
    <Wrapper>
      <Input
      type="text"
      placeholder="e. g. Skywalker"
      id="inputSearch"
      autoComplete="off"
      onChange={valueHandler}
      value={value}
      />
    </Wrapper>
  )
}