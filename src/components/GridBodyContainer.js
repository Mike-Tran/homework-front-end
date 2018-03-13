import React, {Component} from 'react';
import GridItem from "./GridItem";

class GridBodyContainer extends Component {
	render(){
		return (
			<div className='grid'>
				{this.props.gifs.length >  0 && this.props.gifs.map((gif) => (
					<GridItem gif={gif} key={gif.id}/>
				))
				}
			</div>
		)
	}
}

export default GridBodyContainer;
