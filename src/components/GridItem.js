import React from 'react';
import {
	ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, GridListTile, GridListTileBar,
	IconButton, Typography
} from "material-ui";
import FavoriteIcon from 'material-ui-icons/Favorite';
import PropTypes from "prop-types";

const GridItem = (props) => {
	const { gif } = props;
	const fixedTitle = gif.title.split(" ").map((word) => {
		const wholeWord = word.substring(0, 1).toUpperCase();
		return wholeWord + word.substring(1).toLowerCase();
	}).join(" ");

	return (
			<div key={gif.id}>
				<ExpansionPanel>
					<ExpansionPanelSummary >
						<GridListTile cols={1} rows={1} className='gridList'>
							<img src={gif.images.original.url} alt={gif.title} />
							<GridListTileBar
								title={gif.title}
								titlePosition="top"
								actionIcon={
									<IconButton>
										<FavoriteIcon />
									</IconButton>
								}
								actionPosition="left"
							/>
						</GridListTile>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails className='gifDetails'>
						<Typography>
							<a href={gif.bitly_url}>{fixedTitle}</a>
						</Typography>
						<Typography>
							<em>Date Added: </em> {gif.import_datetime}
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
	)
};

export default GridItem;

GridItem.propTypes = {
	gif: PropTypes.shape({
		bitly_gif_url: PropTypes.string,
		bitly_url: PropTypes.string,
		content_url: PropTypes.string,
		embed_url: PropTypes.string,
		id: PropTypes.string,
		images: PropTypes.objectOf(PropTypes.shape({
			original: PropTypes.objectOf(PropTypes.shape({
				frames: PropTypes.string,
				height: PropTypes.string,
				mp4: PropTypes.string,
				mp4_size: PropTypes.string,
				size: PropTypes.string,
				url: PropTypes.string,
				webp: PropTypes.string,
				webp_size: PropTypes.string,
				width: PropTypes.string,
			})),
		})),
		import_datetime: PropTypes.string,
		is_indexable: PropTypes.number,
		is_sticker: PropTypes.number,
		rating: PropTypes.string,
		slug: PropTypes.string,
		source: PropTypes.string,
		source_post_url: PropTypes.string,
		source_tld: PropTypes.string,
		title: PropTypes.string,
		trending_datetime: PropTypes.string,
		type: PropTypes.string,
		url: PropTypes.string,
		username: PropTypes.string,
	}),
};