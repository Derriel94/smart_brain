import React from 'react';

const Rank = ({name, entries}) => {

	return (
		<div>
			<p className="black f3 pa4">
				{name} Your Number of {entries}
			</p>
		</div>
		);
};

export default Rank;