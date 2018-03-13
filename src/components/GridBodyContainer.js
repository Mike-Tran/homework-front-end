import React, {Component} from 'react';
import GridItem from "./GridItem";

class GridBodyContainer extends Component {
	render(){
		return (
			<div>Inside of Grid Body Container
				<div>
					<GridItem/>
					<GridItem/>
				</div>
			</div>
		)
	}
}

export default GridBodyContainer;
