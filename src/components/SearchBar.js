import React, {Component } from 'react';
import {AppBar, TextField, Toolbar, Typography} from "material-ui";


class SearchBar extends Component {
	state = {
		searchField: ''
	};

	handleTextChange = (ev) => {

		console.log(ev.target.value, "handle change")
	};

	render(){
		return (
			<AppBar position="sticky">
				<Toolbar>
					<Typography variant="title" color="inherit" className='toolBar'>
						Gif Explorer
					</Typography>
					<TextField
						id="search"
						label="Search gifs here..."
						className='searchField'
						value={this.state.searchField}
						onChange={this.handleTextChange}
						margin="normal"
						color="inherit"/>
				</Toolbar>
			</AppBar>
		)
	}
}

export default SearchBar
