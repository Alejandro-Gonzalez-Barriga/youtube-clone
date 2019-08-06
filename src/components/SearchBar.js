import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component{
  state = {
    searchTerm: ''
  }
  //we will use an arrow function to bind the event handler function since
  //arrow functions dont have their own 'this' inside the function,
  //'this' will refier to the class

  handleChange = (event) => {
    //console.log(event.target.value);//changes the state to whatever the user inputs
    //searchTerm is now event.target.value
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    //we are going to fetch our searchTerm from the state in order to use it to fetch
    //data from the api.
    //we will use destructuring in order to have cleaner code
    //we no longer have to wright this.state.'key' every time we needed to reference a
    //key value pair
    const { searchTerm } = this.state;
    //this will pass the state as props to the App componet
    const { onFormSumbit } = this.props;
    //
    onFormSumbit(searchTerm);

    //the following line prevents the page from refreshing when the search term is submited
    event.preventDefault();
  }

  render(){
    return(
      <Paper elevation={6} style={{padding: '25px'}}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleChange} />
        </form>
      </Paper>
    )
  }
}

export default SearchBar;
