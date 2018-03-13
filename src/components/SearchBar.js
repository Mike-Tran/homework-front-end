import React, {Component } from 'react';
import {AppBar, TextField, Toolbar, Typography} from "material-ui";
import _ from 'underscore';

class SearchBar extends Component {
	state = {
		searchField: '',
	};

	/**
	 * Handles the search bar changes and validates the string. Throttles the gif search to conserve unnecessary searches.
	 * @param {!Event} event
	 */
	handleTextChange = (event) => {
		const cleanString = event.target.value.replace(/ /g, '+');
		this.setState({searchField:  event.target.value});
		_.throttle(this.props.searchForGifTerm(cleanString), 100);
	};

	render(){
		return (
			<AppBar position="sticky">
				<Toolbar>
					<Typography variant="title" color="inherit" className='toolBar'>
						Gif Explorer
					</Typography>
					<TextField
						label="Search gifs here..."
						className='searchField'
						value={this.state.searchField}
						onChange={this.handleTextChange}
						margin="normal"
						type='text'
						color="inherit"/>
				</Toolbar>
			</AppBar>
		)
	}
}

export default SearchBar
