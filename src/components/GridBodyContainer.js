import React, {Component} from 'react';
import GridItem from "./GridItem";

class GridBodyContainer extends Component {

	render() {
		return (
			<div className='grid'>
				{this.props.gifs.length > 0 && this.props.gifs
					.sort((a, b) => {
						const firstDate = new Date(a.import_datetime);
						const secDate = new Date(b.import_datetime);
						if (this.props.sortOrder === 'oldest') {
							return secDate - firstDate;
						}
						return firstDate - secDate;
					})
					.map((gif) => (
						<GridItem gif={gif} key={gif.id}/>
					))
				}
			</div>
		)
	}
}

export default GridBodyContainer;
