import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoList, VideoDetail } from './components';

import youtube from './api/youtube';



class App extends React.Component {

	//the following handles the user request to the api,
	//it concats the base url with the parameters of the function
	//async await stops the execution of the code until something gets fetched
	//youtube.get is an axios instance of fetch
	//'search' is a continuation of the base url + (/search)
 	//than the parameters, q will become user input
	handleSubmit = async (searchTerm) => {
		const response = await youtube.get('search', {
			//after the base url, we usually have parameters
	    //ex. ..?apiKey=1232123123&searchQuery='mista madd'
	    params: {
	      //part snippet will take place of the ex on line 22
	      part: 'snippet',
	      //this is the maximum results to be returned
	      maxResults: 5,
	      key: '',
				q: searchTerm
			}
		});
		console.log(response.data.items)
	}

	render() {
      return (
        <Grid justify="center" container spacing={10}>
					<Grid item xs={12}>
						<Grid container spacing={10}>
							<Grid item xs= {12}>
								<SearchBar onFormSumbit={this.handleSubmit} />
							<Grid item xs ={8}>
								<VideoDetail />
							</Grid>
							<Grid item xs ={4}>
								<VideoList />
							</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
      );
    }
}

export default App;
