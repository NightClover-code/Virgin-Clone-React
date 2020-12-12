import React from 'react';
import SquareImage from './SquareImage';
import TextContent from './TextContent';

const Square = ({ src, text, squareRef }) => {
	return (
		<div className="square" ref={squareRef}>
			<SquareImage src={src} />
			<TextContent text={text} />
		</div>
	);
};

export default Square;
