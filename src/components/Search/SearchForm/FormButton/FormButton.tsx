import React from 'react'
import { connect } from 'react-redux'
import { ImapAppStateToProps } from '../../../../types/redux.types'
import { FormButtonProps } from '../../../../types/search.types'
import { Button, Wrapper } from './formButton.styled'

const FormButton = ({loading}: FormButtonProps) => {
  return(
    <Wrapper>
      <Button type='submit' disabled={loading ? true : false}>
        Find
      </Button>
    </Wrapper>
  )
}

const mapStateToProps = (state: ImapAppStateToProps) => {
  return {
    loading: state.app.isLoading
  }
}

export default connect(mapStateToProps, null)(FormButton)