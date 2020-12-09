import React from 'react';

const SquareImage = ({ src }) => {
	return (
		<div className="img-container">
			<img src={src} alt="square" />
		</div>
	);
};

export default SquareImage;
