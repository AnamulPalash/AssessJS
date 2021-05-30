import React from 'react';
import './style/row.css';

function Row(setNotes) {
	return(
		<div key={"title" + setNotes.index} className="body-row">
			{setNotes.index + 1}. <span>{setNotes.value}</span>
			<button onClick={setNotes.onRowDelete}>X</button>
		</div>
	);
}

export default Row;
