import React from 'react'
import { FormRadioButtonProps } from '../../../../../types/search.types'
import { Radio, Label } from './radioButton.styled'

export const RadioButton = ({value, checked, handleOption}: FormRadioButtonProps) => {
  return(
    <div>
      <Radio type='radio' 
             name='option' 
             id={value}
             defaultChecked={checked}
      />

      <Label htmlFor={value} onClick={() => {handleOption(value)}}>
        {value}
      </Label>
    </div>
  )
}