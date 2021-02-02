import React from 'react'
import { connect } from 'react-redux'
import { hideError } from '../../redux/actions/appActions'
import { IModalProps } from '../../types/modal.types'
import { ImapAppStateToProps } from '../../types/redux.types'
import { TextWrapper, Overlay, Wrapper, Button } from './modal.styled'

const Modal = ({error, hideError}: IModalProps) => {
  const text = (error: string) => {
    switch(error) {
      case 'empty':
        return (
          <TextWrapper>
            {`Input field should not be empty.`}
          </TextWrapper>
        )
      
      case 'notFound':
        return (
          <TextWrapper>
            {`Nothing found. Try again.`}
          </TextWrapper>
        )

      case 'error': 
        return (
          <TextWrapper>
            {`Something went wrong. Try again.`}
          </TextWrapper>
        )
    }
  }

  return(
    <Overlay>
      <Wrapper>
        {text(error)}
        <Button onClick={() => {hideError()}}>
          close
        </Button>
      </Wrapper>
    </Overlay>
  )
}

const mapStateToProps = (state: ImapAppStateToProps) => {
  return {
    error: state.app.responseError.message
  }
}

export default connect(mapStateToProps, { hideError })(Modal)