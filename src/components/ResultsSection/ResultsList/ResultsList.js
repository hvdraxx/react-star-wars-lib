/* eslint-disable array-callback-return */
import React from 'react';
import ListItem from './ListItem/ListItem';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 50px;
`

export default class ResultsList extends React.Component {
  render() {
    const response = this.props.response;
    const listItems = response.map((item) =>
      <ListItem key={item.name}
                item={item}
                selectItem={this.props.selectItem}
                getListOfItems={this.getListOfItems}/>
    );

    // remove checked attribute 
    const list = document.querySelectorAll('input[name=item]')
    Object.values(list).map((item) => {
      if (item.checked) item.checked = false
    })

    return(
      <List>
        {listItems}
      </List>
    )
  }
}