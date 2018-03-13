import _ from 'underscore';
import GridBodyContainer from "./GridBodyContainer";
import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import {getGifRequest} from "../util/api";
import {LinearProgress} from "material-ui";

class Home extends Component {
	state = {
		isLoading: true,
		searchTerm: 'Blade Runner',
		offSet: 0,
		gifs: [],
	};

	componentDidMount() {
		window.addEventListener('scroll', _.throttle(this.onScroll, 16), false);
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

	componentWillUnmount() {
		window.removeEventListener('scroll', _.throttle(this.onScroll(), 16), false);
	}

	/**
	 *
	 */
	onScroll = () => {
		if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
			this.state.gifs.length &&
			!this.state.isLoading
		) {
			this.onPaginatedSearch();
		}
	};

	/**
	 *
	 */
	onPaginatedSearch = () => {
		this.setState((prevState) => {
			return {
				offSet: prevState.offSet + 25,
				isLoading: true,
			};
		});
		getGifRequest(this.state.searchTerm, this.state.offSet)
			.then(moreGif => {
				const combo = [...this.state.gifs, ...moreGif.data];
				this.setState({
					gifs: combo,
					isLoading: false,
				});
			})
			.catch(err => {
				console.error(err);
			});
	};

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
