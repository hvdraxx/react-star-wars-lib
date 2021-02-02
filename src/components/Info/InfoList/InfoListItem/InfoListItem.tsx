import React from 'react'
import { InfoListItemProps } from '../../../../types/info.types'
import { ListItem, Name, Value } from './infoListItem.styled'

export const InfoListItem = ({property, value}: InfoListItemProps) => {
  return(
    <ListItem>
      <Name>{property}</Name>: <Value>{value}</Value>
    </ListItem>
  )
}