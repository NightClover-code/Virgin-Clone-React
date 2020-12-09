import React from 'react';
import SquareImage from './SquareImage';
import TextContent from './TextContent';

const Square = ({ src, text }) => {
	return (
		<div className="square">
			<SquareImage src={src} />
			<TextContent text={text} />
		</div>
	);
};

export default Square;
