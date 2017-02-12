import React, {PropTypes} from 'react';

function Comment(props) {

	const {comment:{text,name}}=props;
	return(
		<div>
			<p>{text}</p>
			<b>by {name}</b>
		</div>
	)
}

export default Comment;
