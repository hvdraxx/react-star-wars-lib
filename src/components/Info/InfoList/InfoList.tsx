import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { InfoListItem } from './InfoListItem/InfoListItem'
import { IDataItem } from '../../../types/common.types'
import { ImapDataStateToProps } from '../../../types/redux.types'
import { List } from './infoList.styled'

const InfoList = ({item}: IDataItem) => {
  return(
    <TransitionGroup component={List} appear>
      {Object.entries(item).map(([key, value]) => (
          <CSSTransition
            key={`${key}/transition`}
            timeout={600}
            classNames="info"
          >

            <InfoListItem 
              key={key} 
              property={key} 
              value={Array.isArray(value) ? value.join(', ') : value}
            />

          </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

const mapStateToProps = (state: ImapDataStateToProps) => {
  return {
    item: state.data.choosedItem
  }
}

export default connect(mapStateToProps, null)(InfoList)