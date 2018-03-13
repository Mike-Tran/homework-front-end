import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import GridBodyContainer from "./GridBodyContainer";

class Home extends Component {
	state = {
		isLoading: true,
	};


	/**
	 *
	 */
	searchForGifTerm = () => {
		// Set loading bar
		// Reset offset
		// Make API Call
		// Update gif list
	  // Reset loading bar
	};



	render(){
		return (
			<div className='home'>
				<SearchBar searchForGifTerm={this.searchForGifTerm}/>
				<GridBodyContainer/>
			</div>
		)
	}

}

export default Home;
