import _ from 'underscore';
import React, { Component } from 'react';
import {AppBar, TextField, Toolbar, Typography} from "material-ui";
import PropTypes from 'prop-types';
import SortSelect from "./SortSelect";
import blueGrey from 'material-ui/colors/blueGrey';

class SearchBar extends Component {
	state = {
		searchField: '',
		sortBy: 'oldest'
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

	/**
	 * Handles the gif sort order.
	 * @param {!Event} event
	 */
	handleSortOrder = (event) => {
		if(this.state.sortBy !== event.target.value){
			this.setState({sortBy:  event.target.value});
			this.props.changeSortOrder(event.target.value);
		}
	};

	render(){
		return (
			<AppBar position="sticky">
				<Toolbar>
					<SortSelect sortByValue={this.state.sortBy}
											handleSortOrder={this.handleSortOrder}/>
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
						InputLabelProps={{color: blueGrey[50]}}
					/>
				</Toolbar>
			</AppBar>
		)
	}
}

export default SearchBar

SearchBar.propTypes = {
	changeSortOrder: PropTypes.func.isRequired,
	searchForGifTerm: PropTypes.func.isRequired,
};
