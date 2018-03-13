import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import GridBodyContainer from "./GridBodyContainer";
import {getGifRequest} from "../util/api";
import {LinearProgress} from "material-ui";

class Home extends Component {
	state = {
		isLoading: true,
		searchTerm: 'Blade Runner',
		offSet: 0,
		gifs: [],
	};

	componentDidMount(){
		getGifRequest(this.state.searchTerm, this.state.offSet)
			.then((firstGifs) => {
				this.setState({
					gifs: firstGifs.data,
					isLoading: false,
				});
			})
			.catch((err) => {
				console.error("Error: ", err);
			})
	}

	/**
	 *
	 */
	searchForGifTerm = (query) => {
		this.setState({
			searchTerm: query,
			offSet: 0,
			isLoading: true,
		});

		getGifRequest(query, this.state.offSet)
			.then((newGifs) => {
				this.setState({
					gifs: newGifs.data,
					isLoading: false,
				});
			})
			.catch((err) => {
				console.error("Error: ", err);
			})
	};



	render(){
		return (
			<div className='home'>
				<SearchBar searchForGifTerm={this.searchForGifTerm}/>
				<GridBodyContainer gifs={this.state.gifs}/>
				{this.state.isLoading && <LinearProgress/>}
			</div>
		)
	}

}

export default Home;
