import React from 'react'
import { RadioButton } from './RadioButton/RadioButton'
import { FormRadioProps } from '../../../../types/search.types'
import { Wrapper } from './formRadio.styled'

export const FormRadio = ({handleOption}: FormRadioProps) => {
  return(
    <Wrapper>
      <RadioButton value='people'    handleOption={handleOption} checked/>
      <RadioButton value='planets'   handleOption={handleOption}/>
      <RadioButton value='starships' handleOption={handleOption}/>
    </Wrapper>
  )
}