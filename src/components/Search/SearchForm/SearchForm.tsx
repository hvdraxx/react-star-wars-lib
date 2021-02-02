import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { FormInput } from './FormInput/FormInput'
import { FormRadio } from './FormRadio/FormRadio'
import FormButton from './FormButton/FormButton'
import { setResponse, resetDataState } from '../../../redux/actions/dataActions'
import { showError, toggleLoading } from '../../../redux/actions/appActions'
import { getResponse } from '../../../utils/getResponse'
import { SearchProps } from '../../../types/search.types'
import { Form, Heading } from './searchForm.styled'

const SearchForm = ({setResponse, resetDataState, showError, toggleLoading}: SearchProps) => {
  const [option, setOption] = useState<string>('people')
  const [value, setValue]   = useState<string>('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (value.trim() === '') {
      showError('empty')
      resetDataState()
      setValue('')
    }
    else {
      toggleLoading()
      resetDataState()
      setValue('')

      try {
        let response = await getResponse(option, value)
        setResponse(response.data, response.status)
        if (response.data.length === 0 && response.status === 200) {
          showError('notFound')
        }
      }
      catch (e) {
        showError('error')
      }
      
      toggleLoading()
    }
  }
 
  return (
    <TransitionGroup component={null} appear in>
      {true && (
        <CSSTransition classNames="form" timeout={1000} >
          <Form onSubmit={handleSubmit}>
            
            <Heading>
              what would you like to find?
            </Heading>

            <FormRadio handleOption={(option) => {setOption(option)}}/>
            <FormInput handleValue={(value) => {setValue(value)}} value={value}/>
            <FormButton loading/>

          </Form>
        </CSSTransition>
      )}
  </TransitionGroup>
  )
}

const mapDispatchToProps = {
  setResponse,
  resetDataState,
  showError,
  toggleLoading
}

export default connect(null, mapDispatchToProps)(SearchForm)