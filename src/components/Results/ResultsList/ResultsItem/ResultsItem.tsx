import React from 'react'
import { connect } from 'react-redux'
import { chooseItem } from '../../../../redux/actions/dataActions'
import { ResultsItemProps } from '../../../../types/results.types'
import { Item, Radio, Label } from './resultsListItem.styled'

const ResultsItem = ({item, chooseItem}: ResultsItemProps) => {
  return(
    <Item>
      <Radio 
        type="radio"
        name='item'
        id={item.name}
      />

      <Label 
        htmlFor={item.name}
        onClick={() => {chooseItem(item)}}>
          
        {item.name}

      </Label>
    </Item>
  )
}

export default connect(null, { chooseItem })(ResultsItem)