import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "material-ui";

const SortSelect = (props) => {
	return (
		<FormControl className='sortFormControl'>
			<InputLabel htmlFor="sort">Sort</InputLabel>
			<Select
				value={props.sortByValue}
				onChange={props.handleSortOrder}
				inputProps={{
					name: 'sort',
					id: 'sort-order'
				}}>
				<MenuItem value='oldest'>Oldest</MenuItem>
				<MenuItem value='newest'>Newest</MenuItem>
			</Select>
		</FormControl>
	)
};

export default SortSelect;