import React from 'react';
import './style/row.css';

function Row(props) {
	return(
		<div key={"title" + props.index} className="body-row">
			{props.index + 1}. <span>{props.value}</span>
			<button onClick={props.onRowDelete}>X</button>
		</div>
	);
}

export default Row;
