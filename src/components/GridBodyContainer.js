import React, {Component} from 'react';
import GridItem from "./GridItem";
import PropTypes from "prop-types";

class GridBodyContainer extends Component {

	//TODO(michaelhuy): Add favorite functionality that stores ids into a list. Then use /v1/gifs/?id=123,456

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

GridBodyContainer.propTypes = {
	sortOrder: PropTypes.string,
	gifs: PropTypes.arrayOf(PropTypes.shape({
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
		source_post_url:
		PropTypes.string,
		source_tld: PropTypes.string,
		title: PropTypes.string,
		trending_datetime: PropTypes.string,
		type: PropTypes.string,
		url: PropTypes.string,
		username: PropTypes.string,
	})),
};
