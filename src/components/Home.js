import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import GridBodyContainer from "./GridBodyContainer";

class Home extends Component {

	render(){
		return (
			<div className='home'>
				<SearchBar/>
				<GridBodyContainer/>
			</div>
		)
	}

}

export default Home;
