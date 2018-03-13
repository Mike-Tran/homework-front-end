import React from 'react';
import {GridListTile, GridListTileBar, IconButton} from "material-ui";
import FavoriteIcon from 'material-ui-icons/Favorite';

const GridItem = (props) => {
	return (
			<div key={props.gif.id} onClick={() => {window.open(props.gif.url)}}>
				<GridListTile cols={1} rows={1} className='gridList'>
					<img src={props.gif.images.original.url} alt={props.gif.title} />
					<GridListTileBar
						title={props.gif.title}
						titlePosition="top"
						actionIcon={
							<IconButton>
								<FavoriteIcon />
							</IconButton>
						}
						actionPosition="left"
					/>
				</GridListTile>
			</div>
	)
};

export default GridItem;