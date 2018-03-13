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
		sortOrder: 'oldest'
	};

	componentDidMount() {
		window.addEventListener('scroll', _.throttle(this.__onScroll, 16), false);
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
		window.removeEventListener('scroll', _.throttle(this.__onScroll(), 16), false);
	}

	/**
	 * We calculate if the user has hit the 'bottom' of the page.
	 * @private
	 */
	__onScroll = () => {
		if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
			this.state.gifs.length &&
			!this.state.isLoading
		) {
			this._onPaginatedSearch();
		}
	};

	/**
	 * When a user hits the bottom of the page, it makes a new call for the next set of gifs with the same search query.
	 * @private
	 */
	_onPaginatedSearch = () => {
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
	 * Makes a new search based off the query.
	 * @param {string} query
	 * @export
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

	/**
	 * Changes the state's sort order.
	 * @param {string} sortOrder
	 * @export
	 */
	handlesSortOrder = (sortOrder) => {
		this.setState({sortOrder});
	};

	render(){
		return (
			<div className='home'>
				<SearchBar searchForGifTerm={this.searchForGifTerm}
									 changeSortOrder={this.handlesSortOrder}/>
				<GridBodyContainer gifs={this.state.gifs}
													 sortOrder={this.state.sortOrder}/>
				{this.state.isLoading && <LinearProgress/>}
			</div>
		)
	}

}

export default Home;
